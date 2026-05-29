# Page Topology — Valenciré Luxury Fashion Redesign

## Inspiration: grigoriak.doctor layout adapted for luxury fashion brand

## Sections (top to bottom)

1. **LuxHeader** — fixed/floating, transparent → glass blur on scroll, light theme
2. **LuxHero** — 100vh cinematic, SplitType animated headline, scroll reveal
3. **BrandStory** — editorial intro, large quote, brand philosophy text
4. **PhilosophySection** — scroll-driven sticky, 4 rotating philosophy pillars
5. **CollectionsShowcase** — 3 large product category cards with hover depth
6. **LookbookGallery** — editorial image grid, before/after style gallery
7. **CraftsmanshipSteps** — 7-step accordion (adapted from grigoriak's process)
8. **AllCollections** — full collections list with hover animations
9. **NewsletterSection** — elegant email signup form
10. **LuxFooter** — light elegant footer

## Interaction Models
- Header: scroll-driven (glass blur after 60px)
- Hero: SplitType char reveal on load + parallax on scroll
- BrandStory: IntersectionObserver fade-up
- Philosophy: sticky scroll + IntersectionObserver tab switch
- Collections: hover 3D depth + IntersectionObserver stagger reveal
- Lookbook: stagger grid reveal + hover scale
- Steps: click accordion
- Newsletter: form focus animations
- Footer: static

## Design Tokens
- bg: #FAFAF8 (warm white)
- bg-cream: #F5F3EF
- bg-beige: #EDE9E3
- accent: #8E6B5A (warm copper brown from grigoriak)
- text: #1A1A1A
- text-muted: #8A8478
- border: #E8E3DC
- font-heading: OPTIRadiant
- font-body: Klein, Helvetica
- radius: 2px (sharp luxury)
