# JDS Sodas Section Specification

## Overview
- **Target file:** `src/components/jds/SodasSection.tsx`
- **Screenshot:** `docs/design-references/jds-section-snacks.png`
- **Interaction model:** click-driven carousel (arrow buttons to scroll through cards)

## DOM Structure
- Purple background section
- Top: small "Our Sodas" label pill
- Heading: "Dirty Sodas. Clean Hits."
- Subtext paragraph
- Horizontal scrolling cards (3 visible at once, arrows to navigate)
- Bottom: "Order Now" button

## Computed Styles

### Section container
- backgroundColor: rgb(131, 61, 161) — #833DA1 purple
- padding: 60px 40px
- minHeight: ~1027px

### "Our Sodas" label
- fontFamily: Onest, sans-serif
- fontSize: 13px
- fontWeight: 600
- color: rgb(131, 61, 161) — purple text
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 100px
- padding: 6px 16px

### Section heading
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 72px
- color: rgb(255, 255, 255)

### Section subtext
- fontFamily: Onest, sans-serif
- fontSize: 16px
- color: rgba(255,255,255,0.8)

### Card container (horizontal scroll)
- display: flex
- gap: 20px
- overflowX: auto (or managed by state)
- scrollSnapType: x mandatory

### Individual soda card
- width: 446px
- height: 583px
- borderRadius: 24px
- display: flex, flexDirection: column
- padding: 24px
- position: relative
- overflow: hidden

### Card backgrounds (per drink):
- KING COCO: backgroundColor: rgb(201, 138, 0) — #C98A00 gold
- MAGIC MARKER: backgroundColor: rgb(91, 171, 217) — #5BABD9 blue
- GLOW UP: backgroundColor: rgb(250, 188, 42) — #FABC2A yellow
- SHENRON: backgroundColor: rgb(229, 237, 157) — #E5ED9D lime
- PRINCESS PEACH: backgroundColor: rgb(201, 138, 0) — gold
- INFINITE AURA: backgroundColor: rgb(148, 101, 0) — #946500 dark gold
- OUT OF OFFICE: backgroundColor: rgb(229, 237, 157) — lime
- MY LEIGE: backgroundColor: rgb(201, 138, 0) — gold
- TRITON TWIST: backgroundColor: rgb(201, 138, 0) — gold
- DARK MATTER: backgroundColor: rgb(201, 138, 0) — gold
- MAGIC MARKER (2): backgroundColor: rgb(91, 171, 217) — blue
- CHILLAX: backgroundColor: rgb(201, 138, 0) — gold
- JOHNNY'S COSMO: backgroundColor: rgb(201, 138, 0) — gold
- ELECTRIC SLIDE: backgroundColor: rgb(91, 171, 217) — blue

### Card drink name
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 40px
- color: rgb(255, 255, 255)
- textTransform: uppercase

### Card ingredients text
- fontFamily: Onest, sans-serif
- fontSize: 15px
- color: rgba(255,255,255,0.85)

### Card drink image
- positioned bottom-right, taking ~60% of card height
- objectFit: contain

### Arrow buttons (left/right navigation)
- backgroundColor: white
- borderRadius: 50%
- width: 48px, height: 48px
- display: flex, alignItems: center, justifyContent: center

### "Order Now" button
- Same as navbar: bg #FF3007, white text, pill shape, DoorDash icon

## Soda Menu Data
All 14 drinks with images:
1. KING COCO — Coke + Coconut + Vanilla + Coconut Cream — img: soda-cup-1.png — bg: gold #C98A00
2. MAGIC MARKER — Sprite Zero + Sugar Free Peach + Sugar Free Blue Raspberry + Sugar Free Lime — img: soda-cup-2.png — bg: blue #5BABD9
3. GLOW UP — Fanta + Vanilla + Cold foam — img: soda-cup-3.png — bg: yellow #FABC2A
4. SHENRON — Mountain Dew + Lime + pineapple — img: soda-cup-4.png — bg: lime #E5ED9D
5. PRINCESS PEACH — Coke Zero+ Peach+ Almond Creamer — img: soda-cup-5.png — bg: gold
6. INFINITE AURA — Mountain Dew Code Red + Cherry+ Cold Foam — img: soda-cup-6.png — bg: dark gold
7. OUT OF OFFICE — Sprite + Coconut + Pineapple + Coconut Cream — img: soda-cup-7.png — bg: lime
8. MY LEIGE — Dr. Pepper + Black Cherry + Vanilla + Cold Foam — img: soda-cup-8.png — bg: gold
9. TRITON TWIST — Red Bull + Peach + Blue Raspberry + Cold Foam — img: soda-cup-9.png — bg: gold
10. DARK MATTER — Sugar Free Red Bull + Sugar Free Pineapple + Sugar Free Blue Raspberry — img: soda-cup-10.png — bg: gold
11. MAGIC MARKER (again in list) — img: soda-cup-2.png — bg: blue
12. CHILLAX — Coke Zero + Sugar Free Vanilla + Sugar Free Cherry + Sugar Free Creamer — img: soda-cup-11.png — bg: gold
13. JOHNNY'S COSMO — Sprite Zero + Raspberry + Blue Raspberry + Cherry + Black Cherry + Lime — img: soda-cup-12.png — bg: gold
14. ELECTRIC SLIDE — Sprite + Blue raspberry + Lime + Cold Foam — img: soda-cup-13.png — bg: blue

## Responsive Behavior
- Desktop: shows 3 cards, carousel with arrows
- Mobile: shows 1 card at a time, arrows still present
- Breakpoint: ~768px
