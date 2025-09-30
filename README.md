# Krea Clone (Next.js + TypeScript + Tailwind)

This project is a pixel-perfect frontend clone scaffold inspired by Krea.ai, built using **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
It includes a dark/light mode toggle, hero carousel, generate grid, and footer.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
App will be available at [http://localhost:3000](http://localhost:3000).

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
krea-clone/
├── components/       # UI components (Header, HeroCarousel, GenerateGrid, Footer)
├── pages/            # Next.js pages (_app.tsx, index.tsx)
├── public/           # Static assets (hero1.jpg, hero2.jpg)
├── styles/           # Tailwind styles (globals.css)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## 🌗 Dark/Light Mode

- Implemented with [`next-themes`](https://github.com/pacocoursey/next-themes)
- Toggle button in the header (☀️ / 🌙)

---

## 🌍 Deployment (Vercel)

1. Push repo to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/krea-clone.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Import your repo
4. Deploy (Vercel will auto-detect Next.js)

Live demo will be available at:  
```
https://<your-project-name>.vercel.app
```

---

## 📝 Notes

- Replace `hero1.jpg` and `hero2.jpg` in `/public` with your own high-quality images.
- Adjust Tailwind theme tokens for exact pixel-perfect match with original design.
- Extend components for more interactivity as needed.

---

© 2025 - Built with ❤️ using Next.js & Tailwind
