# Portfolio Website - Folder Structure

## Project Architecture

```
portfolio-website/
├── src/                          # Source code
│   ├── components/               # Reusable UI components
│   │   ├── Header/              # Navigation header
│   │   ├── Footer/              # Footer component
│   │   ├── Card/                # Reusable card component
│   │   ├── Button/              # Reusable button component
│   │   └── SocialLinks/         # Social media links
│   │
│   ├── pages/                    # Full page components
│   │   └── Home/                # Main landing page
│   │
│   ├── sections/                 # Major portfolio sections
│   │   ├── Hero/                # Hero/Banner section
│   │   ├── About/               # About me section
│   │   ├── Skills/              # Skills section
│   │   ├── Experience/          # Work experience section
│   │   ├── Projects/            # Projects showcase
│   │   ├── Achievements/        # Awards & achievements
│   │   ├── Education/           # Education section
│   │   └── Contact/             # Contact section
│   │
│   ├── assets/                   # Static assets
│   │   ├── images/              # Image files
│   │   └── icons/               # Icon files
│   │
│   ├── styles/                   # Global styling
│   │   ├── globals.css          # Global styles
│   │   ├── variables.css        # CSS variables & themes
│   │   └── animations.css       # Animation definitions
│   │
│   ├── data/                     # Constants & static data
│   │   ├── portfolio.ts         # Portfolio data (skills, projects, etc.)
│   │   ├── constants.ts         # Constants
│   │   └── routes.ts            # Route definitions
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useScrollPosition.ts # Track scroll position
│   │   ├── useTheme.ts          # Theme management
│   │   └── useInView.ts         # Intersection observer hook
│   │
│   ├── utils/                    # Utility functions
│   │   ├── helpers.ts           # Helper functions
│   │   └── animations.ts        # Animation utilities
│   │
│   ├── types/                    # TypeScript types
│   │   └── index.ts             # Type definitions
│   │
│   ├── App.tsx                   # Main App component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles entry
│
├── public/                       # Static files (favicon, etc.)
│
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript config
├── vite.config.ts               # Vite configuration
├── index.html                    # HTML entry point
└── README.md                     # Project documentation
```

## Folder Purpose Guide

- **components/**: Reusable UI components (buttons, cards, etc.)
- **pages/**: Full page layouts
- **sections/**: Major page sections (Hero, About, Skills, etc.)
- **assets/**: Images, icons, and other static files
- **styles/**: Global CSS and styling utilities
- **data/**: Static data, constants, and portfolio information
- **hooks/**: Custom React hooks for shared logic
- **utils/**: Helper functions and utilities
- **types/**: TypeScript type definitions

## Modularity Benefits

✓ Easy to find and update specific sections
✓ Reusable components reduce code duplication
✓ Clear separation of concerns
✓ Scalable structure for future additions
✓ Better performance with code splitting
