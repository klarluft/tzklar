# tzKlar

**Building blocks for Tezos contracts**

[https://tzklar.com](https://tzklar.com)

## How to install

Install via npm or yarn

```bash
npm install tzklar
yarn add tzklar
```

## How to use

If you need TypeScript types for defining TZIP12, TZIP16 and TZIP21 compliant JSON metadata files:

```typescript
import { ContractMetadata, TokenMetadata } from "tzklar";

const myContractMetadata: ContractMetadata = {
  /* ... */
};

const myTokenMetadata: TokenMetadata = {
  /* ... */
};
```

## Development

To setup development environment:

```bash
yarn
```

If you update TZIP schema.json files and you want to regenerate TypeScript types files, run:

```bash
yarn process-json-schema
```

## About

This repository is part of the [tzKlar](https://tzklar.com) project intended to help others build apps on Tezos.

The project is maintained by [Michal Wrzosek](https://michal.wrzosek.pl) from [Klarluft](https://klarluft.com) company.
