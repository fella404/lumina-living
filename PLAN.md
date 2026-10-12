# PLAN.md — Property Agent (Frontend React + JavaScript)

Catatan: setup Vite + React (JavaScript) + Tailwind dikerjakan manual (di luar plan ini). Plan dimulai dari langkah setelah itu.

## 0. Keputusan Teknis

| Kebutuhan        | Pilihan                                                         | Alasan                                                                  |
| ---------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Routing          | `react-router`                                                  | Ada banyak halaman (home, properties, detail, region, blog)             |
| State management | `zustand`                                                       | Ringan; cocok untuk state pencarian/filter yang dipakai lintas komponen |
| UI primitives    | shadcn/ui                                                       | Token di COLOR-AND-TYPOGRAPHY.md sudah berformat shadcn                 |
| Carousel         | `embla-carousel-react`                                          | Dipakai shadcn Carousel; untuk Testimonial                              |
| Ikon             | `lucide-react`                                                  | Default shadcn                                                          |
| Font             | `@fontsource-variable/geist`, `@fontsource-variable/geist-mono` | Georgia adalah system font, tidak perlu install                         |

### Perintah install

```bash
# Routing + state management
npm install react-router zustand

# Carousel + ikon
npm install embla-carousel-react lucide-react

# Font
npm install @fontsource-variable/geist @fontsource-variable/geist-mono

# shadcn/ui (opsional tapi disarankan, jalankan setelah Tailwind siap)
# Prasyarat: path alias "@/*" -> "./src/*" di vite.config.js
npx shadcn@latest init
npx shadcn@latest add button input select badge card carousel dialog toggle-group
```

`react-router`, `zustand`, `embla-carousel-react`, dan `lucide-react` sudah siap dipakai langsung tanpa konfigurasi tambahan.

## 1. Design Tokens

- [ ] Petakan semua warna dari COLOR-AND-TYPOGRAPHY.md ke CSS variables (`--primary`, `--primary-foreground`, `--secondary`, `--accent`, `--muted`, `--border`, `--input`, `--ring`, `--chart-1..5`, `--radius: 0.65rem`)
- [ ] Set font: `--font-sans: Geist`, `--font-serif: Georgia`, `--font-mono: Geist Mono`
- [ ] Set shadow token: `0 4px 10px 0 rgb(0 0 0 / 0.1)`
- [ ] Import font di `main.jsx`
- [ ] Catatan kontras: `card`, `background`, `muted`, dan `secondary` sama-sama `#F9FAFB`. Pakai shadow atau border yang sedikit lebih gelap agar card tidak menyatu dengan background
- [ ] Putuskan warna aksen untuk badge For Sale / For Rent (tema saat ini sangat netral)

## 2. Struktur Folder

```
src/
├─ components/
│  ├─ ui/                  # komponen shadcn
│  ├─ layout/              # Navbar, Footer, RootLayout
│  ├─ home/                # section khusus home
│  └─ shared/              # PropertyCard, BlogCard, RegionCard, dll
├─ data/                   # mock data (properties, regions, blogs, testimonials)
├─ hooks/                  # useInView, useScrollPast, dll
├─ pages/                  # HomePage, PropertiesPage, dst
├─ store/                  # zustand stores
├─ lib/                    # utils (cn, formatter harga)
├─ router.jsx
└─ main.jsx
```

## 3. Data Layer (Mock)

- [ ] Definisikan struktur data mock: `Property`, `Region`, `Blog`, `Testimonial` (cukup sebagai objek polos di `src/data/`)
- [ ] `Property`: `id, slug, name, type ('house' | 'apartment' | 'villa' | ...), status ('sell' | 'rent'), price, location (city, region), image, bedrooms, bathrooms, area, featured`
- [ ] Daftar nilai valid untuk `status` dan `type` dibuat sebagai konstanta (mis. di `src/lib/propertyFilters.js`) agar dipakai bersama oleh dropdown, chips, dan store
- [ ] `Region`: `id, slug, name, image, propertyCount`
- [ ] `Blog`: `id, slug, title, subtitle, image, tags: string[]`
- [ ] `Testimonial`: `id, name, role, quote, avatar`
- [ ] Buat mock data di `src/data/` sebagai array objek polos (minimal 20 property agar "View more" bisa diuji 8 → 16 → 20+, 6 region, 4+ blog, 4+ testimonial)

## 4. Routing

- [ ] Buat `router.jsx` dengan `createBrowserRouter` dan `RootLayout` (Navbar + `<Outlet />` + Footer)
- [ ] Route:
  - `/` → HomePage
  - `/properties` → PropertiesPage (soon)
  - `/properties/:slug` → PropertyDetailPage (soon)
  - `/regions` dan `/regions/:slug` → RegionPage (soon)
  - `/blogs` dan `/blogs/:slug` → BlogPage (soon)
- [ ] Pasang `RouterProvider` di `main.jsx`
- [ ] Buat placeholder sederhana untuk halaman "soon" agar link Navbar tidak 404

## 5. State Management (Zustand)

