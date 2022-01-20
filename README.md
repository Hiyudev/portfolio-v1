<p align="center">
	<img src="github/banner.png"/>
</p>

<p align="center">
	<img alt="Vercel deploy" src="https://img.shields.io/github/deployments/KeysHD/portfolio/production?label=website&logo=vercel&style=for-the-badge">
  
  <a href="https://portfolio-yuki2dev.vercel.app/">
    <img alt="Website" src="https://img.shields.io/static/v1?message=visit%20now&color=1d4ed8&label=website&labelColor=121212&logo=vercel&style=for-the-badge"/>
  </a>
</p>

<p align="center">
	<h1>Portfolio</h1>
	<p>Personal website with the pourpose of sharing my work to the world.</p>
</p>

---

<p align="center">
 <a href="#technology">Technology</a> •
 <a href="#installation">Installation</a>
</p>

## Technology

<p align="left">
  <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="Next.JS" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img alt="Notion API" src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>
</p>

## Installation

1. First, clone this repository

```bash
git clone https://github.com/KeysHD/portfolio.git
```

2. Install all the dependencies

```bash
yarn install
```

3. Create a `.env.local` file and put two important variables:

- `NOTION_TOKEN`: Notion integration token
- `NOTION_DB_TOKEN`: Notion Database ID with a page list having there properties:
  - Tags: Multi-select option for technologies names
  - en_Description: Project description in english
  - pt_Description: Project description in portuguese
  - Status: Select option for display or not
  - Github: Github repo link
  - Link: Demo link
  - Client: Checkbox if the project its a client project
  - Feature: Checkbox if appear as a fetured project

4. Run the project

```bash
yarn dev
```

5. Navigate to `https://localhost:3000`
