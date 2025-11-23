# Design Guidelines: Cybersecurity Portfolio Clone

## Design Approach
**Reference-Based Approach**: Draw inspiration from modern tech portfolios and cybersecurity brands, combining sleek dark UI patterns with bold typography and animated elements. The design should feel cutting-edge, technical, and professional while maintaining approachability.

## Core Design Principles
1. **Dark Cyber Aesthetic**: Deep black backgrounds (#050505) with strategic purple accents (#5933D3)
2. **Dynamic Motion**: Smooth scroll-triggered animations and infinite carousels create engagement
3. **Bold Typography**: Large, impactful headings with decorative SVG underlines
4. **Tech Authority**: Showcase credentials through logo walls and statistics

## Typography System
**Font Family**: DM Sans (all weights: 400, 500, 700, 800)

**Hierarchy**:
- H1: 48px-72px (responsive), weight 800, for hero title
- H2: 36px-48px, weight 700, for section headings  
- H3: 24px-30px, weight 600, for card titles and subheadings
- Body: 16px-18px, weight 400-500, line-height 1.7
- Small: 14px for metadata and labels

**Special Treatment**: Gradient text underlines using cyan (#00CED1) SVG paths for emphasis

## Layout & Spacing
**Container System**:
- Max-width: 1280px for content sections
- Full-width for hero and carousel sections
- Padding: px-6 (mobile), px-8 (tablet), px-12 (desktop)

**Vertical Rhythm**: 
- Section spacing: py-16 (mobile), py-24 (desktop)
- Card spacing: gap-6 to gap-8
- Use consistent units: 4, 6, 8, 12, 16, 24 for spacing

## Component Library

### Navigation Bar
- Sticky header with backdrop blur effect
- Logo on left (moon icon SVG)
- "Blogs | Write-ups" CTA button on right with purple background, fully rounded (rounded-full)
- Height: 80px with shadow on scroll

### Hero Section
- Two-column layout: Left text, Right profile image with floating tech icons
- Animated hand emoji SVG
- Title with gradient underline decoration
- Social media icon row (Medium, X/Twitter, Instagram, LinkedIn, YouTube)
- "Roadmaps" CTA button (purple, rounded-full)
- Background: Dark with subtle radial gradient overlay
- Height: 90vh minimum

### Infinite Logo Carousel
- Grayscale logos on dark background
- Smooth continuous scrolling (no pause)
- Display: Bugcrowd, Android, Burp Suite, HackerOne, Cappricio, JADX, John the Ripper, Kali Linux
- Height: 120px, logos scaled to 80px max height

### Stats Counter Section
- 4-column grid (responsive to 2x2 on mobile)
- Large numbers with animated count-up effect
- Icons with metrics: Projects, Experience, Completed Projects, Happy Clients
- Centered layout with decorative background elements

### Services Grid
- 4 service cards in 2x2 grid (stack on mobile)
- Each card: Icon image (80x80), heading, description text
- Hover: Subtle scale transform (1.02) and shadow increase
- Cards have rounded corners (16px) with subtle border

### Portfolio Section
- Tab filters: "hardware tool", "social engineering tool", "OSINT", "web security tool"
- Active tab: purple underline with transition
- Masonry grid layout for project cards (3 columns desktop, 2 tablet, 1 mobile)
- Project cards show GIF/image, link to WhatsApp for inquiries
- Hover: Overlay with project name and description

### Brand Logos Carousel (Bug Reports)
- Duplicate infinite scroll like hero carousel
- Company logos: Google, Microsoft, Meta, Apple, Android, BBC, Ferrari, etc.
- Two rows of scrolling logos moving in opposite directions
- Background: Slightly lighter than main (#0a0a0a)

### Courses Section
- 4 course cards in 2x2 grid
- Each card: Full-bleed course image, clickable to WhatsApp
- No text overlay, images are self-descriptive
- Subtle hover lift effect
- "Load more..." button below

### Timeline Section
- Vertical timeline with alternating left-right cards
- Number badges (01, 02, 03...) connected by vertical line
- Event cards show: Title, Date, Participant count
- Line: 2px solid purple (#5933D3)

### Testimonials Carousel
- Auto-rotating cards (4-5 second intervals)
- Each card: Profile image (circular), Name, 5-star rating, Testimonial text
- Navigation dots below
- Cards have purple left border accent

### Footer
- Centered layout
- Contact information and social links repeated
- Copyright notice
- Background: Pure black (#000000)

## Animations & Interactions
1. **Scroll Animations**: Fade-in and slide-up on section entry (Intersection Observer)
2. **Counter Animations**: Numbers count up from 0 when in viewport
3. **Carousel**: Smooth infinite scroll with CSS animation (15s duration)
4. **Hover States**: Scale, shadow, and color transitions (300ms ease)
5. **Tab Switching**: Content fade and slide transitions
6. **Page Load**: Staggered entrance for hero elements

## Images
**Hero Background**: Full viewport gradient overlay image showing tech/code aesthetic
**Profile Image**: Circular professional headshot in hero section with floating tech icons
**Service Icons**: PNG/WebP icons at 80x80px for each service
**Portfolio Items**: GIF animations showing tools in action
**Course Cards**: Full course cover images as backgrounds
**Testimonial Avatars**: Circular profile photos at 64x64px
**Brand Logos**: SVG or high-res PNG logos for carousels

## Accessibility
- Maintain WCAG AA contrast ratios (purple #5933D3 on dark passes)
- Focus states: Purple outline (2px) with offset
- Keyboard navigation for tabs and carousels
- Alt text for all images
- ARIA labels for interactive elements

## Responsive Breakpoints
- Mobile: 0-640px (single column, stacked layouts)
- Tablet: 641-1024px (2-column grids)
- Desktop: 1025px+ (full multi-column layouts)