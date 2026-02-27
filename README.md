# makerSPACE Internships Hub

A simple student-and-family web hub for Dawson makerSPACE internships.

## What is on this site

- Internship overview
- Learning path
- Project track cards
- Timeline and dates
- Student launch guide with checklist, expectations, and publication targets

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/mspace-internships/`.

## Deploy to GitHub Pages (simple)

1. Create a GitHub repository named `mspace-internships`.
2. Push this folder contents to that repository.
3. Run:

```bash
npm run deploy
```

4. In GitHub repo settings, open **Pages**.
5. Set source to branch `gh-pages` and save.
6. Your site URL will be:
   `https://<username>.github.io/mspace-internships/`

## Main content files

- Home page: `src/app/page.tsx`
- Launch guide: `src/app/sessions/internship-launch/page.tsx`
- Styles: `src/app/globals.css`
