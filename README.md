# Melissa & Jesús Wedding Website

A beautiful wedding website built for Melissa & Jesús's wedding celebration on December 13, 2025.

## ⚠️ AI-Generated Disclaimer

**This entire project has been generated with [Claude Code](https://claude.ai/code).** The website was created through AI assistance, including design, functionality, and content structure.

## About the Project

This is a modern, responsive wedding website featuring:

- **Hero Section** with wedding announcement and save-the-date
- **Photo Gallery** showcasing the couple's journey
- **Event Details** with timeline, venue information, and logistics
- **Venue Information** with interactive maps and directions
- **Transportation** details for guests
- **RSVP System** with phone number collection
- **Gift Registry** (crowdfunding section)

## Tech Stack

- **SvelteKit** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Enhanced Images** - Optimized image handling

## Features

- Fully responsive design
- Interactive photo galleries with rubber band animation effects
- Google Maps & Apple Maps integration
- IBAN copy-to-clipboard functionality
- Country code selector for international phone numbers
- Smooth scrolling navigation
- Modern gradient and color scheme

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
npm run dev -- --open
```

### Building

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── assets/          # Images and media files
│   └── components/      # Reusable Svelte components
├── routes/
│   └── +page.svelte     # Main wedding page
└── app.html             # HTML template
```
