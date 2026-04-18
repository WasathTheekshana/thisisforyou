<div align="center">

<h1>This is for you.</h1>

<img src="public/readme-welcome.png" alt="This is for you." width="100%" />

<br/>

[![CI](https://github.com/WasathTheekshana/thisisforyou/actions/workflows/ci.yaml/badge.svg)](https://github.com/WasathTheekshana/thisisforyou/actions/workflows/ci.yaml)
[![Deploy with Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/wasaththeekshana/thisisforyou)
[![License: MIT](https://img.shields.io/badge/license-MIT-pink.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

<br/>

A tiny open source web app to create digital flower bouquets and share them with people you love.  
Pick from 12 flowers, arrange your bouquet, and send a link — **no account, no data, forever free.**

**[☕ Buy me a coffee](https://buymeacoffee.com/wasath)**

</div>

---

## Getting started

```bash
git clone https://github.com/WasathTheekshana/thisisforyou.git
cd thisisforyou
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── create/           # Bouquet builder
│   ├── about/            # About this project
│   └── bouquet/[id]/     # Shared bouquet view
├── components/
│   ├── flowers/          # Flower picker & cards
│   ├── bouquet/          # Bouquet preview
│   └── ui/               # Button, SketchBox — shared primitives
├── data/                 # flowers.json — single source of truth
├── hooks/                # useBouquet
├── lib/                  # cloudinary URLs, encode/decode utils
└── types/                # Shared TypeScript types
```

## Contributing

Contributions are welcome — please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

## License

[MIT](./LICENSE) © [WasathTheekshana](https://github.com/WasathTheekshana)
