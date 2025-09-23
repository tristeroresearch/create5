# Create5 – Domain‑scoped, permissioned CREATE3 factory

## What problem does it solve?
- **Cross‑chain reuse safety:** If different teams reuse the same salt with a plain factory, they can clash or hijack expected addresses. Create5 introduces **per‑owner domains** so each deployer has an isolated namespace.
- **Deterministic addresses with chain‑specific configs:** You often want the same contract address across chains while passing different constructor args (e.g., oracles, chain IDs). CREATE3 makes the address independent of init code; Create5 keeps that property while adding safe authorization.

## Why plain CREATE2 isn’t enough
- **`initCode` dependence:** the created contract depends on the `initCode` (constructor args) to be deployed, which is not always desired.

## Why plain CREATE3 isn’t enough
- **No ownership or operators:** Anyone who knows your salt can front‑run or squat it in a shared factory.
- **No namespacing:** A single global salt space leads to accidental collisions and malicious reuse.
- **Operational gap for cross‑chain:** You need predictable, per‑project coordination of salts across chains; plain CREATE3 doesn’t provide that structure.

## How Create5 solves it
- **Domains:** A domain is `keccak256(abi.encodePacked(owner, tag))`. All deployments use a combined salt `keccak256(abi.encodePacked(domain, salt))`, cleanly namespacing addresses per owner.
- **Permissions:** Only the domain **owner** or its **operators** can deploy under that domain.
- **CREATE3 under the hood:** Uses the official `Create3` library so final addresses are independent of init code, enabling chain‑specific parameters without changing the address formula.

## Salt mining

Salt mining for vanity addresses is straightforward, there is a [rust tool](https://github.com/dnnagy/wallet_search) available.

# Deployment

See [deployments.md](deployments.md).
