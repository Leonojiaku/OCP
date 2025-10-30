# Student Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio leaders like Linear (typography/hierarchy), Stripe (professional restraint), and Vercel (gradient aesthetics). This portfolio will balance creative visual impact with professional credibility.

## Color Palette
**Blue Gradient System** (as requested):
- Primary Gradient: Deep blue (#0F172A) → Vibrant cyan (#06B6D4) → Electric blue (#3B82F6)
- Apply gradients to: Hero background, section accents, hover states, skill progress indicators
- Supporting Colors: White (#FFFFFF) for text on gradients, Slate-50 (#F8FAFC) for alternate section backgrounds
- Accent: Cyan-400 (#22D3EE) for CTAs and interactive elements
- Text on White: Slate-900 (#0F172A) for primary, Slate-600 (#475569) for secondary

## Typography
**Font Stack**: 
- Headings: 'Inter' (700, 600) - Clean, modern, professional
- Body: 'Inter' (400, 500) - Maximum readability
- Code/Technical: 'Fira Code' (for displaying tech stack)

**Hierarchy**:
- Hero Name: text-6xl/text-7xl (bold-700)
- Section Headings: text-4xl/text-5xl (semibold-600)
- Subsection Titles: text-2xl/text-3xl (semibold-600)
- Project Titles: text-xl (semibold-600)
- Body Text: text-base/text-lg (regular-400)

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-8 (large), gap-6 (medium), gap-4 (small)
- Container: max-w-7xl with px-6 horizontal padding

## Hero Section
**Layout**: Full viewport height (min-h-screen), centered content with animated gradient background
**Content**: 
- Large professional headshot (circular, 200px diameter with gradient border)
- Name and title/tagline prominently displayed
- Brief value proposition (1-2 lines)
- Primary CTA buttons with blur backdrop ("View Projects", "Download Resume")
- Scroll indicator at bottom

**Image**: Professional headshot or creative illustration representing the student's field

## Projects Gallery
**Layout**: Grid-based showcase (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
**Project Cards**:
- Featured project image/screenshot (16:9 aspect ratio, gradient overlay on hover)
- Project title and brief description
- Tech stack tags (small pills with gradient backgrounds)
- Action buttons: "Live Demo" | "GitHub" | "Case Study"
- Hover effect: Lift with shadow, gradient border reveal
- Minimum 6 project slots

## About Me Section
**Layout**: Two-column (lg:grid-cols-2)
- Left: Extended bio, journey narrative, achievements
- Right: Skills visualization with proficiency indicators
**Visual Elements**:
- Section background: Subtle gradient fade
- Skills displayed as progress bars with gradient fills
- Category groupings: Languages, Frameworks, Tools, Design

## Education & Experience
**Layout**: Vertical timeline with alternating left/right content
**Timeline Elements**:
- Gradient connector line running vertically
- Gradient dot markers for each entry
- Cards containing: Institution/Company, Degree/Role, Dates, Description, Key achievements
- Responsive: Stacks to single column on mobile

## Skills Section
**Layout**: Three-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
**Categories**:
- Frontend Technologies
- Backend & Databases
- Tools & Platforms
**Visualization**: Icon + name + proficiency level (gradient-filled progress rings or bars)

## Contact Section
**Layout**: Centered content with gradient background accent
**Elements**:
- Working contact form (Name, Email, Message fields)
- Social media links (GitHub, LinkedIn, Twitter) with gradient hover effects
- Email and location information
- Form with gradient border on focus states
- Success/error state messaging

## Component Library

**Navigation**:
- Sticky header with blur backdrop effect
- Logo/name on left, nav links on right
- Mobile: Hamburger menu with slide-in drawer
- Active section highlighting with gradient underline

**Buttons**:
- Primary: Gradient background with white text
- Secondary: Transparent with gradient border
- All buttons: Backdrop blur when over images, smooth hover scale (1.05)

**Cards**:
- White/Slate-50 backgrounds with subtle shadows
- Gradient accent borders (visible on hover)
- Rounded corners (rounded-lg to rounded-xl)
- Smooth transitions on all interactive states

**Form Inputs**:
- Clean borders that transition to gradient on focus
- Proper label positioning and spacing
- Validation states with color-coded feedback

## Images Required

1. **Hero Image**: Professional headshot or creative portrait (circular format, 400x400px minimum)
2. **Project Screenshots**: 6-9 high-quality project images (1200x675px, 16:9 ratio)
3. **About Section**: Optional secondary photo showing student in action/workspace

## Animations (Minimal & Purposeful)
- Hero gradient: Subtle animated movement
- Scroll-triggered fade-ins for sections (once)
- Hover transitions: 0.3s ease for cards and buttons
- No distracting continuous animations

## Responsive Breakpoints
- Mobile: Base styles, single column layouts
- Tablet (md:768px): Two-column grids where appropriate
- Desktop (lg:1024px): Full multi-column layouts, maximum spacing
- Wide (xl:1280px): Constrained max-width with centered content