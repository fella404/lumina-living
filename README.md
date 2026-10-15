# Lumina Living

> ⚠️ **Catatan Portofolio**: Proyek ini adalah **proyek dummy / konsep eksplorasi untuk portofolio Frontend Development**. Seluruh data properti, agen, ulasan, artikel, dan transaksi bersifat statis/mock (tanpa backend atau database riil). Proyek ini berfokus pada demonstrasi keahlian membangun antarmuka web yang modern, performant, interaktif, dan terstruktur.

Lumina Living adalah representasi website agen properti dan *real estate modern* berbasis web untuk menjelajahi, menyewa, dan membeli hunian residensial di berbagai wilayah Indonesia. Dibangun untuk mendemonstrasikan implementasi antarmuka pengguna (UI) tingkat lanjut, animasi interaktif berbasis scroll, serta arsitektur kode komponen React yang rapi dan terukur.

---

## 🌟 Fitur Utama

- **Hero & Floating Search Overlay**:
  - Hero banner dengan bilah pencarian interaktif untuk status (*For Sale* / *For Rent*) dan tipe properti.
  - *Floating Search bar* yang muncul otomatis saat pengguna melakukan scroll melewati hero banner.
- **Featured Properties (Bento Grid)**:
  - Tata letak grid bento yang menampilkan properti unggulan dengan animasi *in-view entrance*.
- **Katalog Properti & Filter Dinamis**:
  - Filter kategori cepat (*House, Apartment, Villa, Townhouse, Studio*).
  - Modal filter lanjutan (tipe, status, rentang harga, kamar tidur, kota) yang tersinkronisasi langsung dengan URL *search query parameters*.
  - Pagination *"View More"* yang memuat properti berikutnya secara mulus.
- **Animasi Scroll Reveal & Staggered Motion**:
  - Efek fade & slide-in berbasis scroll menggunakan Framer Motion pada daftar kartu properti dan region.
- **Detail Properti Interaktif**:
  - Galeri foto terstruktur, informasi spesifikasi lengkap (kamar tidur, kamar mandi, luas tanah/bangunan), rekomendasi properti serupa, dan modal pemesanan/jadwal survei (*Booking Modal*).
- **Eksplorasi Wilayah (Regions)**:
  - Menampilkan kota-kota populer di Indonesia (Jakarta, Bali, Bandung, Surabaya, dll.) dengan navigasi filter cepat ke properti terkait.
- **Blog & Testimonial**:
  - Artikel seputar tips properti, tren desain, dan ulasan kepuasan klien menggunakan slider responsif (*Embla Carousel*).
- **Halaman Kontak & Tentang Kami**:
  - Formulir pesan kontak, informasi kantor, profil tim, mitra, dan statistik perusahaan.

---

## 🛠️ Tech Stack & Ekosistem

- **Framework & Bundler**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://motion.dev/)
- **Routing**: [React Router](https://reactrouter.com/) (Data router v7/v8)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Slider / Carousel**: [Embla Carousel React](https://www.embla-carousel.com/)
- **Tipografi**: Geist & Geist Mono (`@fontsource-variable/geist`)
- **Deployment Ready**: Cloudflare Pages / Workers via Wrangler

---

## 📁 Struktur Direktori

```text
lumina-living/
├── public/                 # Aset statis & favicon
├── src/
│   ├── components/
│   │   ├── about/          # Komponen halaman About (Hero, Mission, Team, Partners)
│   │   ├── contact/        # Formulir & info kontak
│   │   ├── home/           # Komponen Home (Hero, Featured, Catalog, Regions, Blogs)
│   │   ├── layout/         # RootLayout, Navbar, Footer, ScrollToTop
│   │   ├── properties/     # Toolbar, FilterModal, Gallery, BookingModal
│   │   ├── shared/         # Komponen bersama (PropertyCard, RegionCard, Testimonials, dll.)
│   │   └── ui/             # Komponen UI primitif (Button, Modal)
│   ├── data/               # Mock data statis (properties, regions, blogs, testimonials)
│   ├── lib/                # Utility & helpers (formatRupiah, filter logic, clsx/tailwind-merge)
│   ├── pages/              # Halaman aplikasi (Home, Properties, Detail, Regions, Blog, Contact, About)
│   ├── store/              # Zustand global store (searchStore)
│   ├── index.css           # Konfigurasi Tailwind CSS v4 & theme variables
│   ├── main.jsx            # Entry point aplikasi
│   └── router.jsx          # Konfigurasi rute React Router
├── package.json
└── vite.config.js
```

---

## 🧭 Rute Halaman

| Rute | Halaman | Deskripsi |
| --- | --- | --- |
| `/` | `HomePage` | Beranda utama dengan Hero, Featured Bento, Katalog, Wilayah, & Testimoni |
| `/properties` | `PropertiesPage` | Daftar seluruh properti dengan pencarian teks, filter tipe, & modal filter harga/lokasi |
| `/properties/:slug` | `PropertyDetailPage` | Detail spesifikasi properti, galeri foto, simulasi booking, dan rekomendasi serupa |
| `/regions` | `RegionsPage` | Daftar kota/wilayah untuk pencarian properti berdasarkan lokasi |
| `/blogs` | `BlogsPage` | Daftar artikel tips hunian, tren pasar, dan panduan investasi |
| `/blogs/:slug` | `BlogDetailPage` | Halaman baca artikel blog lengkap |
| `/about` | `AboutPage` | Informasi profil agen, misi perusahaan, statistik, dan tim |
| `/contact` | `ContactPage` | Formulir pesan, alamat kantor cabang, dan channel komunikasi |

---

## 🚀 Memulai Proyek

Pastikan Anda telah menginstal **Node.js** (versi 18+ direkomendasikan).

### 1. Kloning & Instalasi Dependensi

```bash
git clone https://github.com/username/lumina-living.git
cd lumina-living
npm install
```

### 2. Menjalankan Server Pengembangan

```bash
npm run dev
```

Buka peramban di [http://localhost:5173](http://localhost:5173).

### 3. Skrip yang Tersedia

```bash
npm run dev      # Menjalankan server dev dengan Fast Refresh (HMR)
npm run build    # Mengompilasi dan mengoptimasi aplikasi untuk produksi ke folder dist/
npm run preview  # Menjalankan preview lokal hasil build produksi menggunakan Cloudflare Wrangler
npm run lint     # Menjalankan pemeriksaan kode dengan ESLint
```

---

## 🎨 Catatan Desain & Data

- **Dummy / Mock Data**: Seluruh data properti, wilayah, testimoni, dan blog menggunakan data mock lokal di folder `src/data/` tanpa backend/database nyata.
- **Frontend Focus**: Tombol pemesanan, pencarian, filter, dan formulir kontak difokuskan pada pengujian interaksi pengguna (UX), validasi antarmuka, dan umpan balik visual di sisi klien.
- Format mata uang rupiah ditangani secara terpusat oleh fungsi `formatRupiah` di `src/lib/utils.js`.
- Sinkronisasi filter pencarian mempertahankan *browser history* melalui URL search params, memudahkan pengujian maupun berbagi tautan hasil filter pencarian.
