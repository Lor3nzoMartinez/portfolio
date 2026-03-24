# Lorenzo Martinez Portfolio

Personal portfolio built with **Next.js**, **MDX**, and **Once UI**.

This repo powers a portfolio site with:

- a landing page
- an about page
- a projects/work section
- a blog
- MDX-driven content for posts and projects
- generated SEO metadata / OG images / sitemap support

## Tech stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- **MDX**
- **Once UI**
- **gray-matter** for frontmatter parsing
- **PostCSS / Sass**

---

## Repo structure

```text
src/
├── app/
│   ├── about/                 # about page
│   ├── blog/                  # blog index + blog post routes
│   │   └── posts/             # blog posts as .mdx files
│   ├── work/                  # projects index + project routes
│   │   └── projects/          # project entries as .mdx files
│   ├── api/                   # auth/check-auth endpoints
│   ├── og/                    # OG image generation
│   ├── resources/             # site content + config
│   └── utils/                 # helpers for parsing content
├── components/                # reusable app components
└── once-ui/                   # Once UI system + theme components
```

Important content locations:

```text
src/app/blog/posts/
src/app/work/projects/
src/app/resources/content.js
src/app/resources/config.js
```

---

## How content works

This portfolio is primarily content-driven.

### Blog posts
Add a new `.mdx` file to:

```text
src/app/blog/posts/
```

Example frontmatter:

```md
---
title: "My post title"
publishedAt: "2026-03-24"
summary: "Short summary for cards and SEO."
tags:
  - "React"
  - "Next.js"
  - "TypeScript"
---
```

### Projects
Add a new `.mdx` file to:

```text
src/app/work/projects/
```

Example frontmatter:

```md
---
title: "Project Name"
publishedAt: "2026-03-24"
summary: "Short project summary"
images: []
team:
  - name: "Lorenzo Martinez"
    role: "Software Engineer"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://www.linkedin.com/in/lorenzo-martinez/"
link: "https://example.com"
---
```

### Site-wide content
Edit core profile/site content here:

```text
src/app/resources/content.js
```

This includes things like:

- name
- headline
- about page content
- work experience
- social links
- page labels/descriptions

### Site config
Edit config here:

```text
src/app/resources/config.js
```

This includes:

- base URL
- route toggles
- password-protected routes
- fonts
- theme styling
- visual effects

---

## Features

### MDX-powered publishing
Both blog posts and projects are authored as `.mdx` files, making it easy to write long-form content directly in the repo.

### Projects + blog as first-class content
The portfolio is set up so projects and blog posts are both easy to add, preview, and expand over time.

### Multiple blog tags
Blog posts now support a real `tags:` array in frontmatter, not just a single tag.

### SEO support
The site includes:

- metadata generation
- Open Graph support
- sitemap generation
- robots.txt generation
- structured schema helpers

---

## Getting started

## Prerequisites

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Start production server

```bash
npm run start
```

## Lint

```bash
npm run lint
```

---

## Common editing workflows

### Add a new blog post
1. Create a new `.mdx` file in `src/app/blog/posts/`
2. Add frontmatter
3. Write the post body in MDX
4. Run the dev server and preview the blog page

### Add a new project
1. Create a new `.mdx` file in `src/app/work/projects/`
2. Add frontmatter
3. Write the project details
4. Preview it under `/work`

### Update home/about copy
Edit:

```text
src/app/resources/content.js
```

---

## Notes / gotchas

### 1. This repo still has Once UI scaffolding DNA
This project started from a Once UI portfolio base, but has been customized with personal content and custom blog/project content.

### 2. Some lockfiles were already modified
If you are picking this up later, check both:

- `package-lock.json`
- `yarn.lock`

before assuming dependency changes were intentional.

### 3. ESLint config warning
At the moment, the app can build successfully even if `npm run lint` complains about the `next/core-web-vitals` config reference depending on local toolchain/setup.
That is worth cleaning up separately if you want a fully green lint pipeline.

---

## Recommended next improvements

If I keep evolving this repo, the next useful improvements would be:

- add screenshots/thumbnails for more projects
- add featured tags or filtering on blog posts
- clean up lint config to remove toolchain-specific warnings
- add tests for content parsing helpers
- make portfolio metadata/content stricter with stronger TypeScript typing

---

## Personal GitHub README-style summary

This repo is the public-facing home for:

- my work
- my writing
- my projects
- the way I think about building software

It is intentionally set up so I can quickly publish:

- a new project write-up
- a technical blog post
- portfolio updates

without having to fight the structure every time.

---

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```
