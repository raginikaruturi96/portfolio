# Ragini Karuturi - Portfolio Website

A modern, responsive, and visually stunning portfolio website built with React, TypeScript, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, minimalist design with vibrant gradient accents
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast load times and optimized animations
- **SEO Friendly**: Semantic HTML and meta tags for better search visibility
- **Accessible**: WCAG compliant with proper ARIA labels

## 📋 Sections

- **Hero**: Captivating introduction with call-to-action buttons
- **About**: Personal background, education, and achievements
- **Skills**: Technical skills organized by category and soft skills
- **Experience**: Professional experience with detailed descriptions
- **Projects**: Featured projects and other work
- **Contact**: Contact form and multiple ways to reach out
- **Footer**: Social links and quick navigation

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: CSS3 with custom properties
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: React Icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open automatically at `http://localhost:3000`

## 🛠️ Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md               # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/styles/index.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #06b6d4;
  /* ... more colors */
}
```

### Content
Update the content in individual section files:
- `src/sections/About.tsx` - About section
- `src/sections/Skills.tsx` - Skills and technologies
- `src/sections/Experience.tsx` - Work experience
- `src/sections/Projects.tsx` - Projects showcase
- `src/sections/Contact.tsx` - Contact information

### Images & Assets
Place images in the `public/` directory and reference them in components.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👤 Author

**Ragini Karuturi**
- 🌐 Website: [your-domain.com](https://your-domain.com)
- 💼 LinkedIn: [linkedin.com/in/ragini-karuturi-514b80256](https://linkedin.com/in/ragini-karuturi-514b80256)
- 🐙 GitHub: [github.com/raginikaruturi](https://github.com/raginikaruturi)
- 📧 Email: raginikaruturi@gmail.com

## 📧 Support

For any questions or support, please contact me at raginikaruturi@gmail.com

---

Built with ❤️ using React, TypeScript, and Framer Motion
