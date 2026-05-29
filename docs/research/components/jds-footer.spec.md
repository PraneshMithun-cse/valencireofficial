# JDS Footer + CTA + Ticker Specification

## Overview
- **Target file:** `src/components/jds/Footer.tsx`
- **Screenshot:** `docs/design-references/jds-section-bottom.png`
- **Interaction model:** static (ticker is CSS animation)

## Components in this file
1. OpenNow ticker (lime green scrolling banner)
2. CTA Section (white bg)
3. Footer (yellow bg with scallop top)

---

## 1. OpenNow Ticker

### Container
- backgroundColor: rgb(153, 217, 68) approx — lime green #99D944 (from screenshot it's bright lime)
- overflow: hidden
- height: ~56px
- width: 100%

### Ticker content
- Repeating: "🗓️ OPEN NOW!" — separated by spacing
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 28px
- fontWeight: 400
- color: rgb(0, 0, 0)
- textTransform: uppercase
- Animation: CSS marquee/translateX(-50%) looping, ~20s linear infinite

---

## 2. CTA Section

### Container
- backgroundColor: rgb(255, 255, 255)
- padding: 80px 40px
- textAlign: center
- display: flex, flexDirection: column, alignItems: center, gap: 24px

### Heading "Craving Something Different? Pull Up"
- fontFamily: "Badrock Regular", sans-serif
- fontSize: ~100–120px
- color: rgb(30, 30, 30) — near black
- textAlign: center
- maxWidth: 900px

### Order Now button (same red pill as header)
- backgroundColor: rgb(255, 48, 7) — #FF3007
- color: white
- borderRadius: 100px
- padding: 16px 32px
- has DoorDash icon

### Address
- "📍 1722 W Belmont Ave, Chicago"
- fontFamily: Onest, sans-serif
- fontSize: 18px
- fontWeight: 600
- color: rgb(30, 30, 30)

---

## 3. Footer

### Container
- backgroundColor: rgb(250, 188, 42) — #FABC2A yellow
- position: relative
- padding: 60px 60px 40px
- Scallop/cloud top: white scallops at the very top (same as About section but inverted — yellow scallops into white)

### Scallop top edge
- White background above, yellow footer below
- Scallop shape: series of semicircles ~80px radius along the bottom of the white section
- Achieved via SVG path or CSS clip-path on the footer container

### Footer layout
- 3-column: left (nav links), center (logo + phone + email), right (empty or social icons)
- At bottom: social icons centered, copyright left

### Logo
- src: `/images/jds/logo.webp`
- height: ~50px
- margin-bottom: 16px

### Phone number "312-719-3145"
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 60px
- color: rgb(30, 30, 30)

### Email
- fontFamily: Onest, sans-serif
- fontSize: 16px
- color: rgb(30, 30, 30)
- text: info@johnnysdirtysoda.com

### Nav links (left column)
- Home, Dirty Sodas, Exotic Snacks
- fontFamily: Onest, sans-serif
- fontSize: 16px
- color: rgb(30, 30, 30)

### Social icons
- Facebook, Twitter, Instagram, LinkedIn
- Dark circular icon buttons (~48px)
- backgroundColor: rgba(0,0,0,0.15) or dark
- borderRadius: 50%

### Copyright
- "All Rights Reserved. ©2025"
- fontFamily: Onest, sans-serif
- fontSize: 13px
- color: rgba(0,0,0,0.6)

## Responsive Behavior
- Desktop: 3-col footer
- Mobile: centered single column, smaller phone text
