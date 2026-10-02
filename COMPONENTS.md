# Components

## Navbar

- **Left:** Logo
- **Middle:** Properties, Regions, Blogs
- **Right:** Button contact

---

## Sections

### 1. Hero / Home

- **Background:** Image
- **Content:** Title and subtitle
- **Search Module:** Input search untuk mencari lokasi atau nama proyek (menyatu dalam satu container).
  - **Spesifikasi Input:**
    - Status dropdown (_for sell_ atau _for rent_)
    - Type dropdown (house, apartment, villa, dll.)
    - Search input
    - Submit button
  - **Behavior:** Ketika di-scroll atau tidak berada di _hero/home section_, container ini akan menjadi _floating button search_. Ketika ditekan, container penuhnya akan muncul secara _floating_ dan diberi _overlay_.

### 2. Featured Property

- **Layout:** Bento grid 3 items horizontal split.
  - 1 item di sebelah kiri.
  - 2 item yang lebih kecil di sebelah kanan (_cards stacked beside_).
- **Property Card:** Terdiri dari gambar dan container yang berada di atas gambar (_stacked on top_) yang berisi nama properti, tipe, dan lokasi.

### 3. Property Catalog

- **Controls:** Filter chips button berdasarkan tipe properti (house, apartment, dll.) dan filter button.
- **Layout List:** Grid 4 columns dan 2 rows (maksimal 8 properti awal). Tombol _view more_ menavigasikan ke halaman `/properties`.
- **Property Card:** Terdiri dari gambar, tipe properti dan lokasi yang berada di atas gambar, nama properti, serta spesifikasi properti (kamar, kamar mandi, dan luas properti).

### 4. Popular Region

- Menampilkan 5 cards _popular region_ di Indonesia.
- **Card Content:** Gambar, nama area, dan tombol _view more_ untuk melihat lebih banyak properti di kota yang dipilih.
- Ditambah 1 _region card_ ekstra untuk navigasi ke _region page_.

### 5. Blogs Property

- **Layout:** Bento grid 4 items horizontal split.
  - 1 item di sebelah kiri.
  - 3 item di sebelah kanan.
- **Blog Card:** Terdiri dari gambar, _title_, _subtitle_, dan _badges_ atau _tags_.

### 6. Testimonial

- **Layout:** Carousel cards.
- **Card Content:** Foto profil (person image), _quote_, nama, dan peran (_role_).

---

## Upcoming / Soon

- Footer
- Properties pages — list properti dengan tombol _view more_ yang memuat 8 properti tambahan (4 cols, 2 rows) per klik hingga habis
- Property detail pages
- Region pages
- Blog pages
