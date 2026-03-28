# Quick Start (5 Minutes)

Get your portfolio up and running in minutes!

## 1️⃣ Install & Run

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

Visit: http://localhost:3000

## 2️⃣ Make Your First Customization

Edit `lib/config.ts`:

```typescript
export const personalInfo = {
  name: "YOUR NAME",          // ← Change this
  title: "Your Job Title",    // ← And this
  email: "your@email.com",    // ← And this
  // ... rest of config
};
```

Save and refresh browser—you'll see changes immediately!

## 3️⃣ Add Your Projects

Edit `components/Projects.tsx`, find the `projects` array:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What it does...",
    technologies: ["React", "Node.js"],
    link: "https://yourproject.com",
    github: "https://github.com/yourname/project",
    featured: true,  // Shows in top section
  },
  // Add more...
];
```

## 4️⃣ Add Your Skills

Edit `lib/config.ts`, update `skillsData`:

```typescript
export const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL"],
  },
  // Add more categories
];
```

## 5️⃣ Update Experience

Edit `lib/config.ts`, update `experience`:

```typescript
export const experience = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "What you did...",
  },
];
```

## 6️⃣ Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Initialize git (if needed)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/personal_website.git
git branch -M main
git push -u origin main
```

Your site will be live at:
```
https://YOUR_USERNAME.github.io/personal_website
```

---

## 📁 Key Files to Edit

| File | What to Change |
|------|---|
| `lib/config.ts` | Name, email, skills, experience, education |
| `components/Projects.tsx` | Your projects |
| `components/Hero.tsx` | Main headline and tagline |
| `components/About.tsx` | Your story |
| `components/Blog.tsx` | Blog posts |

## 🎨 Quick Color Changes

Edit `tailwind.config.ts` to change the theme:

```typescript
colors: {
  spirit: {
    900: "#3d1515",  // Dark color - change this
    600: "#8B3A3A",  // Medium color
  },
  accent: {
    gold: "#D4AF37", // Gold highlight
  },
}
```

## 📸 Adding Images

1. Save images to `public/images/projects/`
2. In components, use:
   ```typescript
   import Image from "next/image";
   <Image src="/images/projects/my-image.jpg" alt="Description" />
   ```

## ✅ Testing Before Deploy

```bash
# Build locally
npm run build

# Test production build
npm start
```

Then deploy!

---

## 🚀 Next Steps

1. Customize `lib/config.ts` with your info
2. Add your projects to `components/Projects.tsx`
3. Run `npm run dev` to preview
4. Push to GitHub
5. Check deployment status in GitHub "Actions" tab

## 📚 Full Guides

- **Detailed setup**: See `SETUP.md`
- **Full docs**: See `README.md`
- **Project structure**: See `README.md#📚-project-structure`

---

**Done in 5 minutes!** You now have a professional portfolio ready to showcase to recruiters. 🎉
