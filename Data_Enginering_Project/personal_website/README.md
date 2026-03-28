# Personal Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase your skills, projects, and experience to recruiters and potential collaborators.

## 🎨 Features

- **Hero Section**: Compelling introduction with your value proposition
- **About Section**: Your story and professional philosophy
- **Skills Section**: Organized technical skills with proficiency levels
- **Projects Section**: Showcase your best work with detailed descriptions
- **Resume Section**: Professional experience, education, and achievements
- **Blog Section**: Share insights and articles (bonus feature)
- **Contact Section**: Multiple ways to get in touch
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Dark Mode Optional**: Light theme by default, easy to customize
- **SEO Optimized**: Built-in meta tags and Open Graph support
- **GitHub Pages Ready**: One-command deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization Guide

### Update Personal Information

Edit `components/Navigation.tsx`, `components/Footer.tsx`, and `app/layout.tsx` to update:
- Your name/brand
- Social media links
- Email address
- Contact information

### Customize Colors

The theme uses a "perseverance" color scheme:
- **Primary**: Deep burgundy (#5D2020)
- **Accent**: Gold (#D4AF37)
- **Secondary**: Steel blue (#1F3A5C)

Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  spirit: {
    900: "#3d1515", // Change this
    // ... other colors
  },
  accent: {
    gold: "#D4AF37", // Or this
  },
}
```

### Update Hero Content

Edit `components/Hero.tsx`:
- Change headline and tagline
- Update statistics
- Customize CTA buttons

### Add Your Projects

Edit `components/Projects.tsx`:
- Update the `projects` array with your actual projects
- Add project descriptions, technologies, and links
- Add placeholder images (see "Adding Images" section)

### Update Resume

Edit `components/Resume.tsx`:
- Add your actual work experience
- Update education details
- Add certifications and awards

### Customize Skills

Edit `components/Skills.tsx`:
- Update skill categories
- Change technologies listed
- Modify proficiency levels

### Add Blog Posts

1. Create blog files in `app/blog/[slug]/page.tsx`
2. Update the posts array in `components/Blog.tsx`
3. Write posts using MDX or HTML

## 🖼️ Adding Images

1. **Project Images**: Place images in `public/images/projects/`
2. **Profile Picture**: Add to `public/images/profile.jpg`
3. **Update Components**: Use Next.js Image component:
   ```typescript
   import Image from "next/image";

   <Image
     src="/images/projects/project-name.jpg"
     alt="Project description"
     width={600}
     height={400}
   />
   ```

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

Test responsiveness:
```bash
npm run dev
# Then resize browser or use Chrome DevTools
```

## 🚀 Deployment to GitHub Pages

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
- Go to [GitHub](https://github.com/new)
- Create a new repository named `personal_website`
- Do NOT initialize with README

### 3. Connect Local Repo to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/personal_website.git
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Pages
- Go to your repository settings
- Navigate to "Pages" section
- Set source to "GitHub Actions"

### 5. Create Deployment Workflow

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 6. Push to Deploy
```bash
git push origin main
```

Your site will be live at: `https://YOUR_USERNAME.github.io/personal_website`

## 📚 Project Structure

```
personal_website/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Top navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Resume.tsx          # Resume section
│   ├── Blog.tsx            # Blog section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── public/
│   └── images/             # Image assets
├── lib/                     # Utilities and helpers
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🔧 Advanced Customization

### Adding Dark Mode
Uncomment dark mode in `tailwind.config.ts` and update `globals.css`:
```css
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #e0e0e0;
  }
}
```

### Adding Analytics
Install and setup Google Analytics:
```bash
npm install @next/third-parties
```

Update `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Custom Domain
1. Add your domain to GitHub Pages settings
2. Create a `CNAME` file in `public/` with your domain
3. Update DNS settings with your registrar

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**GitHub Pages not updating?**
- Check "Actions" tab in GitHub for build status
- Ensure workflow file is in `.github/workflows/`
- Clear browser cache and hard refresh

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GitHub Pages Guide](https://pages.github.com/)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Success

1. **Keep it Updated**: Regularly update your projects and blog
2. **Add Real Images**: Replace placeholder images with actual screenshots
3. **Tell Your Story**: Make the About section personal and authentic
4. **Showcase Your Best Work**: Pick projects that showcase your skills
5. **Write Technical Content**: Blog posts help with SEO and showcase expertise
6. **Keep it Fast**: Monitor Core Web Vitals in Next.js Dashboard
7. **Mobile First**: Always test on mobile devices

---

Built with persistence and hard work. Your story deserves to be told. 🚀
