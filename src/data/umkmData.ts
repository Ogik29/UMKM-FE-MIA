export interface UMKM {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  address: string;
  image: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const umkmData: UMKM[] = [
  {
    id: 1,
    name: "Kopi Nusantara",
    description: "Kedai kopi dengan biji kopi pilihan dari berbagai daerah Indonesia.",
    fullDescription: "Kopi Nusantara adalah kedai kopi yang menyajikan berbagai pilihan kopi premium dari seluruh nusantara. Kami berkomitmen untuk mendukung petani kopi lokal dan menghadirkan pengalaman minum kopi yang autentik. Dengan interior yang nyaman dan barista berpengalaman, kami siap melayani para pecinta kopi.",
    address: "Jl. Sudirman No. 45, Jakarta Pusat, DKI Jakarta 10210",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNzA4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNzA4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&h=500",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&h=500",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500"
    ],
    coordinates: { lat: -6.2088, lng: 106.8456 }
  },
  {
    id: 2,
    name: "Roti Manis Bahagia",
    description: "Toko roti dengan berbagai varian roti dan kue tradisional.",
    fullDescription: "Roti Manis Bahagia adalah toko roti keluarga yang telah berdiri sejak 1995. Kami menyajikan berbagai jenis roti dan kue tradisional yang dibuat dengan resep turun-temurun. Setiap produk dibuat fresh setiap hari dengan bahan-bahan berkualitas tinggi.",
    address: "Jl. Malioboro No. 123, Yogyakarta, DIY 55271",
    image: "https://images.unsplash.com/photo-1731399295775-45dc1fc7e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBzdG9yZXxlbnwxfHx8fDE3NjA4MDA5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1731399295775-45dc1fc7e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBzdG9yZXxlbnwxfHx8fDE3NjA4MDA5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=500",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=500",
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&h=500",
      "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?w=500&h=500",
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&h=500"
    ],
    coordinates: { lat: -7.7956, lng: 110.3695 }
  },
  {
    id: 3,
    name: "Warung Makan Sederhana",
    description: "Menyajikan masakan tradisional Indonesia dengan cita rasa rumahan.",
    fullDescription: "Warung Makan Sederhana menghadirkan berbagai menu masakan tradisional Indonesia dengan cita rasa yang autentik. Kami menggunakan bumbu-bumbu pilihan dan resep tradisional untuk menghasilkan masakan yang lezat dan menggugah selera. Tempat yang nyaman dan harga yang terjangkau menjadi keunggulan kami.",
    address: "Jl. Gatot Subroto No. 78, Bandung, Jawa Barat 40262",
    image: "https://images.unsplash.com/photo-1658853576968-af88b03cc314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvb2QlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MDgwMDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1658853576968-af88b03cc314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvb2QlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MDgwMDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=500&h=500",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&h=500",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500"
    ],
    coordinates: { lat: -6.9175, lng: 107.6191 }
  },
  {
    id: 4,
    name: "Kerajinan Tangan Etnik",
    description: "Pusat kerajinan tangan dengan produk unik dan berkualitas.",
    fullDescription: "Kerajinan Tangan Etnik adalah toko yang menjual berbagai produk kerajinan tangan khas Indonesia. Mulai dari tas anyaman, aksesoris, hingga dekorasi rumah. Semua produk dibuat oleh pengrajin lokal dengan kualitas terbaik. Kami berkomitmen untuk melestarikan budaya dan memberdayakan pengrajin lokal.",
    address: "Jl. Ubud Raya No. 56, Gianyar, Bali 80571",
    image: "https://images.unsplash.com/photo-1625557195787-bd7b61666f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kaWNyYWZ0JTIwc3RvcmV8ZW58MXx8fHwxNzYwODAwOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1625557195787-bd7b61666f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kaWNyYWZ0JTIwc3RvcmV8ZW58MXx8fHwxNzYwODAwOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500",
      "https://images.unsplash.com/photo-1611923134239-e43656a61f20?w=500&h=500",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500",
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=500&h=500"
    ],
    coordinates: { lat: -8.5069, lng: 115.2625 }
  },
  {
    id: 5,
    name: "Butik Fashion Trendy",
    description: "Butik fashion dengan koleksi pakaian modern dan stylish.",
    fullDescription: "Butik Fashion Trendy menawarkan berbagai koleksi pakaian dan aksesoris fashion terkini. Kami menyediakan produk berkualitas dengan desain yang up-to-date mengikuti tren fashion nasional dan internasional. Dengan harga yang kompetitif dan pelayanan yang ramah, kami siap membantu Anda tampil percaya diri.",
    address: "Jl. Thamrin No. 34, Medan, Sumatera Utara 20111",
    image: "https://images.unsplash.com/photo-1570857502809-08184874388e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzYwNzcwNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1570857502809-08184874388e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzYwNzcwNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=500",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=500",
      "https://images.unsplash.com/photo-1558769132-cb1aea1f763c?w=500&h=500",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=500",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500"
    ],
    coordinates: { lat: 3.5952, lng: 98.6722 }
  },
  {
    id: 6,
    name: "Pasar Segar Pagi",
    description: "Pasar tradisional dengan aneka bahan makanan segar setiap hari.",
    fullDescription: "Pasar Segar Pagi adalah pasar tradisional yang menyediakan berbagai kebutuhan dapur Anda. Mulai dari sayur-sayuran segar, buah-buahan, daging, ikan, hingga bumbu dapur. Semua produk dijamin segar karena dipasok langsung dari petani dan peternak lokal setiap pagi. Harga yang terjangkau dan pelayanan yang ramah.",
    address: "Jl. Pasar Lama No. 12, Surabaya, Jawa Timur 60174",
    image: "https://images.unsplash.com/photo-1589470288084-ecad61835772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldHxlbnwxfHx8fDE3NjA4MDA5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1589470288084-ecad61835772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldHxlbnwxfHx8fDE3NjA4MDA5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&h=500",
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&h=500",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500",
      "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=500&h=500",
      "https://images.unsplash.com/photo-1594486583245-34f3bb47b305?w=500&h=500"
    ],
    coordinates: { lat: -7.2575, lng: 112.7521 }
  },
  {
    id: 7,
    name: "Gerobak Nasi Goreng Pak Budi",
    description: "Gerobak nasi goreng legendaris dengan rasa yang tak terlupakan.",
    fullDescription: "Gerobak Nasi Goreng Pak Budi telah menjadi legenda kuliner di kawasan ini selama lebih dari 20 tahun. Dengan bumbu rahasia dan teknik memasak yang telah teruji, nasi goreng kami selalu menjadi favorit pelanggan. Tersedia berbagai varian seperti nasi goreng spesial, seafood, dan kambing.",
    address: "Jl. Ahmad Yani (depan Terminal), Semarang, Jawa Tengah 50135",
    image: "https://images.unsplash.com/photo-1551033996-9cfddb3ffb1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kJTIwdmVuZG9yfGVufDF8fHx8MTc2MDczNDMxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1551033996-9cfddb3ffb1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kJTIwdmVuZG9yfGVufDF8fHx8MTc2MDczNDMxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=500",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=500",
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&h=500",
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=500"
    ],
    coordinates: { lat: -6.9666, lng: 110.4203 }
  },
  {
    id: 8,
    name: "Toko Elektronik Maju Jaya",
    description: "Toko elektronik dengan berbagai perangkat dan aksesoris terlengkap.",
    fullDescription: "Toko Elektronik Maju Jaya menyediakan berbagai perangkat elektronik dari brand ternama dengan harga kompetitif. Mulai dari gadget, komputer, peralatan rumah tangga, hingga aksesoris elektronik. Kami juga menyediakan layanan after-sales dan garansi resmi untuk semua produk.",
    address: "Jl. Basuki Rahmat No. 89, Malang, Jawa Timur 65112",
    image: "https://images.unsplash.com/photo-1651449815993-706eaa7a936a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc2hvcHxlbnwxfHx8fDE3NjA3NzcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1651449815993-706eaa7a936a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc2hvcHxlbnwxfHx8fDE3NjA3NzcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500",
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=500&h=500",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=500",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500"
    ],
    coordinates: { lat: -7.9797, lng: 112.6304 }
  },
  {
    id: 9,
    name: "Kafe Santai Sore",
    description: "Kafe dengan suasana outdoor yang nyaman untuk bersantai.",
    fullDescription: "Kafe Santai Sore menghadirkan konsep cafe outdoor dengan view yang indah dan suasana yang asri. Menu kami mencakup berbagai minuman kopi, teh, mocktail, serta makanan ringan dan berat. Tempat yang sempurna untuk bersantai bersama keluarga atau teman sambil menikmati sunset.",
    address: "Jl. Pantai Kuta No. 67, Badung, Bali 80361",
    image: "https://images.unsplash.com/photo-1695677561323-2ebcb47432af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwdGVycmFjZXxlbnwxfHx8fDE3NjA4MDA5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1695677561323-2ebcb47432af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwdGVycmFjZXxlbnwxfHx8fDE3NjA4MDA5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=500",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=500",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&h=500",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&h=500",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=500"
    ],
    coordinates: { lat: -8.7184, lng: 115.1686 }
  },
  {
    id: 10,
    name: "Workshop Furniture Kayu",
    description: "Bengkel furniture custom dengan desain unik dan berkualitas.",
    fullDescription: "Workshop Furniture Kayu adalah bengkel pembuatan furniture custom dari kayu solid pilihan. Kami menerima pesanan berbagai jenis furniture seperti meja, kursi, lemari, dan dekorasi rumah lainnya. Setiap produk dibuat dengan detail dan finishing yang rapi oleh para pengrajin berpengalaman.",
    address: "Jl. Industri Raya No. 23, Tangerang, Banten 15138",
    image: "https://images.unsplash.com/photo-1500472141701-084e6fa44840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYwODAwOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1500472141701-084e6fa44840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYwODAwOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=500&h=500",
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500",
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&h=500",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&h=500",
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?w=500&h=500"
    ],
    coordinates: { lat: -6.1783, lng: 106.6319 }
  }
];
