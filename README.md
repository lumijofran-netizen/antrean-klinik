# antrean-klinik

Sistem Antrean Real-time Klinik
Aplikasi web berbasis Firebase yang dirancang untuk memanajemen antrean pasien secara real-time. Sistem ini memastikan data antrean selalu sinkron antara sisi staf dan pasien tanpa perlu melakukan refresh halaman secara manual.

🚀 Fitur Utama
Real-time Sync: Menggunakan Firestore listeners (onSnapshot) untuk pembaruan data instan.

Database Transaction: Mencegah duplikasi nomor antrean saat banyak user mengakses secara bersamaan.

Responsif: Tampilan modern berbasis Tailwind CSS yang nyaman digunakan di berbagai perangkat (Mobile/Desktop).

🛠 Tech Stack
Frontend: HTML5, JavaScript (Vanilla), Tailwind CSS (via CDN).

Backend/Database: Firebase Firestore (Cloud Database).

Deployment: Firebase Hosting / GitHub Pages.
