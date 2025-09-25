# Tanya Jawab Bengkel

Aplikasi web interaktif yang dirancang untuk membantu pemilik kendaraan Mitsubishi mendapatkan estimasi biaya servis berkala dan pekerjaan tambahan dengan cepat dan transparan. Aplikasi ini juga dilengkapi dengan AI Service Advisor untuk memberikan rekomendasi servis berdasarkan keluhan pengguna.

## ✨ Fitur Utama

- **Seleksi Kendaraan Dinamis**: Pilih model, tahun, dan tipe kendaraan Mitsubishi Anda.
- **Estimasi Biaya Real-time**: Lihat rincian biaya untuk suku cadang dan jasa secara langsung saat Anda memilih paket servis.
- **AI Service Advisor**: Dapatkan rekomendasi paket servis yang paling sesuai dengan kebutuhan Anda hanya dengan menjelaskan keluhan atau kondisi kendaraan.
- **Paket Servis Fleksibel**: Pilih dari berbagai paket servis berkala (`Pahe`) atau tambahkan pekerjaan dan suku cadang secara individual.
- **Unduh Estimasi PDF**: Hasilkan dan lihat ringkasan estimasi biaya dalam format PDF langsung di browser Anda.
- **Desain Responsif & Mode Gelap**: Antarmuka yang modern dan nyaman digunakan di berbagai perangkat, baik di mode terang maupun gelap.

## 🚀 Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) (dengan App Router & Turbopack)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Komponen UI**: [Shadcn/ui](https://ui.shadcn.com/)
- **AI & Generative**: [Google AI & Genkit](https://firebase.google.com/docs/genkit)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)

## 🔧 Menjalankan Secara Lokal

Untuk menjalankan aplikasi ini di lingkungan pengembangan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori**
    ```bash
<<<<<<< HEAD
    git clone [URL-repositori-Anda]
    cd [nama-folder-repositori]
=======
    git clone [https://github.com/SC4RECROWx/MitsubishiServiceCostEstimator.git]
    cd [MitsubishiServiceCostEstimator]
>>>>>>> 191c52d (initial commit)
    ```

2.  **Install Dependensi**
    Pastikan Anda memiliki Node.js versi 18 atau lebih baru.
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variable**
    Buat file baru bernama `.env` di direktori utama proyek dan tambahkan kunci API Google AI Anda.
    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```
    Anda bisa mendapatkan kunci API dari [Google AI Studio](https://aistudio.google.com/app/apikey).

4.  **Jalankan Server Pengembangan**
    Aplikasi akan berjalan pada `http://localhost:9002`.
    ```bash
    npm run dev
    ```

5.  **Jalankan Genkit (Opsional, untuk pengembangan AI)**
    Jika Anda ingin menguji atau memodifikasi *flow* Genkit, jalankan perintah berikut di terminal terpisah:
    ```bash
    npm run genkit:watch
    ```
