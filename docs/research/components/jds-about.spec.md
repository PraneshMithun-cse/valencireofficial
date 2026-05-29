# JDS About Section Specification

## Overview
- **Target file:** `src/components/jds/AboutSection.tsx`
- **Screenshot:** `docs/design-references/jds-desktop-full.png`
- **Interaction model:** static

## DOM Structure
- Purple background section with scallop/cloud top edge (SVG mask or clip-path)
- Left: text block with "About Us" heading + 2 paragraphs
- Right: store interior photo

## Computed Styles

### Section container
- backgroundColor: rgb(131, 61, 161) — #833DA1 purple
- padding: 80px 60px
- position: relative
- Top edge: scallop/cloud shape in white, achieved via SVG clip path or before pseudo-element
- The scallop edge is white circles creating a wavy top

### "About Us" heading
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 114px
- lineHeight: 99px
- color: rgb(222, 49, 87) — #DE3157 red/pink
- textTransform: capitalize

### Body paragraphs
- fontFamily: Onest, sans-serif
- fontSize: 16–18px
- color: rgb(255, 255, 255)
- lineHeight: 1.6

### Store photo
- src: `/images/jds/store.webp`
- borderRadius: 16px
- width: ~45%
- objectFit: cover

## States & Behaviors
- Static section, no animations

## Text Content (verbatim)
- "About Us"
- "Hi! We are a local family owned business and have all been born and raised here in Chicago. We're here to bring back that sweet sense of community—one fizzy glass and savory snack at a time. We are so excited to bring a new experience and flavor to Lakeview."
- "As we start making our mark, we believe in the power of local connections and community creativity. Whether you're a local artist, small business, event organizer, or just someone with a fun idea, we'd love to hear from you. Reach out—let's dream up something cool together!"

## The Scallop Top Edge
- White color (matches page bg above)
- Multiple circles aligned horizontally, overlapping
- Each circle ~80px radius
- Achieved with: SVG path OR a series of absolutely positioned white circles along the top

## Responsive Behavior
- Desktop: side-by-side 2-column
- Mobile: stacked, photo below text, heading scales to ~60px
