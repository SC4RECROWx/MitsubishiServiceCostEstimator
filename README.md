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

## 🔧 Panduan Deployment

Berikut adalah informasi yang Anda butuhkan untuk mendeploy aplikasi Next.js ini di server Anda.

### Ringkasan Konfigurasi Server

*   **Versi Node.js**: **18.x** atau **20.x** (versi LTS yang direkomendasikan).
*   **Index File**: Aplikasi Next.js tidak memiliki satu file `index` tradisional. Entry point utama aplikasi adalah halaman `app/page.tsx`. Server Next.js akan menangani routing secara otomatis.
*   **Publish Directory**: Direktori yang berisi hasil build produksi adalah **`.next`**. Direktori ini dibuat setelah menjalankan `npm run build`.
*   **Error File**: Untuk menangani error, Anda bisa membuat file kustom `app/error.tsx`. Jika file ini tidak ada, Next.js akan menggunakan halaman error standarnya.

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
    Perintah ini akan mengkompilasi aplikasi Anda menjadi file-file statis dan kode server yang teroptimasi di dalam folder `.next`.
    ```bash
    npm run build
    ```

4.  **Jalankan Aplikasi dalam Mode Produksi**
    Setelah proses build selesai, jalankan perintah ini untuk memulai server produksi Next.js. Secara default, aplikasi akan berjalan di port `3000`.
    ```bash
    npm run start
    ```

### Menjaga Aplikasi Tetap Berjalan (Rekomendasi)

Untuk memastikan aplikasi tetap berjalan bahkan setelah Anda menutup terminal, sangat disarankan menggunakan manajer proses seperti `pm2`.

1.  **Install `pm2` secara global (jika belum ada):**
    ```bash
    npm install pm2 -g
    ```
2.  **Jalankan aplikasi menggunakan `pm2`:**
    ```bash
    # Beri nama prosesnya "mitsubishi-app" dan jalankan perintah "npm start"
    pm2 start npm --name "mitsubishi-app" -- start
    ```

Dengan mengikuti langkah-langkah di atas, aplikasi Anda akan berjalan dalam mode produksi yang cepat dan teroptimasi di server Anda.
