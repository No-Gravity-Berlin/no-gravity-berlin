# No Gravity Berlin

## 📋 Projektübersicht

No Gravity Berlin ist eine Single-Page-Application (SPA), die eine moderne und interaktive Präsenz für die No Gravity Berlin bietet. 

- **Navbar**
- **Hero Section**
- **Events Section**
- **About Section**
- **Team Section**
- **Verein Section**
- **Footer**

## ⚙️ Tech Stack

- **React 18** + **TypeScript** + **Vite** - Modernes Frontend-Framework
- **Tailwind CSS** + **shadcn/ui** - Styling und UI-Komponenten
- **React Router** - Client-seitiges Routing
- **TanStack Query** - Server State Management
- **Vitest** - Testing
- **ESLint** - Code Quality

## 🛠️ Installation

### Voraussetzungen
- **Node.js** (v18 oder höher)
- **npm** als Package Manager

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Der Development Server läuft standardmäßig auf `http://localhost:5173`

## 📜 Available Scripts

```bash
# Development Server mit Hot Reload
npm run dev

# Production Build erstellen
npm run build

# Development Build erstellen
npm run build:dev

# Production Build lokal testen
npm run preview

# Linting
npm run lint

# Tests ausführen
npm run test

# Tests im Watch-Modus
npm run test:watch
```
##  Projektstruktur

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

Das Projekt wird automatisch über GitHub Actions und GitHub Pages deployed:
- **Trigger / Source**: Branch `main`
- **Configuration:** `.github/workflows/deploy.yml`
- **Build-Prozess**: `npm run build`

**URL**: [https://no-gravity-berlin.github.io/no-gravity-berlin/](https://no-gravity-berlin.github.io/no-gravity-berlin/)
 

## 🔧 Konfiguration

- **vite.config.ts**: Bundler- und Dev-Server-Einstellungen
- **vitest.config.ts**: Test-Framework-Konfiguration
- **tsconfig.json**: TypeScript Basis-Konfiguration
- **tsconfig.app.json**: TypeScript für App-Quellcode
- **tsconfig.node.json**: TypeScript für Build-Tools
- **tailwind.config.ts**: Tailwind CSS Theme und Plugins
- **postcss.config.js**: CSS-Verarbeitung (für Tailwind)
- **eslint.config.js**: Code-Qualitäts-Regeln
- **components.json**: shadcn/ui Komponenten

### GitHub Codespaces

## 📝 Lizenz

Dieses Projekt ist privat und nicht für öffentliche Nutzung bestimmt.

## 📧 Kontakt

Für Fragen oder Anregungen kontaktiere das No Gravity Berlin Team.
