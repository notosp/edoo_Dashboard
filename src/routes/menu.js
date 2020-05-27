export default {
  items: [
    { title: true, name: "Menu Utama" },
    {
      name: "Halaman Utama",
      url: "/home",
      icon: "icon-home",
      color: "primary"
    },
    {
      name: "Publikasi",
      url: "publikasi",
      icon: "icon-book-open",
      children: [
        { name: "Konten", url: "/publikasi/konten" },
        { name: "Klasifikasi", url: "/publikasi/klasifikasi" },
        {
          name: "Permintaan Klasifikasi",
          url: "/publikasi/permintaan-klasifikasi"
        },
        { name: "Penerbit", url: "/publikasi/penerbit" },
        { name: "Lembaga", url: "/publikasi/lembaga" }
      ]
    },
    {
      name: "Sekolah",
      url: "/sekolah",
      icon: "icon-graduation",
      children: [
        { name: "Tahun Ajaran", url: "/sekolah/tahun-ajaran" },
        { name: "Daftar Siswa", url: "/table/mat-table" },
        { name: "Guru", url: "/table/simple-crud" },
        { name: "Daftar Sekolah", url: "/table/popup-crud" },
        { name: "Sub Kelas", url: "/table/popup-crud" },
        { name: "Mata Pelajaran", url: "/sekolah/mata-pelajaran" },
        { name: "Jam Belajar", url: "/sekolah/jam-belajar" },
        { name: "Jadwal Belajar", url: "/sekolah/jadwal-belajar" },
        { name: "Jadwal Libur", url: "/sekolah/jadwal-libur" },
        { name: "Kalender Akademik", url: "/table/popup-crud" },
        { name: "Absen Siswa", url: "/sekolah/absen-siswa" },
        { name: "Daftar Koleksi Sekolah", url: "/sekolah/koleksi" },
        { name: "Daftar Peminjaman Koleksi", url: "/sekolah/peminjam-koleksi" },
        { name: "Kode Unik", url: "/sekolah/kode-unik" },
        { name: "Daftar Pengadaan", url: "/sekolah/pengadaan" },
        { name: "Jurusan Sekolah", url: "/sekolah/jurusan" },
        { name: "Posting Aktifitas", url: "/sekolah/posting-aktifitas" }
      ]
    },
    {
      name: "Popup",
      url: "/popup",
      icon: "icon-screen-desktop    ",
      children: [
        { name: "Popup Video", url: "/table/mui-table" },
        { name: "Youtube Video", url: "/table/mat-table" },
        { name: "Soundcloud Audio", url: "/table/simple-crud" }
      ]
    },
    { name: "Pengguna", url: "/com/dialog", icon: "icon-people" },
    // { name: 'Uploads', url: '/com/upload', icon: 'icon-cloud-upload' },
    // { name: 'Notification', url: '/com/notif' },

    { divider: true },
    { title: true, name: "Extras" },
    {
      name: "Promosi",
      url: "/promosi",
      icon: "icon-star",
      children: [
        { name: "Bagikan Konten Populer", url: "/register" },
        { name: "Rekomendasi Konten", url: "/404" },
        { name: "Banner Home", url: "/500" }
      ]
    },
    {
      name: "Laporan",
      url: "/laporan",
      icon: "icon-layers",
      children: [
        { name: "Laporan Metadata Konten", url: "/register", icon: "icon-doc" }
      ]
    },
    {
      name: "Statistik",
      url: "/statistik",
      icon: "icon-chart",
      children: [
        { name: "Global Statistic Users", url: "/register" },
        { name: "Global Statistic Books", url: "/404" }
      ]
    }
  ]
};

