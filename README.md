# Tanya Jawab Bengkel

Aplikasi web interaktif yang dirancang untuk membantu pemilik kendaraan Mitsubishi mendapatkan estimasi biaya servis berkala dan pekerjaan tambahan dengan cepat dan transparan.

## ✨ Fitur Utama

- **Seleksi Kendaraan Dinamis**: Pilih model, tahun, dan tipe kendaraan Mitsubishi Anda.
- **Estimasi Biaya Real-time**: Lihat rincian biaya untuk suku cadang dan jasa secara langsung saat Anda memilih paket servis.
- **Paket Servis Fleksibel**: Pilih dari berbagai paket servis berkala (`Pahe`) atau tambahkan pekerjaan dan suku cadang secara individual.
- **Unduh Estimasi PDF**: Hasilkan dan lihat ringkasan estimasi biaya dalam format PDF langsung di browser Anda.
- **Desain Responsif & Mode Gelap**: Antarmuka yang modern dan nyaman digunakan di berbagai perangkat, baik di mode terang maupun gelap.

## 🚀 Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) (dengan App Router & Turbopack)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Komponen UI**: [Shadcn/ui](https://ui.shadcn.com/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)

---

## 🔧 Panduan Deployment (Static Site)

Berikut adalah informasi yang Anda butuhkan untuk mendeploy aplikasi ini sebagai **situs statis**.

### Ringkasan Konfigurasi Server

*   **Framework/Build Preset**: Next.js (Static)
*   **Build Command**: `npm run build`
*   **Publish Directory**: Direktori yang berisi hasil build produksi adalah **`out`**. Direktori ini dibuat setelah menjalankan `npm run build`.
*   **Index File**: `index.html` (akan dibuat secara otomatis di dalam folder `out`).
*   **Error File**: `404.html` (akan dibuat secara otomatis di dalam folder `out`).

### Langkah-langkah Deployment

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/SC4RECROWx/MitsubishiServiceCostEstimator.git]
    cd [MitsubishiServiceCostEstimator]
    ```

2.  **Install Dependensi**
    Pastikan server Anda memiliki Node.js (versi 18 atau lebih baru).
    ```bash
    npm install
    ```

3.  **Build Aplikasi**
    Perintah ini akan mengekspor aplikasi Anda menjadi file-file HTML, CSS, dan JS statis di dalam folder **`out`**.
    ```bash
    npm run build
    ```
4.  **Konfigurasi di Platform Deployment (Contoh: Sevalla, Netlify, Vercel)**
    - Atur **Build Command** menjadi `npm run build`.
    - Atur **Publish Directory** menjadi `out`.
    - Atur **Index File** menjadi `index.html`.
    - Atur **Error File** menjadi `404.html`.
    - Redeploy (deploy ulang) situs Anda.

Platform akan secara otomatis menyajikan file dari folder `out`, dan masalah 404 Anda akan teratasi.
