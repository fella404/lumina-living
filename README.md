# Lumina Living

Website agen properti dan real estate (dummy untuk portfolio frontend) — React 19 + Vite, Tailwind CSS, React Router, dan Zustand. Data mock statis, tanpa backend.

## Perintah

```bash
npm install      # instal dependensi
npm run dev      # dev server dengan HMR
npm run build    # build produksi ke dist/
npm run preview  # jalankan hasil build
npm run lint     # ESLint
```

## Struktur

- `src/components/` — `ui/`, `layout/`, `home/`, `properties/`, `shared/`
- `src/pages/` — HomePage, PropertiesPage
- `src/data/` — mock data (properties, regions, blogs, testimonials)
- `src/store/` — Zustand (searchStore, uiStore)
- `src/lib/` — helper (cn, formatRupiah, propertyFilters)

Detail produk di `PRD.md`, langkah pengerjaan di `PLAN.md`, daftar komponen di `COMPONENTS.md`.
