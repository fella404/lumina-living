# PRD — Property Agent & Real Estate Website

|                  |                                                               |
| ---------------- | ------------------------------------------------------------- |
| **Jenis proyek** | Proyek dummy untuk portfolio frontend development             |
| **Platform**     | Web (responsif: mobile, tablet, desktop)                      |
| **Stack**        | React + TypeScript, Vite, Tailwind CSS, React Router, Zustand |
| **Data**         | Mock data statis (tanpa backend)                              |
| **Status**       | Fase 1: Home page. Halaman lain menyusul                      |

---

## 1. Ringkasan

Website agen properti dan real estate di Indonesia yang memungkinkan pengunjung menjelajahi properti untuk dijual atau disewa, melihat properti yang terjual di wilayah pilihan/populer, membaca artikel seputar properti, dan menghubungi agen. Fokus proyek ini adalah **kualitas antarmuka dan pengalaman pengguna di sisi frontend**, bukan logika bisnis atau backend.

## 2. Tujuan

### Tujuan produk

- Membantu pengunjung menemukan properti dengan cepat lewat pencarian dan filter.
- Menampilkan properti unggulan, wilayah populer, dan konten blog dengan tampilan yang rapi dan modern.
- Mendorong pengunjung menghubungi agen (tombol Contact).

### Tujuan portfolio

- Menunjukkan kemampuan membangun UI kompleks: bento grid, carousel, floating search dengan overlay, dan grid dengan pagination "view more".
- Menunjukkan penerapan design system yang konsisten (design tokens, tipografi, shadow, radius).
- Menunjukkan struktur kode yang bersih: TypeScript, komponen reusable, routing, dan state management.

## 3. Target Pengguna

| Persona                           | Kebutuhan                                                              |
| --------------------------------- | ---------------------------------------------------------------------- |
| **Pembeli properti**              | Mencari rumah/apartemen/villa untuk dibeli berdasarkan lokasi dan tipe |
| **Penyewa**                       | Mencari properti untuk disewa (status _for rent_)                      |
| **Pembaca konten**                | Membaca tips dan berita properti lewat blog                            |
| **Perekrut / reviewer portfolio** | Menilai kualitas UI, struktur kode, dan kelengkapan fitur frontend     |

## 4. Ruang Lingkup

### Termasuk (In Scope)

- Home page lengkap dengan seluruh section pada Bagian 6.
- Navigasi antar halaman dengan React Router.
- Pencarian dan filter di sisi klien (dari mock data).
- Desain responsif.

### Belum termasuk (Fase Berikutnya)

Footer, halaman Properties, Property Detail, Region, dan Blog ("soon" pada spesifikasi awal). Rute dan placeholder-nya tetap disiapkan.

### Di luar lingkup

Autentikasi, backend/API, database, dashboard agen, form transaksi, pembayaran, dan integrasi peta.

## 5. Design System

Sumber: `COLOR-AND-TYPOGRAPHY.md`.

### Warna

| Token             | Warna                                                 | Foreground |
| ----------------- | ----------------------------------------------------- | ---------- |
| Primary           | `#384252`                                             | `#F9FAFB`  |
| Secondary         | `#F9FAFB`                                             | `#384252`  |
| Accent            | `#F9FAFB`                                             | `#384252`  |
| Base / Background | `#F9FAFB`                                             | `#111827`  |
| Card              | `#F9FAFB`                                             | `#111827`  |
| Muted             | `#F9FAFB`                                             | `#6B7280`  |
| Border            | `#F3F4F6`                                             |            |
| Input             | `#F9FAFB`                                             |            |
| Ring              | `#D1D5DB`                                             |            |
| Chart 1–5         | `#D1D5DB`, `#6B7280`, `#384252`, `#F3F4F6`, `#D1D5DB` |            |

### Tipografi

- Sans: **Geist**
- Serif: **Georgia**
- Mono: **Geist Mono**

### Lainnya

- Shadow: opacity 0.1, blur 10px, spread 0px, offset x 0px, y 4px
- Radius: `0.65rem`
- Spacing dasar: `0.25rem`

### Catatan desain

- Banyak token bernilai sama (`#F9FAFB`), jadi pemisahan visual antar-elemen (card vs background) mengandalkan shadow dan border yang cukup terlihat.
- Warna untuk badge status (For Sale / For Rent) perlu ditentukan saat implementasi agar tetap selaras dengan tema netral.

## 6. Kebutuhan Fungsional

### 6.1 Navbar

- Logo di kiri.
- Menu tengah: **Properties**, **Regions**, **Blogs**.
- Tombol **Contact** di kanan.
- Menu aktif diberi penanda; di mobile menu berubah menjadi hamburger.

### 6.2 Hero / Home

- Background image, judul, dan subjudul.
- **Search container** (satu kesatuan) berisi:
  - Dropdown **status**: for sell / for rent
  - Dropdown **type**: house, apartment, villa, dll
  - Input **search** untuk lokasi atau nama proyek
  - Tombol **submit**
- **Perilaku floating:** ketika pengguna scroll dan hero tidak lagi terlihat, container berubah menjadi **floating search button**. Saat ditekan, container penuh muncul melayang dengan **overlay** di belakangnya.
- Submit mengarahkan ke halaman Properties dengan parameter pencarian.

