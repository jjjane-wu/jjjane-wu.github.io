# jjjane-wu.github.io

Personal site of Jane Wu. Next.js (App Router), TypeScript and Tailwind, exported as static files and deployed to GitHub Pages.

## Run locally

```bash
pnpm install
pnpm dev
```

## Edit content

All copy lives in `src/content/site.ts`: profile, experience, projects, research and skills.
Inside a bullet, `**text**` renders bold and `==text==` renders as a highlight.

## Resume PDF

Save the PDF as `public/Jane-Wu-Resume.pdf`. The download button on `/resume` appears once the file exists.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes it.
In the repository settings, Pages → Source must be set to "GitHub Actions" (one-time).
