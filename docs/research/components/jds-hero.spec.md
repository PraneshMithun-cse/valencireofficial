# JDS Hero Specification

## Overview
- **Target file:** `src/components/jds/Hero.tsx`
- **Screenshot:** `docs/design-references/jds-desktop-viewport.png`
- **Interaction model:** time-driven (auto-cycling text carousel)

## DOM Structure
- Full viewport height section, orange background
- Top-left: announcement text
- Center-bottom left: big rotating text (3 lines per slide)
- Center: large drink cup image
- Top-right: floating card with small image
- Scattered: orange citrus fruit images in corners

## Computed Styles

### Section container
- backgroundColor: rgb(231, 93, 0) — #E75D00
- minHeight: 100vh
- width: 100%
- position: relative
- overflow: hidden
- padding: 80px 60px 40px 60px (desktop)

### Slide counter (number)
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 110px
- color: rgb(180, 34, 21) — #B42215 (active) / rgb(255,149,95) (prev) / rgb(75,75,75) (inactive)
- lineHeight: 1

### Slide subtitle (small text above big word)
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 125px
- color: rgb(255, 255, 255)
- textTransform: uppercase

### Slide main word (big text, 2 lines)
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 320px
- lineHeight: 1 (320px)
- color: rgb(255, 255, 255) — active slide
- color: rgb(75, 75, 75) — inactive/background slides
- textTransform: uppercase

### Body subtext
- fontFamily: Onest, sans-serif
- fontSize: 14px
- color: rgba(255,255,255,0.85)
- maxWidth: 340px

### "Order" text link
- fontFamily: Onest, sans-serif
- fontSize: 15px
- color: white
- textDecoration: underline

### "Explore Our Snacks" card (top right floating)
- backgroundColor: rgba(255,255,255,0.34)
- borderRadius: 16px
- padding: 16px
- backdropFilter: blur(8px)
- width: ~278px

### Hero drink cup image
- src: `/images/jds/hero-drink.webp`
- position: absolute or positioned center
- height: ~70vh
- objectFit: contain

### Hero orange fruit images
- src: `/images/jds/hero-orange.webp`
- Multiple instances scattered: top-right large, bottom-left medium
- mix-blend-mode: normal

## States & Behaviors

### Text carousel (4 slides, auto-cycle ~3s)
- Slides cycle: counter + subtitle + 2 big words
- Slide 1: "0" counter | "YOUR EXOTIC" | "FLAVOUR" "TRIP"
- Slide 2: "3" counter | "YOUR GO-TO" | "SNACK" "FIX"  
- Slide 3: "0" counter | "YOUR ONE STOP" | "FLAVOUR" "FIX"
- Slide 4: "1" counter | "YOUR ONE STOP" | "FLAVOUR" "SHOP"
- Active slide: white text, big counter in red #B42215
- Transition: fade or vertical slide, 0.5s ease

## Assets
- `/images/jds/hero-drink.webp` — main drink cup
- `/images/jds/hero-orange.webp` — citrus fruits (multiple instances)
- `/images/jds/hero-strawberry.webp` — strawberry drink (secondary)
- `/images/jds/hero-card-drink.webp` — floating card drink image

## Text Content (verbatim)
- "Johnny's Dirty Soda And Exotic Snacks, It's A Mouthful But That's Kind Of What We Are All About. Welcome To Your One Stop Shop For Delicious Drinks And Snacks From All Over The World."
- "Order" (link)
- "Explore Our Snacks" (link)

## Responsive Behavior
- Desktop (1440px): big 320px font, full layout with images
- Mobile (390px): font scales to ~120px for big words, single column, fruit images hidden or repositioned, subtext smaller
- Breakpoint: ~768px
