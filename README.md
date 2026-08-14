# Your Portfolio

A React + Vite portfolio site with an editor/IDE-inspired design (dark theme,
code-styled hero, tab-bar navigation). All content is placeholder — everything
you need to change is marked below.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Where to add your content

| What | File |
|---|---|
| Name, title, bio, resume/GitHub/LinkedIn/email links | `src/components/Hero.jsx` |
| About paragraphs + quick facts | `src/components/About.jsx` |
| Skills / tech stack | `src/components/Skills.jsx` |
| Projects (name, description, tags, links) | `src/components/Projects.jsx` |
| Email + social links | `src/components/Contact.jsx` |
| Resume PDF | drop a file named `resume.pdf` into `public/` |
| Page title / meta description | `index.html` |
| Site name in footer | `src/components/Footer.jsx` |

Every placeholder is either obvious text like "Your Name" / "[Add a
paragraph...]", or marked with a `// TODO` comment above it — search the
project for `TODO` or `yourusername` to find every spot quickly.

## Deploy for free on Vercel

**1. Push this project to GitHub**

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create a new empty repo on GitHub (github.com/new — don't initialize with a
README), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**2. Import it into Vercel**

1. Go to https://vercel.com and sign in with your GitHub account (free).
2. Click **Add New → Project**.
3. Select your repository.
4. Vercel auto-detects Vite — leave the default build settings
   (`npm run build`, output directory `dist`).
5. Click **Deploy**.

That's it — you'll get a live URL like `your-project.vercel.app` in about a
minute. Every time you push to `main`, Vercel redeploys automatically.

**3. (Optional) Add a custom domain**

In your Vercel project → **Settings → Domains**, add a domain you own and
follow the DNS instructions. Vercel's free tier includes SSL automatically.

## Tech stack

- React 18 + Vite
- Plain CSS (no framework) — all design tokens (colors, fonts, spacing) are
  CSS variables at the top of `src/index.css` if you want to restyle
- Fonts: Sora (display), Inter (body), JetBrains Mono (code/labels)
