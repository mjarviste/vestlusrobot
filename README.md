This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```
/Vestlusrobot
│
├── /public              // Avalikud failid, nagu pildid ja font
│   ├── /assets
│   │   ├── aiIcon.svg
│   │   ├── sendIcon.svg
│   │   └── userIcon.svg
│   ├── /fonts
│   │   └── Ubuntu-Regular.ttf
│   └── favicon.ico
│
├── /src                 // Peamine rakenduse kaust
│   ├── /app             // Rakenduse põhikaust
│   │   ├── /api
│   │   │   └── /chat
│   │   │       └── route.ts // API lõpp
│   │   ├── /components   // Taaskasutatavad komponendid
│   │   │   ├── Button.tsx
│   │   │   ├── Message.tsx
│   │   │   ├── MessageInputContainer.tsx
│   │   │   ├── MessagesContainer.tsx
│   │   │   └── NoMessagesContainer.tsx
│   │   ├── /styles       // Stiilide kaust
│   │   │   └── globals.css
│   │   ├── layouts.tsx    // Üldine paigutus
│   │   └── page.tsx       // Pealeht
│   │
├── next.config.mjs       // Next.js konfiguratsioon
├── package.json           // Sõltuvused ja skriptid
├── tailwind.config.ts     // Tailwind CSS konfiguratsioon
└── tsconfig.json          // TypeScript konfiguratsioon

```
