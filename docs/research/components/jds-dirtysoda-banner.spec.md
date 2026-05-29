# JDS DirtySoda Banner Specification

## Overview
- **Target file:** `src/components/jds/DirtySodaBanner.tsx`
- **Screenshot:** `docs/design-references/jds-section-sodas.png`
- **Interaction model:** static

## DOM Structure
- Full-width section, dark/black background
- Left side: huge "DIRTYY SODA" text (2 lines) — "DIRTYY" outlined/stroke, "SODA" filled yellow
- Right side: large drink cup image
- Below big text: smaller text "Dirty Soda? Let's Get Into It." + paragraph
- Small square image (store photo) overlapping left

## Computed Styles

### Section container
- backgroundColor: rgb(0, 0, 0) or very dark — #111111
- minHeight: ~500px
- position: relative
- overflow: hidden
- padding: 60px

### "DIRTYY" text
- fontFamily: "Badrock Regular", sans-serif
- fontSize: ~280–320px (fills ~50% width)
- color: transparent (stroke only) OR rgb(250, 188, 42) — yellow #FABC2A
- textTransform: uppercase
- WebkitTextStroke: 3px rgb(250,188,42) if outlined

### "SODA" text  
- fontFamily: "Badrock Regular", sans-serif
- fontSize: ~280–320px
- color: rgb(250, 188, 42) — #FABC2A yellow (filled)
- textTransform: uppercase

### Section subtitle "Dirty Soda? Let's Get Into It."
- fontFamily: "Badrock Regular", sans-serif
- fontSize: 32px
- color: rgb(255, 255, 255)

### Body paragraph
- fontFamily: Onest, sans-serif
- fontSize: 16px
- color: rgba(255, 255, 255, 0.8)
- maxWidth: 480px

### Drink image (right side)
- src: `/images/jds/hero-drink.webp` or `soda-king-coco.webp`
- position: absolute right
- height: ~90%
- objectFit: contain

### Small store photo (overlapping)
- src: `/images/jds/store.webp`
- width: ~200px
- height: ~200px
- borderRadius: 12px
- position: absolute, overlapping corner

## Text Content (verbatim)
- "DIRTYY SODA" (big display)
- "Dirty Soda? Let's Get Into It."
- "It's not what you think. Dirty soda means taking your standard Coke or Pepsi base and mixing in flavors like coconut, vanilla, or cherry—with sweet cream or lime to finish. The possibilities are truly endless!"

## Responsive Behavior
- Desktop: side by side layout, giant text
- Mobile: stacked, text scales to fit width, image repositions below