**Kriteria penerimaan**

- [ ] Search bar tampil normal saat hero terlihat.
- [ ] Floating button muncul otomatis saat hero keluar layar dan hilang saat kembali.
- [ ] Overlay bisa ditutup (klik overlay, tombol tutup, atau tombol Esc).
- [ ] Nilai pencarian tidak hilang saat berpindah antara bentuk inline dan overlay.

### 6.3 Featured Property

- Bento grid 3 item: 1 item besar di kiri, 2 item lebih kecil bertumpuk di kanan.
- Property card: gambar; di atas gambar terdapat container berisi **nama**, **tipe**, dan **lokasi** properti.

### 6.4 Property Catalog

- **Filter chips** berdasarkan tipe properti (house, apartment, dll) dan sebuah **tombol filter**.
- List properti berupa grid **4 kolom × 2 baris** (8 item awal).
- Tombol **View more**: hanya menampilkan 8 properti pertama (4 kolom × 2 baris); menavigasikan pengguna ke halaman katalog penuh (`/properties`).
- Property card: gambar; tipe dan lokasi ditumpuk di atas gambar; lalu nama properti; lalu spesifikasi (**kamar tidur**, **kamar mandi**, **luas**).

**Kriteria penerimaan**

- [ ] Memilih chip memfilter list dan mengembalikan jumlah tampil ke 8.
- [ ] Tombol View more di Home Page mengarahkan pengguna ke rute `/properties`.
- [ ] Grid menyesuaikan jumlah kolom di layar kecil.

### 6.5 Popular Region

- Menampilkan **5 card wilayah populer** di Indonesia: gambar, nama wilayah, dan tombol **View more** untuk melihat properti di kota tersebut.
- **1 card tambahan** yang mengarah ke halaman Region.

### 6.6 Blogs

- Bento grid 4 item: 1 item di kiri, 3 item di kanan.
- Blog card: gambar, judul, subjudul, dan badge/tag.

### 6.7 Testimonial

- Carousel card.
- Isi card: foto orang, kutipan, nama, dan role.

### 6.8 Halaman Lanjutan (Fase Berikutnya)

Footer, Properties, Property Detail, Region, dan Blog. Spesifikasinya akan ditambahkan ke dokumen ini setelah tersedia.

**Properties Page (`/properties`)**: Menampilkan katalog penuh dengan pagination **View more**. Setiap tombol ditekan, memuat **8 properti lagi** (grid 4 kolom × 2 baris) hingga seluruh data tampil; tombol hilang otomatis jika semua properti telah dimuat.

## 7. Model Data

Semua data berupa mock statis dengan tipe TypeScript.

| Entitas         | Field utama                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Property**    | id, slug, name, type, status (sell/rent), price, lokasi (kota, wilayah), image, bedrooms, bathrooms, area, featured |
| **Region**      | id, slug, name, image, propertyCount                                                                                |
| **Blog**        | id, slug, title, subtitle, image, tags                                                                              |
| **Testimonial** | id, name, role, quote, avatar                                                                                       |

## 8. Kebutuhan Non-Fungsional

- **Responsif:** nyaman di mobile, tablet, dan desktop.
- **Performa:** gambar `lazy-load`, hindari layout shift (gunakan aspect ratio).
- **Aksesibilitas:** label pada input, focus ring terlihat, alt text pada gambar, dan overlay/carousel bisa dioperasikan dengan keyboard.
- **Kualitas kode:** TypeScript tanpa `any`, `tsc -b` bersih, komponen reusable (`PropertyCard`, `BlogCard`, `RegionCard`, `SearchBar`).
- **Konsistensi visual:** seluruh warna, radius, dan shadow bersumber dari design tokens.

## 9. Arsitektur Singkat

- **Routing:** `/`, `/properties`, `/properties/:slug`, `/regions`, `/regions/:slug`, `/blogs`, `/blogs/:slug`.
- **State global (Zustand):** state pencarian (status, type, query) dan state overlay search.
- **State lokal:** jumlah item tampil pada catalog, filter chip aktif.
- Detail langkah pengerjaan ada di `PLAN.md`.

## 10. Milestone

| Fase | Cakupan                                                        |
| ---- | -------------------------------------------------------------- |
| 1    | Design tokens, mock data, router, layout, dan Navbar           |
| 2    | Hero + search + floating search overlay                        |
| 3    | Featured, Catalog, Popular Region, Blogs, Testimonial          |
| 4    | Footer dan halaman lanjutan (Properties, Detail, Region, Blog) |
| 5    | Polish: responsif, aksesibilitas, performa                     |

## 11. Metrik Keberhasilan

- Seluruh section pada Home sesuai spesifikasi dan berfungsi tanpa error.
- Tampilan konsisten dan rapi di ukuran layar mobile hingga desktop.
- Interaksi utama (floating search, view more, filter chips, carousel) berjalan mulus.
- Kode bersih dan mudah dibaca oleh reviewer portfolio.

## 12. Pertanyaan Terbuka

- Warna aksen untuk badge status dan harga.
- Layout final Popular Region (grid 3 kolom atau horizontal scroll).
- Isi tombol filter di Catalog (status, rentang harga, kamar, dll).
- Sumber gambar (stok/placeholder) dan nama brand/logo.
- Isi lengkap halaman lanjutan dan footer.
