# Peridot Properties

A boutique lakeside vacation rental website for **Peridot Properties**, a family-run getaway on Pickerel Lake in Richville, Minnesota. Hosted personally by Charlotte Wunderlich.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS 4**.

---

## The Property

**33746 N Pickerel Dr, Richville, MN 56576**

- 4 bedrooms (king, queen, queen, bunk room)
- 2 full bathrooms
- Sleeps up to 10 guests
- 150 feet of private lake frontage on Pickerel Lake
- Private dock, kayaks, canoe, fire pit, full kitchen

Pickerel Lake: 829 acres, 78ft max depth, excellent walleye and smallmouth bass fishing. ~3 hours from Minneapolis, ~45 minutes from Fargo.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| next/font | Google Fonts (Cormorant Garamond + Inter) |
| lucide-react | Icons |

---

## Project Structure

```
src/
  app/
    layout.tsx          Root layout (fonts, Navbar, Footer)
    page.tsx            Homepage
    property/page.tsx   The Property page
    explore/page.tsx    Things To Do page
    book/page.tsx       Book Now page (pricing, inquiry form)
    about/page.tsx      About Charlotte / the company
    globals.css         Tailwind @theme with brand colors
  components/
    Navbar.tsx          Sticky top navigation
    Footer.tsx          Site footer with contact info
    PropertyCard.tsx    Reusable property display card
    AmenityIcon.tsx     Icon + label amenity display
    SeasonCard.tsx      Seasonal activity card
    CTABanner.tsx       Call-to-action section banner
    TestimonialCard.tsx Guest review card
    BookingWidget.tsx   OwnerRez booking widget placeholder
    ContactForm.tsx     Inquiry form (client component)
```

---

## Brand Colors

Configured via Tailwind CSS 4 `@theme` in `globals.css`:

| Name | Class | Hex |
|---|---|---|
| Peridot (Primary) | `bg-peridot` / `text-peridot` | `#6B8E23` |
| Forest Green (Deep) | `bg-forest` / `text-forest` | `#2D5016` |
| Gold (Warm Accent) | `bg-gold` / `text-gold` | `#C8A951` |
| Lake Blue | `bg-lake` / `text-lake` | `#4A7C8C` |
| Warm White | `bg-warm-white` / `text-warm-white` | `#FAF8F5` |
| Charcoal | `bg-charcoal` / `text-charcoal` | `#2C2C2C` |

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, amenities, testimonials |
| `/property` | Photo gallery, full amenities, house rules, location |
| `/explore` | Seasonal activities, lake info, nearby attractions |
| `/book` | Booking widget, pricing, direct booking benefits, inquiry form |
| `/about` | Charlotte's story, the peridot name, company values |

---

## SEO

- Metadata exports on every page (title, description, openGraph)
- JSON-LD structured data (`VacationRental` schema) on homepage
- Semantic HTML with aria labels and alt text throughout
- All pages statically generated at build time

---

## Booking Integration

The `/book` page includes a placeholder `BookingWidget` component styled with `data-ownerrez-widget="peridot-pickerel-lake"`. To activate the live OwnerRez widget, replace the placeholder content with the OwnerRez embed script once your property is configured in the OwnerRez dashboard.

---

## Contact

- **Host:** Charlotte Wunderlich
- **Email:** hello@peridotproperties.com
- **Phone:** (218) 555-0100
- **Address:** 33746 N Pickerel Dr, Richville, MN 56576
