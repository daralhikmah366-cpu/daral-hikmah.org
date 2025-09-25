# Dar Al-Hikmah Foundation Website

A simple, informational website for Dar Al-Hikmah Foundation located in Fort Worth, Texas.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

## 📦 Building for Production

To create a production build:
```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🌐 Deploying to GitHub Pages

1. First, update the `homepage` field in `package.json`:
   - Replace `yourusername` with your GitHub username
   - Example: `"homepage": "https://myusername.github.io/daral-hikmah"`

2. Build and deploy:
```bash
npm run deploy
```

3. In your GitHub repository settings:
   - Go to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select `gh-pages` branch
   - Your site will be live in a few minutes!

## 📁 Project Structure

```
src/
├── Pages/          # Main page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Donate.jsx
├── Components/     # Reusable components
│   ├── home/       # Homepage components
│   └── ui/         # UI components
├── Layout.jsx      # Main layout wrapper
├── App.jsx         # Main app router
├── index.js        # Entry point
└── index.css       # Global styles
```

## 📧 Contact Information

**Dar Al-Hikmah Foundation**
- 📍 2929 Spotted Fawn Dr, Fort Worth, TX 76108
- 📧 Admin@daral-hikmah.org
- 📞 +1 (347) 335-7447
- 🌐 [Facebook](https://www.facebook.com/daralhikmafondation)

## 🛠 Technologies Used

- React 18
- React Router v6 (HashRouter for GitHub Pages compatibility)
- Tailwind CSS for styling
- Lucide React for icons

## 📝 Notes

- The website uses HashRouter for GitHub Pages compatibility
- All routes will have a `#` in the URL (e.g., `yoursite.github.io/daral-hikmah/#/about`)
- The embedded map shows the foundation's location in Fort Worth, TX