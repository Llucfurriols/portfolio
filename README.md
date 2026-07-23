# lluc.furriols — personal site

Personal website of **Lluc Furriols Llimargas** — AI engineer, Barcelona.
Case studies of shipped work: [Muvyt](https://muvyt.ai), a production ML system at Shalion,
[Camellos](https://apps.apple.com/es/app/camellos/id6787272166) on the App Store, hackathon builds,
and selected university work from the BSc in AI at UPC.

## Stack

Hand-written **HTML + CSS + vanilla JS**. No framework, no build step, no dependencies.

```
index.html            Home — hero, product shelf (bento), experience, about
university.html       Interactive curriculum map + UC Chile exchange
projects/*.html       One product sheet per project
assets/css/style.css  The whole design system
assets/js/main.js     Nav, reveals, curriculum accordion (~60 lines)
assets/img/           Images
```

## Run locally

Any static server works:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

Push to GitHub and enable **GitHub Pages** (Settings → Pages → deploy from branch, root).
No build step needed — all links are relative, so it works at any subpath.

> **Important:** the root user site (`llucfurriols.github.io`) already serves the
> Camellos landing page and its `app-ads.txt` (AdMob verification). Deploy this
> portfolio as a **project site** (e.g. a repo named `portfolio` →
> `llucfurriols.github.io/portfolio`) or on a custom domain — do not overwrite the
> root repo, or AdMob verification for Camellos will break.

© Lluc Furriols Llimargas. Content and images belong to their respective projects.
