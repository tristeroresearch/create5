// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./Create3.sol";

error NotOwner();
error NotAuthorized();
error ZeroAddress();
error DomainAlreadyExists();

contract Create5 {
    mapping(bytes32 => address) public domainOwner;
    mapping(bytes32 => mapping(address => bool)) public isOperator;

    event DomainCreated(address indexed owner, bytes32 indexed domain);
    event DomainOwnershipTransferred(bytes32 indexed domain, address indexed newOwner);
    event DomainOperatorUpdated(bytes32 indexed domain, address indexed operator, bool isAuthorized);
    event Deployed(address indexed submitter, address indexed finalAddress, bytes32 indexed domain, bytes32 salt);

    function _onlyDomainOwner(bytes32 domain) internal view {
        if (domainOwner[domain] != msg.sender) revert NotOwner();
    }

    function _onlyAuthorized(bytes32 domain) internal view {
        address o = domainOwner[domain];
        if (!(msg.sender == o || isOperator[domain][msg.sender])) revert NotAuthorized();
    }

    function createDomain(bytes32 tag) external returns (bytes32 domain) {
        domain = keccak256(abi.encodePacked(msg.sender, tag));
        if (domainOwner[domain] != address(0)) revert DomainAlreadyExists();
        domainOwner[domain] = msg.sender;
        emit DomainCreated(msg.sender, domain);
    }

    function transferDomainOwnership(bytes32 domain, address newOwner) external {
        _onlyDomainOwner(domain);
        if (newOwner == address(0)) revert ZeroAddress();
        domainOwner[domain] = newOwner;
        emit DomainOwnershipTransferred(domain, newOwner);
    }

    function setDomainOperator(bytes32 domain, address operator, bool authorized) external {
        _onlyDomainOwner(domain);
        isOperator[domain][operator] = authorized;
        emit DomainOperatorUpdated(domain, operator, authorized);
    }

    function deploy(bytes32 domain, bytes32 salt, bytes calldata initCode)
        external
        payable
        returns (address deployed)
    {
        _onlyAuthorized(domain);
        deployed = Create3.create3(keccak256(abi.encodePacked(domain, salt)), initCode, msg.value);
        emit Deployed(msg.sender, deployed, domain, salt);
    }
    
    function computeAddress(bytes32 domain, bytes32 salt) external view returns (address) {
        return Create3.addressOf(keccak256(abi.encodePacked(domain, salt)));
    }
}
