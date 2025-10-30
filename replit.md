# Student Portfolio Application

## Overview

This is a modern, full-stack student portfolio web application built to showcase a student developer's projects, skills, education, and professional experience. The application features a single-page design with smooth scrolling navigation, animated gradient backgrounds, and a contact form for visitor engagement. It follows modern web development best practices with a React frontend and Express backend, styled using a custom design system inspired by leading tech companies like Linear, Stripe, and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application with `/` home route and 404 handling)

**UI Component System:**
- **shadcn/ui** component library (New York style variant) providing pre-built, accessible components
- **Radix UI** primitives for headless, accessible component foundations
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management

**Design System:**
- Custom blue gradient color palette (deep blue → vibrant cyan → electric blue) as defined in `design_guidelines.md`
- Typography using Inter font family for headings and body text, Fira Code for technical content
- Consistent spacing system using Tailwind's standard units (4, 6, 8, 12, 16, 20, 24)
- Custom animations including gradient shifting and fade-in-up transitions

**State Management:**
- **TanStack Query (React Query)** for server state management and API data fetching
- **React Hook Form** for form state and validation management
- Component-level React state (useState, useEffect) for UI interactions

**Page Structure:**
The application is a single-page portfolio with six main sections:
1. Hero section with animated gradient background and profile photo
2. About section highlighting personal qualities and core skills
3. Projects gallery with filterable project cards
4. Education/Experience timeline
5. Skills section with proficiency indicators
6. Contact form for visitor communication

### Backend Architecture

**Server Framework:**
- **Express.js** on Node.js for the HTTP server
- Development mode uses Vite middleware for hot reloading
- Production mode serves static built files from `dist/public`

**API Design:**
- RESTful API endpoints under `/api` prefix
- Contact form submission endpoint: `POST /api/contact`
- Admin endpoint for retrieving submissions: `GET /api/contact`
- JSON request/response format with standard HTTP status codes

**Data Validation:**
- **Zod** schemas for runtime type validation
- **drizzle-zod** integration for generating validators from database schemas
- Shared validation schemas between frontend and backend via `shared/schema.ts`

**Storage Layer:**
- **In-memory storage** (`MemStorage` class) for contact form submissions
- Database schema defined using **Drizzle ORM** with PostgreSQL dialect
- Schema includes `contact_submissions` table with fields: id, name, email, message, createdAt
- Architecture supports future migration to PostgreSQL database (Neon serverless driver included)

**Rationale:** The in-memory storage provides a simple development experience while maintaining the same interface (`IStorage`) that can be swapped for database-backed storage when needed.

### Project Structure

```
/client                 # Frontend application
  /src
    /components        # React components
      /ui             # shadcn/ui components
    /pages            # Page components (Home, NotFound)
    /hooks            # Custom React hooks
    /lib              # Utility functions and query client
/server               # Backend application
  index.ts           # Express server setup
  routes.ts          # API route definitions
  storage.ts         # Storage layer abstraction
  vite.ts            # Vite development server integration
/shared               # Shared code between frontend and backend
  schema.ts          # Database schemas and validation
```

**Design Decision:** The monorepo structure with shared types ensures type safety across the full stack while maintaining clear separation between client and server code.

### Build & Deployment

**Development:**
- Single command `npm run dev` starts both Vite dev server and Express backend
- Vite middleware integration provides HMR for frontend changes
- TSX for running TypeScript server code without pre-compilation

**Production:**
- `npm run build` compiles frontend (Vite) and backend (esbuild) separately
- Frontend builds to `dist/public` as static assets
- Backend bundles to `dist/index.js` as ESM module
- `npm start` runs the production Express server serving static files and API

### External Dependencies

**UI & Styling:**
- Tailwind CSS v3 - Utility-first CSS framework
- shadcn/ui - Component library built on Radix UI
- Radix UI - Unstyled, accessible component primitives (20+ component packages)
- Lucide React - Icon library
- React Icons - Additional icon sets (Simple Icons for tech logos)

**Database & ORM:**
- Drizzle ORM - TypeScript ORM for SQL databases
- Drizzle Kit - Schema migrations and management
- @neondatabase/serverless - Neon serverless PostgreSQL driver (configured but not actively used with in-memory storage)

**Form Management:**
- React Hook Form - Performant form state management
- @hookform/resolvers - Validation resolver integrations
- Zod - TypeScript-first schema validation

**Data Fetching:**
- TanStack Query (React Query) - Server state management and caching

**Development Tools:**
- TypeScript - Type safety across the stack
- Vite - Fast build tool and dev server
- esbuild - Fast JavaScript/TypeScript bundler for server code
- tsx - TypeScript execution engine for development

**Routing:**
- Wouter - Minimal client-side routing library

**Date Utilities:**
- date-fns - Modern date utility library

**Session Management:**
- connect-pg-simple - PostgreSQL session store (configured for future use)

**Carousel/Slides:**
- embla-carousel-react - Carousel component library

**Design Assets:**
- Google Fonts (Inter, Fira Code, DM Sans, Geist Mono, Architects Daughter)
- Project images stored in `attached_assets/generated_images/`