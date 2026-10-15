# ABOUT_PLAN.md — Rencana Implementasi About Page (Lumina Living)

Dokumen ini berisi rencana implementasi halaman **About Us** (`/about`) yang diadaptasi dari desain referensi ke domain Lumina Living (Real Estate & Properti).

---

## 1. Analisis Layout & Section

1. **Hero Section (Split Content + Visual Card)**
   - Breadcrumb: `Home / About Us`
   - Headline besar & copy ringkasan keunggulan Lumina Living
   - Social proof avatar stack + tombol CTA ("Explore Properties" / "Contact Us")
   - Kolom kanan: Gambar visual dengan sudut rounded tebal dan aksen latar lembut

2. **Partner / Developer Bar**
   - Label judul kecil ("Our Trusted Partners / Featured In")
   - Deretan logo partner dalam gaya monokrom/minimalis yang clean dan responsif

3. **Mission / Story & Metric Showcase Section**
   - **Bagian Atas (Split Content & Visual Image 2 Kolom)**:
     - Kiri: Kicker label `"About Us"` (font kecil, muted), Main heading (`"Driven by Trust. Powered by Expertise."`), body copy paragraf narasi visi misi Lumina Living, serta tombol CTA pill `"Learn More"` yang memakai design token `variant="primary"`.
     - Kanan: Visual card foto portrait ber-rounded besar (`rounded-3xl`) dengan aksen background pad/frame halus (`bg-muted` / `bg-primary/5`), bersih dan elegan **tanpa floating badge / floating info tambahan**.
   - **Bagian Bawah (Stat Counters 3 Kolom Horizontal)**:
     - Dibatasi garis pembatas atas `border-t border-border`.
     - 3 kolom statistik angka besar (`text-5xl lg:text-6xl font-bold tracking-tight`) dengan divider vertikal halus antar-kolom di breakpoint desktop:
       - 98% — Client satisfaction
       - 500+ — Properties Successfully Transacted
       - 12K+ — Happy Residents & Investors
     - Label deskripsi kecil di bawah angka (`text-sm text-muted-foreground`).

4. **Why Choose Us (Image + Accordion Section)**
   - Layout 2 kolom: foto tim/suasana kantor di sisi kiri
   - Sisi kanan: Kicker `"Why Choose Us"`, heading ("Built on Trust, Driven by Results"), dan Accordion interaktif (expand/collapse dengan transisi halus dan toggle state)

5. **Team Showcase Section ("Meet the People Behind Lumina Living")**
   - Header (Split Layout): 
    - Kiri: Kicker ("Our Team") dan Heading ("Meet the People Behind Lumina Living")
    - Kanan: deskripsi pendukung"
   - Grid 4 kolom (responsif 1 -> 2 -> 4 kolom) berisi kartu tim
   - Detail kartu: Foto portrait, overlay social link icons (LinkedIn, X, Instagram) saat hover/fokus, nama anggota tim, dan posisi jabatan

6. **Testimonials Section (Multi-card Slider)**
   - Header dengan subtitle, heading ("Reviews That Speak Volumes"), dan deskripsi singkat
   - Carousel / slider kartu testimonial multi-kolom memanfaatkan data `testimonials.js`
   - Kontrol navigasi tombol panah (Prev/Next) di pojok kanan bawah

---

## 2. Rencana Implementasi Teknis

### 2.1 Mock Data (`src/data/about.js`)

- [x] `aboutStats`: 3 metrik performa utama (misal: 98% Kepuasan Klien, 500+ Properti Terkurasi, 12K+ Keluarga Terbantu).
- [x] `aboutFeatures`: 4 item accordion untuk *Why Choose Us* (title, description, icon opsional).
- [x] `aboutTeam`: 12 data profil tim (4 foto asli + 8 generic avatar dengan toggle expand).
- [ ] `aboutPartners`: daftar partner developer/institusi properti terkemuka (name, logo/text).

### 2.2 Komponen Section (`src/components/about/`)

- [x] `AboutHero.jsx`
- [x] `AboutPartners.jsx`
- [x] **AboutMissionStats (`AboutMissionStats.jsx`)**
  - Container terpusat dengan padding proporsional (`max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24`).
  - Grid atas (2 kolom responsif):
    - Kolom kiri: Kicker "About Us", heading "Driven by Trust. Powered by Expertise.", copy narasi 1–2 paragraf, dan Button "Learn More" ke `/properties`.
    - Kolom kanan: Portrait image card dengan frame rounded dan soft background pad, bersih tanpa floating badge/chips.
  - Grid bawah (Stat counters):
    - Border divider atas (`border-t border-border`).
    - 3 kolom statistik metrik angka tebal dengan garis divider vertikal antar-kolom di desktop (`border-r border-border`).
    - Mengonsumsi data dari `aboutStats` di `src/data/about.js`.
- [x] `AboutWhyChooseUs.jsx`
- [x] `AboutTeam.jsx`
- [x] `AboutTestimonials.jsx` (diimplementasikan sebagai komponen shared `Testimonials.jsx`, dipakai Home & About)

### 2.3 Perakitan Halaman & Routing

- [ ] Buat `src/pages/AboutPage.jsx` menyusun semua section vertikal dengan spacing konsisten (`py-12 md:py-20`)
- [ ] Update `src/router.jsx`: Ganti `{ path: "about", element: <SoonPage title="About" /> }` menjadi `<AboutPage />`
- [ ] Pastikan navigasi aktif di Navbar (`/about`) berjalan dengan baik

### 2.4 Polishing & Responsivitas

- [ ] Verifikasi breakpoint layar (Mobile single-column, Tablet, Desktop split-column)
- [ ] Pastikan kontras teks, token Tailwind, dan aset gambar teroptimasi dengan `loading="lazy"`
- [ ] Jalankan `npm run build` dan `npm run lint` untuk verifikasi tidak ada error