- [ ] `useSearchStore`: `status` ('sell' | 'rent' | null), `type` ('house' | ... | null), `query: string`, dengan aksi `setStatus`, `setType`, `setQuery`, `reset`. Pakai `create((set) => ({ ... }))`
- [ ] `useUiStore`: `isSearchOverlayOpen`, `openSearch`, `closeSearch`
- [ ] Catalog memakai `activeType` (chips) dan `visibleCount` (mulai 8, +8 tiap "View more"). `visibleCount` cukup `useState(8)` lokal, tidak perlu global. **Catatan:** Home Page selalu tampil 8 item awal, tombol "View more" hanya navigasi ke `/properties`; `visibleCount` (+8 per klik) dipakai di `PropertiesPage`
- [ ] Saat submit search di hero: set store lalu pindah halaman dengan `useNavigate()` ke `/properties?status=...&type=...&q=...`

## 6. Layout: Navbar

- [ ] Logo kiri, menu tengah (Properties, Regions, Blogs), tombol Contact kanan
- [ ] Gunakan `NavLink` untuk state aktif
- [ ] Versi mobile: hamburger + sheet/drawer

## 7. Home Sections (urutan pengerjaan)

### 7.1 Hero + Search

- [ ] Background image, judul, subjudul
- [ ] `SearchBar` satu container: dropdown status (sell/rent), dropdown type (house, apartment, villa, dll), input search (lokasi/nama proyek), tombol submit
- [ ] Pasang `ref` di hero, gunakan `IntersectionObserver` (hook `useInView`) untuk mendeteksi hero keluar layar
- [ ] Saat hero tidak terlihat: sembunyikan bar, tampilkan **floating search button** (fixed, pojok bawah/kanan)
- [ ] Saat floating button ditekan: buka overlay (backdrop gelap) berisi `SearchBar` versi penuh yang melayang; tutup dengan klik overlay, tombol X, atau Esc
- [ ] Reuse komponen `SearchBar` yang sama di hero dan overlay (state dari `useSearchStore`)

### 7.2 Featured Property

- [ ] Bento grid 3 item: 1 besar di kiri, 2 kecil bertumpuk di kanan (`grid-cols-2`, item besar `row-span-2`)
- [ ] `FeaturedCard`: gambar penuh, container di atas gambar (posisi bawah) berisi nama, type, lokasi
- [ ] Ambil dari property dengan `featured: true` (3 item)
- [ ] Responsif: satu kolom di mobile

### 7.3 Property Catalog

- [ ] Filter chips per type + tombol filter (buka dialog/sheet untuk filter tambahan, mis. status dan range harga)
- [ ] Grid 4 kolom × 2 baris (8 item awal); breakpoint: 1 → 2 → 4 kolom
- [ ] `PropertyCard`: gambar, badge type dan lokasi di atas gambar, nama, spesifikasi (kamar tidur, kamar mandi, luas)
- [ ] Tombol "View more": navigasi ke `/properties` (`Button to="/properties"`)
- [ ] Ganti chip → reset tampilan ke 8 item

### 7.4 Popular Region

- [ ] 5 `RegionCard` (gambar, nama region, tombol "View more" → `/regions/:slug`)
- [ ] 1 card tambahan "Lihat semua region" → `/regions`
- [ ] Layout: grid 3 kolom di desktop (2 baris × 3), atau 6 kolom horizontal scroll; putuskan saat implementasi

### 7.5 Blogs

- [ ] Bento grid 4 item: 1 besar di kiri, 3 di kanan (bertumpuk)
- [ ] `BlogCard`: gambar, judul, subjudul, badge/tag
- [ ] Klik card → `/blogs/:slug`

### 7.6 Testimonial

- [ ] Carousel (shadcn Carousel / Embla) berisi card: foto, kutipan, nama, role
- [ ] Tampilkan 1 card di mobile, 2–3 di desktop
- [ ] Tombol prev/next dan indikator titik

## 8. Halaman Lain (setelah spesifikasi tersedia)

- [ ] Footer
- [ ] Properties page (baca query param dari search, list + filter chips; tombol "View more" memuat 8 item berikutnya — 4 kolom × 2 baris — dan hilang saat semua item tampil)
- [ ] Property detail page
- [ ] Region page
- [ ] Blog page

## 9. Polish

- [ ] Responsif untuk mobile, tablet, desktop di semua section
- [ ] Skeleton/placeholder untuk gambar (`loading="lazy"`, `aspect-ratio`)
- [ ] Aksesibilitas: label input, focus ring (`--ring`), alt text gambar, navigasi keyboard di overlay dan carousel
- [ ] Scroll ke atas saat pindah route
- [ ] Cek kontras teks vs background (lihat catatan warna di bagian 1)
- [ ] Pastikan `npm run lint` bersih tanpa error dan jaga penamaan props komponen tetap konsisten
- [ ] Rapikan komponen duplikat (`PropertyCard` dan `FeaturedCard` bisa berbagi base)

## 10. Urutan Kerja yang Disarankan

1. Design tokens + font (bagian 1)
2. Mock data (bagian 3)
3. Router + RootLayout + Navbar (bagian 4 dan 6)
4. Hero + SearchBar + floating search (7.1, dengan store bagian 5)
5. Featured → Catalog → Region → Blogs → Testimonial (7.2–7.6)
6. Footer dan halaman lain
7. Polish
