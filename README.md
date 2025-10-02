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

## 🔧 Menjalankan Secara Lokal

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