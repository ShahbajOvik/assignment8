# HERO.IO - App Library

A modern React application for browsing and managing productivity apps. Users can explore a curated collection of apps, view detailed information, install/uninstall apps, and manage their personal app library.

## Features

- **App Discovery**: Browse through a collection of productivity apps with detailed information
- **App Details**: View comprehensive app information including ratings, reviews, and statistics
- **Installation Management**: Install and uninstall apps with local storage persistence
- **Search & Filter**: Search apps by name and sort by download count
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Loading States**: Smooth loading animations during page navigation and search operations

## Technologies Used

### Frontend Framework
- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Declarative routing for React applications

### Build Tool & Development
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

### UI & Styling
- **CSS3** - Custom styling with modern CSS features
- **React Toastify** - Toast notifications for user feedback

### Data Visualization
- **Recharts** - Composable charting library built on React components

### Development Tools
- **TypeScript** - Type checking (installed for better development experience)
- **Local Storage API** - Client-side data persistence

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd app-library
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Loading.jsx     # Loading spinner component
│   ├── AppCard.jsx     # App display card
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── AppsPage.jsx    # Apps listing page
│   ├── AppDetails.jsx  # Individual app details
│   ├── MyInstallation.jsx # User's installed apps
│   └── NotFound.jsx    # 404 error page
├── data/               # Static data
│   └── apps.json       # Apps data
├── utils/              # Utility functions
│   └── storage.js      # Local storage helpers
├── assets/             # Static assets
└── styles.css          # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
