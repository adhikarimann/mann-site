# MANN

The personal product website for Manmohan Adhikari.

## Run locally

```bash
pnpm install
pnpm dev
```

The site includes the supplied BookMyMentor, PMAF, MuseumX and résumé PDFs under `public/`, so the evidence links work when deployed.

## Deployment

Import this folder into Vercel as a Next.js project. No environment variables are required for the current focused Ask Mann experience; replace its local response logic in `app/page.tsx` with a server-side AI route when an API key is available.
