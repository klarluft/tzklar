# tzKlar

[![npm](https://img.shields.io/npm/v/tzklar)](https://npmjs.com/package/tzklar)

[![tzklar](/tzklar-logo.png)](https://tzklar.com)

**Building blocks for Tezos contracts**

[https://tzklar.com](https://tzklar.com)

---

Check out [tzklar-boilerplate](https://github.com/klarluft/tzklar-boilerplate) repository where you can find fully functional FA2 contract implementation using utilities from this package.

---

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

Also you can check out our documentation page:
https://klarluft.github.io/tzklar/

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

[![klarluft](./klarluft-logo-black.png)](https://klarluft.com)
[![michal-wrzosek](./michal-wrzosek-avatar.jpg)](https://github.com/michal-wrzosek)

[tzKlar](https://tzklar.com) project is created and maintained by [Michal Wrzosek](https://github.com/michal-wrzosek) from [Klarluft](https://klarluft.com).
