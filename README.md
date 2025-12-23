# Anoushka - Full Stack Developer Portfolio

A modern, SEO-optimized portfolio website built with React, TypeScript, and Tailwind CSS.

## Portfolio Upgrade

This portfolio was migrated from a static HTML/CSS/JavaScript version
to a modern React + TypeScript + Tailwind CSS stack.

### Why the upgrade?

- Better scalability
- Cleaner architecture
- Improved performance
- Industry-standard tooling
- Enhanced SEO capabilities
- Progressive Web App (PWA) support

## Features

### 🎨 Modern Tech Stack

- **React 19** with TypeScript for type-safe development
- **Tailwind CSS 4** for utility-first styling
- **Vite** for lightning-fast build tooling
- **React Router** for seamless navigation

### 🚀 SEO Optimized

- Comprehensive meta tags (Open Graph, Twitter Cards)
- XML sitemap for search engine crawling
- Robots.txt for crawler instructions
- JSON-LD structured data (Person, WebSite, ProfilePage schemas)
- Web App Manifest for PWA functionality
- Canonical URLs and proper image optimization

### 🌗 User Experience

- Dark/Light mode toggle with localStorage persistence
- Responsive design for all devices
- Smooth animations and transitions
- Loading states and error handling
- 404 page for better navigation

## Project Structure

```
portfolio/
├── public/
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # Search engine instructions
│   ├── sitemap.xml          # XML sitemap
│   └── _redirects           # Deployment redirects
├── src/
│   ├── components/
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Home.tsx         # Hero section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Skills.tsx       # Skills section
│   │   └── StructuredData.tsx # SEO structured data
│   ├── pages/
│   │   ├── ComingSoon.tsx   # Coming soon page
│   │   └── PageNotFound.tsx # 404 error page
│   ├── App.tsx              # Main app component
│   └── main.tsx             # App entry point
└── index.html               # HTML template with SEO meta tags
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Build for production:

```bash
pnpm build
```

5. Preview production build:

```bash
pnpm preview
```

## SEO Configuration

Before deploying, update the following:

### 1. Update URLs

Replace `https://anoushkar.site` with your actual domain in:

- `index.html` (meta tags, canonical URL)
- `public/sitemap.xml` (all loc URLs)
- `public/robots.txt` (sitemap URL)
- `src/components/StructuredData.tsx` (schema URLs)

### 2. Create Social Images

- Create `og-image.png` (1200x630px) for social media previews
- Ensure `favicon.png` (512x512px) exists in `/public`

### 3. Update Personal Information

- `index.html`: Meta tags and title
- `src/components/StructuredData.tsx`: Social links, education, skills

### 4. Post-Deployment

- Submit sitemap to Google Search Console
- Verify structured data with [Rich Results Test](https://search.google.com/test/rich-results)
- Test social sharing with [Facebook Debugger](https://developers.facebook.com/tools/debug)
- Validate Twitter Cards at [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Technologies Used

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite 7
- **Icons:** Lucide React
- **Routing:** React Router 7
- **Linting:** ESLint with TypeScript support

## SEO Features

For detailed information about SEO implementation, see [SEO_DOCUMENTATION.md](SEO_DOCUMENTATION.md).

## License

This project is open source and available under the MIT License.

## Author

**Anoushka R**

- Portfolio: [https://anoushkar.ste](https://anoushkar.site)
- GitHub: [https://github.com/anoushkaar](https://github.com/anoushkaar)
- LinkedIn: [Anoushka](https://www.linkedin.com/in/anoushkaar)
