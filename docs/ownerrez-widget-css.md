# OwnerRez Widget CSS — Design System Alignment

> **Last updated:** 2026-03-18
> **Applied to:** All 3 widgets (Booking 799235038, Calendar 799235093, Rates 799235055)

## Design System Tokens (from site source)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| peridot | `#6B8E23` | Primary action, buttons, accents |
| forest | `#2D5016` | Headings, dark bg, labels |
| gold | `#C8A951` | Accent highlights, "Today" button |
| lake | `#4A7C8C` | Section labels, secondary accent |
| warm-white | `#FAF8F5` | Backgrounds, button text on dark |
| charcoal | `#2C2C2C` | Body text |

### Typography
| Element | Font | Weight | Size | Other |
|---------|------|--------|------|-------|
| Body | Inter | 400 | 14px | `color: #2C2C2C` |
| Labels | Inter | 600 | 12.8px | `color: #2D5016`, uppercase tracking for section labels |
| Headings | Cormorant Garamond | 600 | varies | `color: #2D5016` |
| Section labels | Inter | 600 | 10-11px | `color: #4A7C8C`, `tracking-widest`, `uppercase` |
| Body muted | Inter | 400 | 14px | `color: #2C2C2C80` |
| Fine print | Inter | 400 | 12px | `color: #2C2C2C60` |

### Borders & Radius
| Element | Border | Radius |
|---------|--------|--------|
| Cards | `1px solid #6B8E2318` or `#6B8E2320` | `16px` (rounded-2xl) |
| Inputs | `1px solid rgba(107,142,35,0.19)` | `8px` |
| Buttons (pill) | none visible | `9999px` |
| Panels/containers | `1px solid #6B8E2325` | `16px` |
| Tables | none | `8px` overflow hidden |

### Shadows
| Element | Shadow |
|---------|--------|
| Cards | `0 4px 24px rgba(45,80,22,0.10)` |
| Navbar | `0 1px 8px rgba(45,80,22,0.07)` |
| Buttons hover | `0 4px 12px rgba(45,80,22,0.25)` |
| Cards subtle | `0 2px 14px rgba(45,80,22,0.07)` |

### Buttons
| Variant | BG | Text | Radius | Padding | Weight |
|---------|----|----|--------|---------|--------|
| Primary CTA | `#6B8E23` | `#FAF8F5` | `9999px` | `12px 32px` (px-8 py-3) | 600 |
| Primary hover | opacity 0.9 + shadow-lg | — | — | — | — |
| Gold CTA | `#C8A951` | `#2D5016` | `9999px` | `12px 32px` | 600 |
| Ghost/secondary | transparent + border `#FAF8F560` | `#FAF8F5` | `9999px` | `12px 32px` | 600 |
| Navbar CTA | `#6B8E23` | `#FAF8F5` | `9999px` | `8px 20px` (px-5 py-2) | 600 |

### Inputs (from site patterns)
| Property | Value |
|----------|-------|
| Background | `#FAF8F5` |
| Border | `1px solid rgba(107,142,35,0.19)` |
| Radius | `8px` |
| Padding | `10px 14px` |
| Font size | `14px` |
| Min height | `42px` |
| Focus border | `#6B8E23` |
| Focus ring | `0 0 0 3px rgba(107,142,35,0.15)` |
| Placeholder | `#2C2C2C50` |

### Spacing
| Context | Value |
|---------|-------|
| Section padding | `56px` vertical (py-14) |
| Card internal | `24px` (p-6) or `32px` (p-8) |
| Form group gap | `24px` |
| Between sections in card | `32px` |
| Divider color | `#6B8E2315` |

### Gradients
| Name | Value |
|------|-------|
| Hero/CTA | `linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)` |
| Fishing tips | `linear-gradient(135deg, #2D5016 0%, #4A7C8C 100%)` |

## Comprehensive Widget CSS v5

See `ownerrez-widget-css-v5.css` in this directory.
