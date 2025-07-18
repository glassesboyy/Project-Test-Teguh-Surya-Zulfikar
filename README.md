# Suitmedia Front End Internship Selection 2025

## Tentang Project

Website ini adalah hasil pengembangan untuk memenuhi tugas seleksi magang berdampak 2025 oleh Suitmedia pada posisi **Front End Developer Intern**. Website dibangun menggunakan Next.js 15 (App Router), TypeScript, dan Tailwind CSS, dengan struktur modular dan komponen reusable.

## Fitur Utama

- Landing page modern dengan hero section dan CTA
- Halaman About, Services, Work, Ideas, Careers, dan Contact
- Komponen UI custom (Card, Badge, Button, dsb.)
- Responsive & mobile-friendly
- SEO metadata di setiap halaman
- Integrasi API (dummy/fetch)

## Fitur & Penjelasan Khusus Tugas (Fokus pada Halaman Ideas)

### 1. Header (header.tsx)

- Fixed position di atas, otomatis menghilang saat scroll ke bawah dan muncul kembali saat scroll ke atas
- Background sedikit transparan saat muncul
- Active state menu sesuai halaman yang sedang dikunjungi

### 2. Banner / Hero Section (hero-section.tsx)

- Banner dengan gambar yang bisa di-update dari CMS (API), tidak perlu edit image manual
- Area bawah banner terdapat efek miring (CSS clip-path)
- Efek parallax antara image dan text saat scroll

### 3. List Post (Ideas)

- Semua fungsi sort (berdasarkan terbaru/terlama) dan show-per-page (10, 20, 50) berjalan sesuai requirement
- Status items yang ditampilkan pada satu page sesuai urutan dan jumlah yang dipilih
- Saat melakukan sort, mengubah show-per-page, atau berpindah halaman, lalu refresh: data/state tetap (persist di URL query string)
- Ratio thumbnail konsisten di setiap card (menggunakan CSS object-fit dan fixed height)
- Lazy loading pada image (Next.js Image component)
- Title post pada card dibatasi maksimal 3 baris, otomatis ellipsis jika lebih (CSS line-clamp)

#### Contoh API Request

`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at`

### 4. API & Proxy

- Pengaturan proxy sudah dilakukan agar API dapat diakses tanpa CORS issue
- Semua param API (page, size, sort, append) sudah di-handle dinamis

---

## Penjelasan Halaman Ideas (Fokus Tugas)

Halaman **Ideas** adalah fokus utama tugas ini. Berikut fitur dan implementasi utamanya:

- **Filtering, Pagination, Sorting:**
  - User dapat memilih jumlah item per halaman (10, 20, 50)
  - User dapat mengurutkan berdasarkan terbaru/terlama
  - Navigasi antar halaman dan perubahan sort/page size akan update URL (state tetap saat refresh)
- **Card List:**
  - Setiap card menampilkan thumbnail (ratio konsisten, lazyload), judul (maks 3 baris, ellipsis), dan tanggal publish
  - Klik card menyimpan data ke sessionStorage (untuk detail/preview)
- **API:**
  - Data diambil dari endpoint ideas dengan param dinamis
  - Proxy sudah diatur agar API bisa diakses langsung dari FE
- **UX:**
  - Semua interaksi (sort, page, show-per-page) smooth tanpa reload penuh
  - State tetap walau halaman di-refresh

---

## Struktur Folder

```
src/
  app/
    (dummy)/
      about/
      careers/
      contact/
      services/
      work/
    ideas/
      [id]/
    components/
      ideas/
      ui/
    lib/
      api/
      constants/
      hooks/
      utils/
      validations/
    types/
public/
  bg-*.jpg, logo.png, placeholder*.jpg
```

## Cara Menjalankan

1. Clone repo ini
2. Jalankan `npm install`
3. Jalankan `npm run dev`
4. Buka `http://localhost:3000`

## Kontak

- **Nama:** Teguh Surya Zulfikar
- **Email:** suryazulfikar22@gmail.com
- **Github:** [glassesboyy](https://github.com/glassesboyy)
- **Linkedin:** [suryazulfikar](https://www.linkedin.com/in/suryazulfikar/)
- **Website Personal:** [zulhub.vercel.app](https://zulhub.vercel.app/)

---

> Website ini dibuat khusus untuk keperluan seleksi magang berdampak 2025 oleh Suitmedia pada posisi Front End Developer Intern. Semua konten, desain, dan kode adalah hasil karya pribadi untuk penilaian seleksi.
