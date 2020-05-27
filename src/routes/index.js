import React from 'react';

const routes = [
  // { path: '/home', component: React.lazy(() => import('../views/Home')) },
  // { path: '/form/validation', component: React.lazy(() => import('../views/forms/ValidationForm')) },
  // { path: '/baas', exact: true, component: React.lazy(() => import('../views/mbaas')) },
  // { path: '/baas/author', component: React.lazy(() => import('../views/mbaas/Author')) },
  // { path: '/baas/publisher', component: React.lazy(() => import('../views/mbaas/Publisher')) },
  // { path: '/baas/book', component: React.lazy(() => import('../views/mbaas/Book')) },

  { path: '/home', component: React.lazy(() => import('../views/pages/Dashboard/Dashboard'))},
  { path :'/publikasi/konten', component:React.lazy(() => import('../views/pages/publikasi/konten'))},
  { path :'/publikasi/klasifikasi', component:React.lazy(() => import('../views/pages/publikasi/klasifikasi'))},
  // { path :'/publikasi/permintaan-klasifikasi', component:React.lazy(() => import('../views/Pages/Publikasi/permintaanKlasifikasi/PermintaanKlasifikasi'))},
  { path :'/publikasi/penerbit', component:React.lazy(() => import('../views/pages/publikasi/penerbit/PenerbitList'))},
  { path: '/publikasi/penerbit-add', component: React.lazy(() => import('../views/pages/publikasi/penerbit/PenerbitAdd'))},
  // { path: '/publikasi/lembaga', component: React.lazy(() => import('../views/Pages/Publikasi/lembaga/Lembaga'))},
  // { path: '/sekolah/tahun-ajaran', component:React.lazy(() => import ('../views/Pages/Sekolah/tahunAjar/tahunAjar'))},
  { path: '/sekolah/mata-pelajaran', component:React.lazy(() => import ('../views/pages/sekolah/MataPelajaran'))},
  { path: '/sekolah/jam-belajar', component:React.lazy(() => import ('../views/pages/sekolah/JamBelajar'))},
  { path: '/sekolah/jadwal-belajar', component:React.lazy(() => import ('../views/pages/sekolah/JadwalBelajar'))},
  { path: '/sekolah/jadwal-libur', component:React.lazy(() => import ('../views/pages/sekolah/JadwalLibur'))},
  // { path: '/sekolah/absen-siswa', component:React.lazy(() => import ('../views/Pages/Sekolah/absenSiswa/absenSiswa'))},
  // { path: '/sekolah/koleksi', component:React.lazy(() => import ('../views/Pages/Sekolah/koleksi/koleksiSekolah'))},
  // { path: '/sekolah/peminjam-koleksi', component:React.lazy(() => import ('../views/Pages/Sekolah/peminjamKoleksi/peminjamKoleksi'))},
  // { path: '/sekolah/kode-unik', component:React.lazy(() => import ('../views/Pages/Sekolah/kodeUnik/kodeUnik'))},
  // { path: '/sekolah/pengadaan', component:React.lazy(() => import ('../views/Pages/Sekolah/pengadaan/daftarPengadaan'))},
  // { path: '/sekolah/jurusan', component:React.lazy(() => import ('../views/Pages/Sekolah/Jurusan/jurusanSekolah'))},
  // { path: '/sekolah/posting-aktifitas', component:React.lazy(() => import ('../views/Pages/Sekolah/postingAktifitas/postingAktifitas'))}

];

export default routes;
