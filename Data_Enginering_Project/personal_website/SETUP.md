# Setup & Customization Guide

Welcome! This guide will walk you through personalizing your portfolio website.

## 🎯 Step 1: Update Personal Information

### 1.1 Edit `lib/config.ts`
This is the main file where you'll add your personal information. All content is centralized here.

```typescript
export const personalInfo = {
  name: "YOUR NAME HERE",
  title: "Your Job Title",
  description: "Your tagline",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  // ...
};
```

### 1.2 Update Social Links
```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourname",
  twitter: "https://twitter.com/yourhandle",
  email: "mailto:your.email@example.com",
};
```

## 📝 Step 2: Update Your Content

### Add Your Skills
Edit `lib/config.ts` → `skillsData`:
```typescript
export const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", ...],
  },
  // Add more categories
];
```

### Add Your Experience
Edit `lib/config.ts` → `experience`:
```typescript
export const experience = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "What you did...",
  },
  // Add more jobs
];
```

### Add Your Education
Edit `lib/config.ts` → `education`:
```typescript
export const education = [
  {
    degree: "Your Degree",
    school: "School Name",
    year: "2019",
    details: "Additional details...",
  },
];
```

### Add Your Projects
Edit `components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "What it does",
    technologies: ["React", "Node.js"],
    link: "https://project-url.com",
    github: "https://github.com/...",
    featured: true,
  },
  // Add more projects
];
```

## 🎨 Step 3: Customize the Design

### Change Colors
Edit `tailwind.config.ts`:

**Dark Red/Burgundy Theme** (Current):
```typescript
colors: {
  spirit: {
    50: "#FBF8F6",
    600: "#8B3A3A",
    700: "#7A2E2E",
    800: "#5D2020",
    900: "#3D1515",
  },
}
```

**Try Other Themes:**

**Deep Blue & Gold**:
```typescript
colors: {
  spirit: {
    50: "#F0F4F8",
    600: "#1E3A5F",
    700: "#1A2E4A",
    800: "#152339",
    900: "#0F1822",
  },
  accent: {
    gold: "#FFD700",
  },
}
```

**Teal & Coral**:
```typescript
colors: {
  spirit: {
    50: "#F0F9F7",
    600: "#0D6E63",
    700: "#0B5B50",
    800: "#084A40",
    900: "#063730",
  },
  accent: {
    gold: "#FF7A5C",
  },
}
```

### Change Fonts
Edit `app/globals.css`:
```css
body {
  font-family: 'Your Font Here', sans-serif;
}

h1, h2, h3 {
  font-family: 'Your Heading Font', serif;
}
```

## 🖼️ Step 4: Add Images

### Project Images
1. Create `public/images/projects/` folder
2. Add images: `project1.jpg`, `project2.jpg`, etc.
3. Update `components/Projects.tsx`:

```typescript
import Image from "next/image";

<Image
  src="/images/projects/project1.jpg"
  alt="Project description"
  width={600}
  height={400}
/>
```

### Profile Picture
1. Save your photo as `public/images/profile.jpg`
2. Add to Hero section in `components/Hero.tsx`

## 📝 Step 5: Create Blog Posts

### Create a Blog Post
1. Create folder: `app/blog/[slug]/page.tsx`

Example: `app/blog/my-first-post/page.tsx`

```typescript
export const metadata = {
  title: "My First Blog Post",
  description: "Post description",
};

export default function BlogPost() {
  return (
    <article className="section container-max px-4 md:px-8">
      <h1>My First Blog Post</h1>
      <p>Posted on: Mar 15, 2024</p>
      {/* Your blog content here */}
    </article>
  );
}
```

### Update Blog Index
Edit `components/Blog.tsx` and add your posts to the `posts` array.

## 📱 Step 6: Update Metadata

### Page Title and Description
Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Description of your portfolio",
  keywords: ["React", "Next.js", "Full Stack Developer"],
  openGraph: {
    title: "Your Name | Portfolio",
    description: "Your description",
    url: "https://your-domain.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

## 🚀 Step 7: Deploy to GitHub Pages

### Before Deploying:
1. ✅ Update `lib/config.ts` with your info
2. ✅ Add your projects and skills
3. ✅ Update experience and education
4. ✅ Test locally: `npm run dev`

### Deploy Steps:
1. **Initialize git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repo**:
   - Go to https://github.com/new
   - Name it: `personal_website`
   - Leave as public
   - Don't initialize with README

3. **Connect and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/personal_website.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Actions**:
   - Go to your repo → Settings → Pages
   - Source: GitHub Actions
   - Deploy action will run automatically

5. **Your site will be live at**:
   ```
   https://YOUR_USERNAME.github.io/personal_website
   ```

## ✨ Pro Tips

1. **SEO Optimization**:
   - Use descriptive meta tags
   - Add alt text to images
   - Use semantic HTML (h1, h2, etc.)

2. **Performance**:
   - Optimize images (use tools like TinyPNG)
   - Run `npm run build` and check output size
   - Monitor Core Web Vitals

3. **Content**:
   - Update projects regularly
   - Write monthly blog posts
   - Keep resume current
   - Add certificates as you get them

4. **Custom Domain** (Optional):
   - Add to GitHub Pages settings
   - Point DNS to GitHub's servers
   - Create CNAME file with domain name

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf .next out node_modules
npm install
npm run build
```

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Changes not showing on GitHub Pages?**
- Wait 2-3 minutes for deployment
- Check "Actions" tab for build status
- Hard refresh browser (Ctrl+Shift+R)

**Images not loading?**
- Check path starts with `/images/`
- Verify file exists in `public/` folder
- Use lowercase filenames

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Pages Guide](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Need help?** Check the main README.md file or review the component code—everything is well-commented!

Good luck with your portfolio! 🚀
