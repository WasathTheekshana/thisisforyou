# This is for you. 🌸

A tiny web app to create digital flower bouquets and share them with people you love.

Pick from 12 flowers, arrange your bouquet, and send a shareable link — no account needed.

**Live:** coming soon &nbsp;·&nbsp; **Built with:** Next.js 16, Tailwind CSS 4, TypeScript

---

## Getting started

```bash
git clone https://github.com/WasathTheekshana/thisisforyou.git
cd thisisforyou
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── create/           # Bouquet builder
│   └── bouquet/[id]/     # Shared bouquet view
├── components/
│   ├── flowers/          # Flower picker components
│   ├── bouquet/          # Bouquet preview & canvas
│   └── ui/               # Shared primitives (Button, etc.)
├── hooks/                # useBouquet and other custom hooks
├── lib/                  # flowers data, encode/decode utils
└── types/                # Shared TypeScript types
```

## Contributing

Contributions are welcome — please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

## License

[MIT](./LICENSE) © [WasathTheekshana](https://github.com/WasathTheekshana)
