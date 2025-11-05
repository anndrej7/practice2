# Smrsaj Lako

Profesionalni planovi ishrane za gubitak kilograma. Kreiram sedmične i mesečne planove ishrane sa detaljnim objašnjenjima u PDF formatu.

## Usluge

- **Sedmični Plan Ishrane** - Detaljan sedmični plan ishrane sa objašnjenjima u PDF formatu
- **Mesečni Plan Ishrane** - Kompletan mesečni plan ishrane sa detaljnim objašnjenjima u PDF formatu
- **Plan Ishrane PDF** - Personalizovani plan ishrane dostupan u PDF formatu sa svim objašnjenjima
- **Personalizovani Planovi** - Individuelni pristup svakom klijentu
- **Nutricionističko Savetovanje** - Saveti za zdravu ishranu i gubitak kilograma

## Tehnologije

Ova web aplikacija je izgrađena koristeći:

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animacije
- [Lucide React](https://lucide.dev/) - Ikonice

## Pokretanje projekta

Prvo, pokrenite development server:

```bash
npm run dev
# ili
yarn dev
# ili
pnpm dev
# ili
bun dev
```

Otvorite [http://localhost:3000](http://localhost:3000) u vašem browseru da vidite rezultat.

Možete početi sa uređivanjem stranice modifikovanjem `app/page.tsx`. Stranica se automatski ažurira dok uređujete fajl.

## Struktura projekta

- `src/app/` - Glavne stranice aplikacije
- `src/app/components/` - React komponente
- `src/app/o-nama/` - Stranica "O nama"
- `src/app/kontakt/` - Kontakt stranica
- `src/app/api/send-email/` - API endpoint za slanje emailova
- `public/assets/` - Slike i resursi

## Email Konfiguracija

Za slanje emailova sa kontakt forme, potrebno je podesiti sledeće environment varijable:

1. Kreirajte `.env.local` fajl u root direktorijumu projekta
2. Dodajte sledeće varijable:

```bash
# Resend API Key - dobijete na https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Admin Email - email na koji stižu poruke sa kontakt forme
ADMIN_EMAIL=vas-email@domen.com
```

### Resend Setup

1. Idite na [Resend.com](https://resend.com) i kreirajte nalog
2. Verifikujte vaš domen ili koristite `onboarding@resend.dev` za testiranje
3. Kopirajte API ključ i stavite ga u `.env.local`
4. Postavite `ADMIN_EMAIL` na email adresu na koju želite da primate poruke

### Testiranje Email Funkcionalnosti

Nakon što podesite environment varijable:

1. Pokrenite development server: `npm run dev`
2. Idite na [http://localhost:3000/kontakt](http://localhost:3000/kontakt)
3. Popunite kontakt formu sa svim potrebnim podacima
4. Kliknite "Pošaljite poruku"
5. Trebalo bi da vidite success notifikaciju i da dobijete email na `ADMIN_EMAIL` adresu

**Napomena:** Za testiranje, možete koristiti default Resend email `onboarding@resend.dev` kao "from" adresu. Za produkciju, potrebno je verifikovati sopstveni domen.

## Deployment

Najlakši način za deployment Next.js aplikacije je korišćenje [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) od stvaraoca Next.js-a.

Pogledajte [Next.js deployment dokumentaciju](https://nextjs.org/docs/app/building-your-application/deploying) za više detalja.

## Kontakt

Smrsaj Lako  
Beograd, Srbija  
Tel: 069/223-55-66  
Website: [https://www.smrsajlako.com](https://www.smrsajlako.com)  
Instagram: [@smrsajlako](https://www.instagram.com/smrsajlako/)
