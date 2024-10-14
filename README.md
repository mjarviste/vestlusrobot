### Vestlusrobot
## Autor: Mihkel Järviste

## Kuidas alustada
1. Klooni repo: git clone https://github.com/mjarviste/vestlusrobot
2. Installige dependencied: npm install
3. Käitage rakendust: npm run dev
4. Avage brauseris: http://localhost:3000

## Koodi Struktuur
Rakenduse koodistruktuur on järgmine:
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
Struktuur on jagatud loogiliselt komponentide, pealehe ja stiilide vahel. Iga komponent on iseseisev, mis võimaldab lihtsat korduvkasutust.

## Kasutajasõbralikkus
Kasutajasõbralikkus on tagatud järgmiste elementidega:
* Lihtne navigeerimine: UI on intuitiivne ja kergesti mõistetav, võimaldades kiiret küsimuste esitamist. On lisatud funktsioonid, mis aitavad kasutajaliidest kergemini navigeerida. Näiteks on lisatud Enter klahvi vajutamisega küsimuse saatmine, automaatselt viimase sõnumini scrollimine ning tekstisisestuslahtri suurenemine pikemate küsimuste puhul.
* Reageeriv disain: Optimeeritud erinevatele ekraanisuurustele, et tagada hea kasutuskogemus.
* Visuaalne tagasiside: Sõnumite saatmise ja vastuste saamise protsessid on selgelt eristatavad. Nii kasutajal kui AI’l on enda logod ning värvid. Samuti on kasutaja poolt saadetud sõnumid paremal pool ning AI sõnumid vasakul.
* Vastuste formateerimine: AI’lt saadetud vastused on formateeritud, et need oleksid paremini loetavad. Koodiblokid, tabelid ja listid on eristatud muust tekstist, et need oleks kergesti arusaadavad.
## Värviskeem ja tüpograafia
Värviskeem: Kasutan neutraalseid toone nagu tumehall ja helehall, et luua professionaalne ja rahulik tunne. Oluliste elementide esile toomiseks (AI vastused) kasutan türkiissinist
Tüpograafia: Valisin Ubuntu fondi, kuna see on kergesti loetav ja omab  kaasaegset ning modernset välimust. 
## Disaini lähenemine
Rakendus kasutab Tailwind CSS-i, kuna:
* Kerge kohandada: Lihtne on luua enda unikaalseid elemente ja väärtuseid.
* Kasutamise kiirus: Komponentidele stiili lisamine võttis vähe aega, sest sain seda teha samas failis.
* Arusaadavus: Klassinimed muudavad koodi kergesti loetavaks.
## Automaatne testimine
Rakenduse automaatseks testimiseks saaks kasutada näiteks:
* Jest ja React Testing Library: Komponentide ja funktsioonide testimiseks. Testikisin näiteks kas automaatselt scrollimise funktsioon päriselt ka scrollib elemendini kui see välja kutsutakse.
## Ohud ja riskid
Oht mis võib rakendusega kaasneda:
* API võtme lekkimine: Hooletult hallatud OpenAI API võtme levimine. Selleks, et seda riski maandada, kasutasin keskkonnamuutujaid ehk “environment variables”.




