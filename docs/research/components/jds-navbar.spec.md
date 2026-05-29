# JDS Navbar Specification

## Overview
- **Target file:** `src/components/jds/Navbar.tsx`
- **Screenshot:** `docs/design-references/jds-desktop-viewport.png`
- **Interaction model:** static (no scroll transform observed)

## DOM Structure
- Outer wrapper: sticky top-0 z-50, white bg, full width
- Inner: flex row, justify-between, align-center, max-w ~1440px, px ~40px, py ~16px
- Left: logo image
- Center-right: flex row gap, nav links + Order Now button

## Computed Styles

### Outer container
- backgroundColor: rgb(255, 255, 255)
- position: sticky
- top: 0
- zIndex: 50
- width: 100%
- padding: 16px 40px

### Logo image
- src: `/images/jds/logo.webp`
- height: ~40px (auto width)
- objectFit: contain

### Nav links (About Us, Dirty Sodas, Exotic Snacks, Contact)
- fontFamily: Onest, sans-serif
- fontSize: 16px
- fontWeight: 400–500
- color: rgb(0, 0, 0)
- backgroundColor: transparent
- href anchors: #about, #soda, #snacks, #contact

### "Order Now" button
- backgroundColor: rgb(255, 48, 7) — #FF3007
- color: white
- fontFamily: Onest, sans-serif
- fontWeight: 600
- fontSize: 15px
- padding: 12px 20px
- borderRadius: 100px (pill)
- display: flex, alignItems: center, gap: 8px
- has DoorDash icon: `/images/jds/doordash.png` (18px)
- href: https://www.doordash.com/store/johnnys-dirty-soda-1722-w-belmont-ave-chicago-40558927/97830148/

## States & Behaviors
- No scroll state change observed
- Links: hover → opacity 0.7

## Assets
- Logo: `public/images/jds/logo.webp`
- DoorDash icon: `public/images/jds/doordash.png`

## Text Content
- Nav links: About Us, Dirty Sodas, Exotic Snacks, Contact
- Button: Order Now

## Responsive Behavior
- Desktop (1440px): horizontal nav with all links visible
- Mobile (390px): logo left, hamburger menu icon right (hide nav links), Order Now button still visible or hidden behind menu
- Breakpoint: ~768px, nav links hide, show mobile menu toggle
