# JDS Snacks Section Specification

## Overview
- **Target file:** `src/components/jds/SnacksSection.tsx`
- **Screenshot:** `docs/design-references/jds-section-footer.png`
- **Interaction model:** click-driven carousel (arrow to scroll)

## DOM Structure
- Yellow background section
- "Our Exotic Snacks" label pill
- Heading: "Snacks You've Never Seen"
- Right side: description paragraph
- 3-card carousel row (with arrow right to see more)
- Below: "Order Now" button (white bg variant)

## Computed Styles

### Section container
- backgroundColor: rgb(250, 188, 42) — #FABC2A yellow
- padding: 60px 40px
- position: relative

### "Our Exotic Snacks" label
- fontFamily: Onest, sans-serif
- fontSize: 13px
- fontWeight: 600
- color: rgb(250, 188, 42) — yellow text
- backgroundColor: rgb(131, 61, 161) — purple bg
- borderRadius: 100px
- padding: 6px 16px

### Section heading "Snacks You've Never Seen"
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 80px
- color: rgb(255, 255, 255)

### Section description paragraph
- fontFamily: Onest, sans-serif
- fontSize: 16px
- color: rgba(0,0,0,0.75)
- maxWidth: 400px

### Snack cards
- backgroundColor: rgb(255, 255, 255) — white
- borderRadius: 20px
- padding: 16px
- width: ~320px (fills column)
- display: flex, flexDirection: column, gap: 12px

### Card image area
- backgroundColor: light neutral bg (varies by card)
- borderRadius: 16px
- height: ~200px
- overflow: hidden
- objectFit: contain

### Card product name
- fontFamily: Onest, sans-serif
- fontWeight: 600
- fontSize: 16px
- color: rgb(0, 0, 0)

### Country flag emoji
- fontSize: 20px (emoji)

## Snacks Data
1. Miss Vicky's Spicy Pepperoncini & Focaccia — img: snack-miss-vicky.png — flag: 🇨🇦
2. Propitious Mango Ice Cream — img: snack-propitious.png — flag: 🇯🇵
3. Dubai Style Kadayif & Pistachio Chocolate — img: snack-1.webp — flag: 🇦🇪

## Section Header Text
- Label: "Our Exotic Snacks"
- Heading: "Snacks You've Never Seen"
- "SNACKS FROM ALL OVER THE GLOBE"
- "From Korea to Mexico, Japan to the UK—Johnny's snack lineup is a passport to flavor. We handpick the boldest, crunchiest, sweetest snacks from all over the globe."
- Button: "Order Now" (DoorDash link)

## Responsive Behavior
- Desktop: 3-col grid of cards
- Mobile: 1 card visible, scroll/carousel
- Breakpoint: ~768px
