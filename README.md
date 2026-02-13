# [No Gravity Berlin Website](https://no-gravity-berlin.github.io/no-gravity-berlin/)

[![Deploy to GitHub Pages](https://github.com/No-Gravity-Berlin/no-gravity-berlin/actions/workflows/deploy.yml/badge.svg)](https://github.com/No-Gravity-Berlin/no-gravity-berlin/actions/workflows/deploy.yml)

## 📋 Project Overview

No Gravity Berlin is a single-page application (SPA) that provides a modern and interactive presence for No Gravity Berlin.

- **Navbar**
- **Hero Section**
- **Events Section**
- **Showcase Section**
- **About Section**
- **Team Section**
- **Verein Section**
- **Footer**

## ⚙️ Tech Stack

- **React 18** + **TypeScript** + **Vite** - Modern frontend framework
- **Tailwind CSS** + **shadcn/ui** - Styling and UI components
- **React Router** - Client-side routing
- **TanStack Query** - Server state management
- **Vitest** - Testing
- **ESLint** - Code quality

## 🛠️ Installation

### Requirements
- **Node.js** (v18 or higher)
- **npm** as package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server runs by default on `http://localhost:5173`

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Create production build
npm run build

# Create development build
npm run build:dev

# Preview production build locally
npm run preview

# Linting
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```
## 📁 Project Structure

```
no-gravity-berlin/
├── public/
│   ├── fonts/
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── AboutSection.tsx
│   │   ├── EventCard.tsx
│   │   ├── EventsSection.tsx
│   │   ├── FooterSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── TeamSection.tsx
│   │   └── VereinSection.tsx
│   ├── data/
│   │   └── events/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── test/
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
├── eslint.config.js
├── components.json
└── package.json
```

## 🚀 Deployment

The project is automatically deployed via GitHub Actions and GitHub Pages:
- **Trigger / Source**: `main` branch
- **Configuration:** `.github/workflows/deploy.yml`
- **Build process**: `npm run build`

**URL**: [https://no-gravity-berlin.github.io/no-gravity-berlin/](https://no-gravity-berlin.github.io/no-gravity-berlin/)
 

## 🔧 Configuration

- **vite.config.ts**: Bundler and dev server settings
- **vitest.config.ts**: Test framework configuration
- **tsconfig.json**: TypeScript base configuration
- **tsconfig.app.json**: TypeScript config for app source
- **tsconfig.node.json**: TypeScript config for build tools
- **tailwind.config.ts**: Tailwind CSS theme and plugins
- **postcss.config.js**: CSS processing (for Tailwind)
- **eslint.config.js**: Code quality rules
- **components.json**: shadcn/ui components

### GitHub Codespaces

## 📝 License

No license. All rights reserved.

## 📧 Contact

For questions or suggestions, contact the No Gravity Berlin team:
no.gravity.bln@gmail.com

