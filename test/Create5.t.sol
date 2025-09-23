// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {Create5, NotAuthorized, DomainAlreadyExists} from "../contracts/Create5.sol";

/// @notice Foundry tests for Create5 deployed on Arbitrum.
/// Uses an Arbitrum fork (rpc alias "arbitrum" from foundry.toml) and the live Create5 at 0x700000581b68C2ffB7C6A760DB78AB7e95510d4a.
/// Ensures:
/// - Cannot recreate an already-created domain by the same owner (DomainAlreadyExists)
/// - A different address cannot operate on the domain (NotAuthorized)
/// - Domain owner can set an operator; operator can deploy
/// - computeAddress(domain, salt) and deploy(domain, salt, code) yield the expected deterministic address
/// - After revoking operator, operator can no longer deploy (NotAuthorized)
contract Create5ArbitrumTest is Test {
    // Live Create5 on Arbitrum as per instruction
    address constant CREATE5_ADDR = 0x700000581b68C2ffB7C6A760DB78AB7e95510d4a;

    // Given in prompt
    address constant OWNER = 0x37C9F3a6defc230FEEf956D208FF27C498ca018c;
    bytes32 constant TAG_ZERO = bytes32(0);
    bytes32 constant DOMAIN = 0xDC5510135F97C0001B61A47696529B212EA9D9AD8E39E52F97D085A29B920E7F;

    // Salt and expected deployed address
    bytes32 constant SALT = 0x9f97e02557d39c9132c703d01e76b4e5aabdbe8f0cd31e90dcfe0d48996748e4;
    address constant EXPECTED_ADDR = 0x77789592547fA2E7Bd70AA657A5Fe8f5ADc18f76;

    // Test actors
    address OPERATOR = makeAddr("operator");
    address STRANGER = makeAddr("stranger");

    Create5 create5;

    function _makeInitFromRuntime(bytes memory runtime) internal pure returns (bytes memory init) {
        // Build minimal init code that returns `runtime` as the deployed code.
        // init = 60 <len> 60 0c 60 00 39 60 <len> 60 00 f3 || runtime
        // where <len> = runtime.length and offset 0x0c = 12 bytes (init prefix length)
        uint8 len = uint8(runtime.length);
        init = abi.encodePacked(
            bytes1(0x60), bytes1(len),            // PUSH1 len
            hex"600c600039",                      // PUSH1 0x0c; PUSH1 0x00; CODECOPY
            bytes1(0x60), bytes1(len),            // PUSH1 len
            hex"6000f3",                          // PUSH1 0x00; RETURN
            runtime                               // appended runtime
        );
    }

    function setUp() public {
        // Prefer ARBITRUM_RPC env var; fallback to alias from foundry.toml
        string memory forkUrl = "";
        try vm.envString("ARBITRUM_RPC") returns (string memory v) { forkUrl = v; } catch {}
        if (bytes(forkUrl).length != 0) {
            vm.createSelectFork(forkUrl);
        } else {
            // Fallback to RPC alias from foundry.toml
            vm.createSelectFork("arbitrum");
        }
        create5 = Create5(CREATE5_ADDR);

        // Ensure the domain is owned by OWNER on this fork. If not, set storage accordingly.
        // Storage layout: mapping(bytes32 => address) domainOwner at slot 0.
        // For mapping, slot = keccak256(abi.encode(key, slotIndex))
        bytes32 slot = keccak256(abi.encode(DOMAIN, uint256(0))); // slot 0 for domainOwner
        // Read current value
        bytes32 cur = vm.load(CREATE5_ADDR, slot);
        if (address(uint160(uint256(cur))) != OWNER) {
            // store owner address in 32-byte slot (right-aligned address)
            vm.store(CREATE5_ADDR, slot, bytes32(uint256(uint160(OWNER))));
        }

        // Give some native balance to participants for deployments
        vm.deal(OWNER, 100 ether);
        vm.deal(OPERATOR, 100 ether);
        vm.deal(STRANGER, 10 ether);
    }

    function testCannotRecreateExistingDomain() public {
        // Owner trying to create same domain again with same tag should revert DomainAlreadyExists
        vm.startPrank(OWNER);
        vm.expectRevert(DomainAlreadyExists.selector);
        create5.createDomain(TAG_ZERO);
        vm.stopPrank();
    }

    function testDifferentAddressCannotUseDomain() public {
        // A different address (not owner, not operator) cannot deploy -> NotAuthorized
        vm.startPrank(STRANGER);
        vm.expectRevert(NotAuthorized.selector);
        // Use init code that deploys a trivial runtime 0x600080f3 (return 0 bytes)
        bytes memory code = _makeInitFromRuntime(hex"600080f3");
        create5.deploy(DOMAIN, bytes32(uint256(1)), code);
        vm.stopPrank();
    }

    function testOwnerSetsOperatorAndOperatorCanDeploy() public {
        // Owner sets operator
        vm.prank(OWNER);
        create5.setDomainOperator(DOMAIN, OPERATOR, true);

        // Operator can deploy; verify address matches expected for provided salt
        // Any init code works; address must be independent of code per instruction
        bytes memory code = _makeInitFromRuntime(hex"600080f3");

        // Check computeAddress matches expected
        address addr = create5.computeAddress(DOMAIN, SALT);
        assertEq(addr, EXPECTED_ADDR, "computeAddress mismatch");

        // Deploy and verify same address
        vm.prank(OPERATOR);
        address deployed = create5.deploy(DOMAIN, SALT, code);
        assertEq(deployed, EXPECTED_ADDR, "deploy returned address mismatch");
        assertEq(deployed, addr, "deploy vs computeAddress mismatch");
    }

    function testOperatorCannotDeployAfterRevocation() public {
        // Set and revoke operator
        vm.prank(OWNER);
        create5.setDomainOperator(DOMAIN, OPERATOR, true);

        vm.prank(OWNER);
        create5.setDomainOperator(DOMAIN, OPERATOR, false);

        // Attempting to deploy by revoked operator must revert
        bytes memory code = _makeInitFromRuntime(hex"600080f3");
        vm.prank(OPERATOR);
        vm.expectRevert(NotAuthorized.selector);
        create5.deploy(DOMAIN, bytes32(uint256(2)), code);
    }
}

