# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Brazilian marketing agency website (cnvt.com.br) built with Astro. It serves as a simple landing page with links to various services offered by CNVT® - a 360° marketing agency.

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Architecture
- **Framework**: Astro 5.11.2 with static site generation
- **Styling**: Tailwind CSS v4 with custom PP Object Sans font
- **Structure**: Simple multi-page site with shared layout patterns
- **Pages**: 
  - `/` (index.astro) - Main landing page with service links
  - `/ferramentas` (ferramentas.astro) - Tools page (similar layout)

## Key Technical Details
- Uses Bun as package manager (bun.lock present)
- TypeScript configured with Astro's strict config
- Custom font loading with font-face declarations in app.css
- Responsive design with mobile-first approach
- Portuguese language content (lang="pt-br")

## Code Patterns
- All pages import `../app.css` for global styles
- Shared layout structure with left/right grid columns
- Service links array mapped to interactive elements with hover effects
- Consistent branding with inline SVG logo
- Dark theme (zinc-950 background, zinc-100 text)

## Styling
- Custom CSS in `src/app.css` with Tailwind directives
- Hover animations for service links using transform utilities
- PP Object Sans font with multiple weights (Light, Regular, Medium, Bold)
- Dark theme with zinc color palette throughout