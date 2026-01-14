# Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- ✨ Modern glassmorphism UI design
- 🚀 Static site generation for GitHub Pages
- 📱 Fully responsive
- 🎨 Tailwind CSS v4 with custom theming
- 🔗 Dynamic GitHub pinned repositories integration
- ⚡ Optimized for performance

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/gamy004/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file for GitHub API access:
```bash
GITHUB_TOKEN=your_github_personal_access_token
```

Generate a token at [github.com/settings/tokens](https://github.com/settings/tokens) with `read:user` scope.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

### Build Static Site

```bash
npm run export
```

This will generate a static site in the `out` directory.

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to the `main` branch to trigger deployment

The site will be available at: `https://gamy004.github.io/portfolio/`

## Project Structure

```
portfolio/
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   ├── ui/              # Reusable UI components
│   └── layout/          # Layout components (Header, Footer)
├── lib/                 # Utility functions and data
│   ├── github.ts        # GitHub API integration
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## Technologies

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## License

All rights reserved © 2026 Wasuphat Pudjaika
