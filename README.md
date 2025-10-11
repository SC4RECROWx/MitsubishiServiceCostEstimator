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

## 🔧 Menjalankan Secara Lokal (Mode Pengembangan)

Untuk menjalankan aplikasi ini di lingkungan pengembangan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/SC4RECROWx/MitsubishiServiceCostEstimator.git]
    cd [MitsubishiServiceCostEstimator]
    ```

2.  **Install Dependensi**
    Pastikan Anda memiliki Node.js versi 18 atau lebih baru.
    ```bash
    npm install
    ```

3.  **Jalankan Server Pengembangan**
    Aplikasi akan berjalan pada `http://localhost:9002`.
    ```bash
    npm run dev
    ```

## 📦 Menjalankan di Server (Mode Produksi)

Aplikasi Next.js tidak bisa langsung disalin ke folder `htdocs` seperti aplikasi PHP. Ia membutuhkan Node.js untuk berjalan. Berikut adalah cara untuk menjalankannya di server Anda:

1.  **Build Aplikasi**
    Perintah ini akan mengkompilasi aplikasi Anda menjadi file-file statis dan server-side code yang teroptimasi di dalam folder `.next`.
    ```bash
    npm run build
    ```

2.  **Jalankan Aplikasi**
    Setelah proses build selesai, jalankan perintah ini untuk memulai server produksi Next.js. Secara default, aplikasi akan berjalan di port `3000`.
    ```bash
    npm run start
    ```

Aplikasi Anda sekarang berjalan dalam mode produksi yang jauh lebih cepat dan teroptimasi.

**Tips Tambahan**:
*   Untuk menjaga agar aplikasi tetap berjalan bahkan setelah Anda menutup terminal, disarankan menggunakan manajer proses seperti `pm2`.
    ```bash
    # Install pm2 secara global (jika belum ada)
    npm install pm2 -g
    
    # Jalankan aplikasi menggunakan pm2
    pm2 start npm --name "mitsubishi-app" -- start
    ```
