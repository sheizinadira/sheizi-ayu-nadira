export type ProjectCategory = 'all' | 'environment' | 'pramuka' | 'media';

export interface PolaroidPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  projectTitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  year: string;
  story: string;
  rotationClass: string;
}

export interface ProjectChapter {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  numberLabel: string;
  meta: string;
  title: string;
  role: string;
  ribbonText: string;
  borderVariant: 'yellow' | 'white';
  photos: PolaroidPhoto[];
  highlights: string[];
}

export interface FocusPillar {
  id: string;
  code: string;
  badge: string;
  emoji: string;
  title: string;
  description: string;
  footerLeft: string;
  footerRight: string;
  borderVariant: 'yellow' | 'white';
}

export interface MilestoneMetric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  rotationClass: string;
  isText?: boolean;
}

export interface HonorBadge {
  id: string;
  meta: string;
  title: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  initials: string;
  author: string;
  organization: string;
  rotationClass: string;
}

export interface CollaborationService {
  id: string;
  emoji: string;
  title: string;
  description: string;
  bullets: string[];
  formOption: string;
}

export const HERO_PORTRAIT = {
  id: 'hero-portrait',
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuzdSPVEYz7Z1XhlX1xe7esQEiHY4PCPsv9kl51AOglivR44Iv4ezF2d2lKbHP9XIh7MAzXg34j-ykMTouTI6Qsfclf3ZZlafERx-w6Xccr_aWbLCyWipGGyerx-AfQMDMY_wHtBg-zIVtStxnzPc1dESqt2umiBuStw5Ax3Vy0LfggYLF1J8ierayNlNeIiNw8a4O9hvcFW1ujcWzxnA_gKfwt24QlUZMcBpqTPQ',
  alt: 'Potret Sheizi Ayu Nadira mengenakan seragam kepemimpinan pelajar formal',
  title: 'Sheizi Ayu Nadira',
  subtitle: 'SMAN 1 Sintang · Angkatan 2026',
  projectTitle: 'Profil Utama',
  year: '2026',
  story:
    'Siswi kelas XII SMAN 1 Sintang, Green Ambassador KLHK Batch II, dan Ketua Dewan Kehormatan Pramuka Penegak yang memadukan prestasi akademik dengan kepemimpinan komunitas.',
};

export const ABOUT_SPEECH_PHOTO = {
  id: 'about-speech',
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoAHzJuy99zo8iYE7AT2IFFm6VP9msxy1ATFJnlxeIJvXBk1kaWKHEq7T9oCXwFt3Um1zPqQo0a7ZXdn3eYAwNbwBFXkoutOax866LA2yHrY1nKN6rKRlLA6kcUK7QKhtPATU7Pjj7oKY4KZdLR1ZMw1UBX9Q9SmuUIJC3mErnLle6vBAh2ZZM8XPUyzxXo6TrqlaSSAmiEOgQvE9rNsMQxOdOMbhKFypl3Bxcrg8',
  alt: 'Sheizi menyampaikan pidato di podium Youth Environmental Assembly',
  title: 'Public Speaking di Youth Environmental Assembly',
  subtitle: 'Advokasi Pemuda & Lingkungan',
  projectTitle: 'Biografi & Kepemimpinan',
  year: '2024',
  story:
    'Berbicara di forum assembly lingkungan pemuda untuk mendorong aksi nyata pelajar Kalimantan Barat dalam menjaga kelestarian alam dan tata kelola sampah.',
};

export const ORG_TIMELINE = [
  {
    period: '2023 – 2026',
    role: 'Sekretaris & Green Ambassador',
    org: 'Green Youth Movement (KLHK RI)',
    accent: 'sunny',
  },
  {
    period: '2023 – Sekarang',
    role: 'Ketua Dewan Kehormatan & Garuda',
    org: 'Pramuka Penegak Sintang',
    accent: 'denim',
  },
  {
    period: '2024 – 2025',
    role: 'Ketua PIK-R Nexa Senentang',
    org: 'BKKBN / Pusat Informasi Konseling Remaja',
    accent: 'sunny',
  },
  {
    period: '2024 – 2025',
    role: 'Koordinator Data & Informasi',
    org: 'Forum GENRE Sintang',
    accent: 'denim',
  },
] as const;

export const COMPETENCIES = [
  {
    emoji: '👑',
    title: 'Kepemimpinan & Tata Kelola',
    description:
      'Manajemen kesekretariatan, koordinasi perkemahan, serta penegakan kode kehormatan organisasi.',
  },
  {
    emoji: '🎙️',
    title: 'Public Speaking & MC',
    description:
      'Master of Ceremony formal, narasumber siaran RRI Pro 2, serta moderator seminar nasional dan parenting.',
  },
  {
    emoji: '🎭',
    title: 'Seni Budaya & Kreatif',
    description:
      'Penari Tari Melayu tradisi, delegasi muhibah budaya Malaysia, dan kreator video edukasi.',
  },
] as const;

export const TOOLS_LIST = [
  {
    badge: 'C',
    badgeClass: 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white',
    name: 'Canva Graphic Design',
  },
  {
    badge: '✂',
    badgeClass: 'bg-slate-900 text-white',
    name: 'CapCut Video Editing',
  },
  {
    badge: 'G',
    badgeClass: 'bg-sunny-400 text-denim-950',
    name: 'Google Docs & Workspace',
  },
] as const;

export const FOCUS_PILLARS: FocusPillar[] = [
  {
    id: 'pillar-1',
    code: '01 · KLHK',
    badge: 'Green Ambassador',
    emoji: '🌿',
    title: 'Iklim & Lingkungan',
    description:
      'Edukasi lingkungan hidup, aksi penanaman pohon native, dan kampanye resiliensi iklim pemuda langsung di bawah binaan Kementerian LHK RI.',
    footerLeft: 'Mobilisasi Remaja',
    footerRight: 'Aksi Nyata',
    borderVariant: 'yellow',
  },
  {
    id: 'pillar-2',
    code: '02 · GENRE',
    badge: 'Ketua PIK-R',
    emoji: '🤝',
    title: 'Advokasi Remaja & Konseling',
    description:
      'Kesehatan reproduksi remaja, perencanaan masa depan, pencegahan stunting dini, dan pendampingan sebaya di sekolah serta forum GENRE Sintang.',
    footerLeft: 'Peer Counselor',
    footerRight: 'Roadshow',
    borderVariant: 'white',
  },
  {
    id: 'pillar-3',
    code: '03 · BUDAYA',
    badge: 'Pramuka Garuda',
    emoji: '⚜️',
    title: 'Kepanduan & Diplomasi',
    description:
      'Ketua Dewan Kehormatan penegak, memimpin disiplin 250+ pramuka, serta tampil sebagai penari Tari Melayu pada muhibah budaya ke Malaysia.',
    footerLeft: 'Delegasi Malaysia',
    footerRight: 'Tari Melayu',
    borderVariant: 'yellow',
  },
  {
    id: 'pillar-4',
    code: '04 · MEDIA',
    badge: 'Radio & Event MC',
    emoji: '🎙️',
    title: 'Public Speaking & Host',
    description:
      'Narasumber siaran RRI Pro 2, Master of Ceremony formal di institusi pendidikan, moderator bedah buku, dan video creator juara 3 PIK-R.',
    footerLeft: 'Siaran RRI Pro 2',
    footerRight: 'Panggung Formal',
    borderVariant: 'white',
  },
];

export const MILESTONE_METRICS: MilestoneMetric[] = [
  {
    id: 'm-gpa',
    value: '89.95',
    label: 'Rata-Rata GPA',
    sublabel: 'Semester 1–5',
    rotationClass: 'rotate-1',
  },
  {
    id: 'm-rank',
    value: '#1',
    label: 'Juara Paralel',
    sublabel: 'Konsisten Kelas X–XII',
    rotationClass: '-rotate-1',
  },
  {
    id: 'm-it',
    value: '700',
    label: 'Olimpiade IT',
    sublabel: 'Tingkat Nasional',
    rotationClass: 'rotate-2',
  },
  {
    id: 'm-youth',
    value: '600+',
    label: 'Remaja Terjangkau',
    sublabel: 'Edukasi & Lingkungan',
    rotationClass: '-rotate-2',
  },
  {
    id: 'm-scout',
    value: '250+',
    label: 'Pramuka Dipimpin',
    sublabel: 'Ketua Dewan Kehormatan',
    rotationClass: 'rotate-1',
  },
  {
    id: 'm-my',
    value: 'Malaysia',
    label: 'Delegasi Budaya',
    sublabel: 'Muhibah Antarbangsa',
    rotationClass: '-rotate-1',
    isText: true,
  },
];

export const HONOR_BADGES: HonorBadge[] = [
  {
    id: 'h-1',
    meta: '2025 · Honor & Merit',
    title: 'Pramuka Garuda & Bintang Tahunan II',
  },
  {
    id: 'h-2',
    meta: '2024 · Penghargaan Nasional',
    title: 'Terbaik II Putri Green Youth Movement KLHK',
  },
  {
    id: 'h-3',
    meta: '2025 · Kompetisi Media',
    title: 'Juara 3 Video Edukasi PIK-R Kalbar',
  },
];

export const PROJECT_CHAPTERS: ProjectChapter[] = [
  {
    id: 'project-01',
    category: 'environment',
    numberLabel: 'PROJECT 01',
    meta: 'KLHK RI · 2023–2026',
    title: 'Green Youth Movement & Penanaman Pohon',
    role: 'Peran: Sekretaris & Green Ambassador Nasional Angkatan II',
    ribbonText: '★ DILANTIK KEMENTERIAN LHK RI ★',
    borderVariant: 'yellow',
    photos: [
      {
        id: 'p1-1',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABAcGNzWThYEd7yJqJ60hu3uK9aT93JrhFtS_DLkBiWGosC3l1JmjUI0JZXp_9NhBEzqKBUu1WJ-2iJsHu5gzevQOD4FUzs56pUq3LtZ23gkD7G1uMDFv6uLutlmsWnahmCr3ia7g4jqXwcFB7L4owMDOIsv8rVRPPj39JuWWriMEMfIN4qK4-khJmqlekbDpvikukdyHUpJVoWeA0GorQJZjMQeUgzo6VB0gYtUo',
        alt: 'Kegiatan penanaman bibit pohon bersama komunitas pemuda di Sintang',
        title: 'Aksi Tanam 300 Bibit',
        subtitle: 'Penghijauan Sintang',
        projectTitle: 'Green Youth Movement KLHK',
        category: 'environment',
        year: '2024',
        story: 'Menggerakkan pelajar dan komunitas pemuda di Sintang dalam aksi penanaman 300 bibit pohon lokal untuk menjaga serapan air dan penghijauan kota.',
        rotationClass: '-rotate-2',
      },
      {
        id: 'p1-2',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGkeyYtYH3kLGiZUJkiLp2Q3y1Gvata2qW3kchvP1xcBvCrG9_2iPDOROM4KlFlmdnNj2Z15CGl-buu4--KTwF4TU1B2RNu9ZgHPhybYW08fq7THV9cDylyG8Aq73dSilmTx9Qhw6eD9bCgjx6RYhMJbi_2y0nIfOgaX8Q5iRT8zXzwPvwuCk7rlHwLh3kIMADkWplzeetAl5isXAnLzUJIP7aytvFnKEQAbqevE',
        alt: 'Sesi diskusi dan lokakarya eko-literasi bersama pelajar',
        title: 'Workshop Eko-Literasi',
        subtitle: '120+ Pelajar SMP & SMA',
        projectTitle: 'Green Youth Movement KLHK',
        category: 'environment',
        year: '2024',
        story: 'Memfasilitasi lokakarya pemilahan sampah dan kesadaran iklim untuk lebih dari 120 pelajar SMP dan SMA di Kabupaten Sintang.',
        rotationClass: 'rotate-2',
      },
      {
        id: 'p1-3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyecO0aHu4GHH2SEBrN_lz6DqXuIKpTM47Ic-78UsgRy_Qb0nS1r9RU9CS201B2Cha0o5FzLhtjP2z24aUtfllIup0tdNItDYlwe5ELdA6axwrb8X3EfDRplAgakfC04-rmBcROWYQLsPvO2GxIaNbL3ICdvXKkCwCfG_4GfWBdwuOzFf4-3gAhJcPZ9cNGpW0CFa3Auj7-ppoWiv2CUknhbaAxr5l7-f-2cPVivc',
        alt: 'Momen inagurasi nasional Green Ambassador KLHK',
        title: 'Inagurasi Nasional',
        subtitle: 'Penobatan Green Ambassador',
        projectTitle: 'Green Youth Movement KLHK',
        category: 'environment',
        year: '2024',
        story: 'Penobatan sebagai Terbaik II Putri Green Youth Movement KLHK Batch II dan pelantikan resmi sebagai Green Ambassador.',
        rotationClass: '-rotate-1',
      },
      {
        id: 'p1-4',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATwLnXQpv5KDX5uuHd-ug9XnFP99YZOx6NNI7vOv1DWQ30M68SwLGpTTUqVY54s4bDAj0D2mKcAc_Wvxjz2_Dsyf3EumzzhWEzE0cUuaZMkk5lbmapjlRJLO729qeyUn3MLA6tWMMdYPGUhrePRlIfb__5dd_xtUj_14poQMUgzPBdhi5QZ9t1k4XqQ_b0KHA7aKKZeugWrgAbMPujGVlTzRtLHBm6A18E4WziaoI',
        alt: 'Kampanye bersih sungai dan konservasi air di Sungai Kapuas',
        title: 'Bersih Sungai Kapuas',
        subtitle: 'Kolaborasi Lintas Pelajar',
        projectTitle: 'Green Youth Movement KLHK',
        category: 'environment',
        year: '2025',
        story: 'Aksi bersih tepian Sungai Kapuas bersama jaringan lintas pelajar dan relawan muda untuk mengurangi sampah plastik aliran sungai.',
        rotationClass: 'rotate-3',
      },
    ],
    highlights: [
      'Menulis bulletin bulanan aksi lingkungan untuk diseminasi regional Kalbar.',
      'Memimpin pemilahan sampah organik & non-organik di 4 kecamatan.',
      'Membina 45 kader muda Pelopor Hijau untuk keberlanjutan program.',
    ],
  },
  {
    id: 'project-02',
    category: 'pramuka',
    numberLabel: 'PROJECT 02',
    meta: 'PRAMUKA PENEGAK · 2023–2025',
    title: 'Pramuka Garuda & Muhibah Budaya Malaysia',
    role: 'Peran: Ketua Dewan Kehormatan · Pramuka Garuda · Penari Tradisional Melayu',
    ribbonText: '★ DELEGASI KE MALAYSIA 2025 ★',
    borderVariant: 'white',
    photos: [
      {
        id: 'p2-1',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-i9_8eMF_vU3qiBxzQ4jaMKzC6YiUp5s50gWl3EIPHN3Ds9hCw-IT9UtRQOJoIigd0iksyyycJqGOMIF8etcbWifG45NDxlkxvnSB7lHkLIsQtlIOEISmgqfGHvLdNfi8zpGD09nZStQq5R4L3RP6JDkmSHD5iumQ0TT1W4MaXA4GoRB_DD7MisbV1bC7pq1JyRuKEaMM4lHb-pukchgdi1QADigxAaa4cnwJt0s',
        alt: 'Penampilan tari tradisional Melayu pada Festival Wisata Bukit Kelam',
        title: 'Tari Tradisional Melayu',
        subtitle: 'Festival Wisata Bukit Kelam',
        projectTitle: 'Pramuka Garuda & Budaya',
        category: 'pramuka',
        year: '2024',
        story: 'Menampilkan tarian Melayu khas Kalimantan Barat di Festival Wisata Bukit Kelam sebagai wujud pelestarian seni budaya daerah.',
        rotationClass: 'rotate-2',
      },
      {
        id: 'p2-2',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxvlahsrCckvj0SkVSnjr2Mztur-FbNabXAtEFU6g2y5TSTxpa2HkgnXI6X2Ago7o0DDYTd_oFb8LnnDYbZlAq-Dle2Iyxint_wUJlHE7w0uKXPfMQMp_NX04ItPeAgDho2_7jdqBMizUO3ISagabyh1PxUX-uyDCh7BECzNi6wRLIlmB36S5FGvlm3WrD_Y95q9OPNtCHovqKvvvTfyG7A3J5JyeAc0IFkEKE_jc',
        alt: 'Upacara api unggun dan koordinasi perkemahan 250+ penegak',
        title: 'Perkemahan 250+ Penegak',
        subtitle: 'Koordinasi Api Unggun & Adat',
        projectTitle: 'Pramuka Garuda & Budaya',
        category: 'pramuka',
        year: '2024',
        story: 'Mengkoordinasikan tata tertib adat dan upacara api unggun perkemahan bagi lebih dari 250 anggota Pramuka Penegak.',
        rotationClass: '-rotate-2',
      },
      {
        id: 'p2-3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5WXIGAvUtdmgwVNiTSVL3VOeZro2E_9njkx9Q9zZeOn9WU9-WAZLIdAO-O1aezuyDC4sHXnVqhltN1f6tm-r5kRrIbPKHeSI_ER7JJ3HDssztFGcftgLUrablJ2LOjcgACsjtmMd3_4yLBnn8MqT8ml0rFaN23JQeXctGpcAtDKaRGDuXELqaMSG-veMcfPMRrKwKAoZL2Oq0Y-fA9HBLoxRf_m6WLOC5Ne-TEgc',
        alt: 'Delegasi pertukaran budaya Indonesia dan Malaysia berfoto dengan bendera',
        title: 'Pertukaran Budaya',
        subtitle: 'Muhibah Indonesia - Malaysia',
        projectTitle: 'Pramuka Garuda & Budaya',
        category: 'pramuka',
        year: '2025',
        story: 'Mewakili Indonesia dalam agenda muhibah budaya antarbangsa ke Malaysia melalui diplomasi seni tari dan persahabatan kepanduan.',
        rotationClass: 'rotate-1',
      },
      {
        id: 'p2-4',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgZlGaKTpKws6HFESKeLEBiUW-pusrulJbny_PPf5byPUEh2vqOB5aayKbO7Vw8trVrb5mDRcRDlenoh40rqJnsgDx2a49td3gyRTXJ0zgINRYSHi0paXT9KDlgN3SAySxj8gFjXp2Kri45tewpJuiEWvQm9kr12QEXqqZDqkhvkwkjVNuexssIOepyaAtKxssdZ_4cb1ziJJ3kqFHkCGmH8FnW1fO0FJw3jClbkM',
        alt: 'Upacara penyematan lencana Pramuka Garuda dan Bintang Tahunan II',
        title: 'Pelantikan Garuda',
        subtitle: 'Bintang Tahunan II',
        projectTitle: 'Pramuka Garuda & Budaya',
        category: 'pramuka',
        year: '2025',
        story: 'Menerima penyematan tanda kecakapan tertinggi Pramuka Garuda Golongan Penegak serta penghargaan Bintang Tahunan II.',
        rotationClass: '-rotate-3',
      },
    ],
    highlights: [
      'Menegakkan sidang kode kehormatan untuk 250+ pramuka penegak.',
      'Duta pertunjukan seni tradisional Kalimantan Barat di forum antarbangsa.',
      'Lulus uji kecakapan tertinggi survival kepanduan dan bakti masyarakat.',
    ],
  },
  {
    id: 'project-03',
    category: 'media',
    numberLabel: 'PROJECT 03',
    meta: 'MEDIA ADVOKASI & MC · 2024–2025',
    title: 'GENRE, PIK-R & Siaran Radio RRI Pro 2',
    role: 'Peran: Ketua PIK-R · Master of Ceremony Formal · Pembicara Siaran Radio',
    ribbonText: '★ SIARAN LANGSUNG RRI PRO 2 ★',
    borderVariant: 'yellow',
    photos: [
      {
        id: 'p3-1',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmzIURYXA9zLai_21bsAXxa7LdfVlc7rGtrauyTWPiIpfAZAK0gERZ_He1Vj86dXq7io4vWB378YRSBvfKtHrUh2eHgiWtJf8C03BtDfsRfacjF6eQav6fcvspmrSEJuVicgrueDKTr902sOtAd4aMY76Oy3BoAokC72-BzMJGr4e7IvGOYmHs0EOGl1btntDsZzrdfy6PD4kbaN065RwZhWJx9rWWSbXDGIrjfJU',
        alt: 'Berbicara langsung di studio siaran Radio Republik Indonesia Pro 2',
        title: 'Siaran RRI Pro 2',
        subtitle: 'Dialog Gaya Hidup Sehat',
        projectTitle: 'GENRE, PIK-R & Media',
        category: 'media',
        year: '2024',
        story: 'Menjadi narasumber dialog interaktif RRI Pro 2 membahas kesehatan mental, gizi seimbang, dan peran remaja bebas stunting.',
        rotationClass: '-rotate-1',
      },
      {
        id: 'p3-2',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKD0Yx5rrWzRYYFQOzIH2rVs_t_Wse10kIjoT3VtQJZO-rWQiPIZFMlMNRhafoeSkjG39jxMPcKXMWIgP5EQFUQz8K1C0ghPcTsz7C3KPUPcrVnb7FVQR8UOSej8tG-aaouHLauPBRSQV8usg2DCi7-_FjpFqfX2KvCkaYGoXRHjWGF7kTq-i251FxnAb1BRk-jjXgkqn4BC5xRxCkxnDV_WBnyLyg8GLuW_HBnc0',
        alt: 'Memandu panggung Seminar Parenting Genza Education Regional',
        title: 'MC Seminar Parenting',
        subtitle: 'Genza Education Regional',
        projectTitle: 'GENRE, PIK-R & Media',
        category: 'media',
        year: '2024',
        story: 'Bertugas sebagai Master of Ceremony pada Seminar Parenting regional yang dihadiri ratusan orang tua siswa dan pendidik.',
        rotationClass: 'rotate-2',
      },
      {
        id: 'p3-3',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBvU8E_1FquFMPBZ2hyUdfKlt6Xmf6PcnGDUJpzFgdrcOwFXhFO0iVRb-fCEy90-RmhtRwTR1b9mINlK-9qVxBwF6BkAAMZPcUmJHUm17jyOtsmNQvTOQMGsTznulUNxvJo-_GBaKI1bv31ei7BWZHvqGNexpxbQbGUd1D3jY7ewpqrk6dQs_vF5Zk-OOjfdyn_K7mmdU5GE2pdwd1VCMOTAg_Rs1rBpYDQeR0K04',
        alt: 'Sesi kunjungan dan workshop sebaya inklusif di SLBN 25 Sintang',
        title: 'Kunjungan SLBN 25',
        subtitle: 'Lingkar Empati Inklusif',
        projectTitle: 'GENRE, PIK-R & Media',
        category: 'media',
        year: '2025',
        story: 'Menginisiasi program Lingkar Empati Inklusif bersama teman-teman PIK-R untuk berbagi keceriaan dan edukasi kreatif di SLBN 25 Sintang.',
        rotationClass: '-rotate-2',
      },
      {
        id: 'p3-4',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJeYtbXawrLr57Q3CQwR1pjPzID089EcKQuq2pqq5hlgpunxx9dvpdrwp4HG13L3mVtvj1OdpxjfapMEj8S2fMHJ4Pm5lk54NoG9XhT9p2nIJVsrSHapARbjhpihCQyo3ntkw6WlRgtFbpnRGfhUJIqKUZtaiW0OEl6uOm5uow70PPRw8qAvk3EYN9DQMhzuLxpF-UsuJqwa3N9EvsyX8rHoouZLRuG7JP0TbcCbE',
        alt: 'Sesi produksi tim kreatif video edukasi PIK-R',
        title: 'Juara Video PIK-R',
        subtitle: 'Video Edukasi Stunting',
        projectTitle: 'GENRE, PIK-R & Media',
        category: 'media',
        year: '2025',
        story: 'Meraih Juara 3 lomba video edukasi PIK-R Kalimantan Barat dengan kampanye kreatif pencegahan stunting sejak usia remaja.',
        rotationClass: 'rotate-1',
      },
    ],
    highlights: [
      'Membahas kesehatan mental dan nutrisi remaja secara live on-air.',
      'Mengelola database dan laporan kepemudaan PIK-R di 14 kecamatan.',
      'Memandu panggung wisuda formal dan diskusi panel interaktif.',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      'Sheizi menunjukkan ketenangan panggung, ketelitian administrasi, dan antusiasme luar biasa selama Green Youth Movement KLHK. Jiwa kepemimpinannya berakar pada empati nyata.',
    initials: 'KL',
    author: 'Mentor GYM Regional',
    organization: 'Kementerian LHK RI',
    rotationClass: '-rotate-1',
  },
  {
    id: 't-2',
    quote:
      'Sebagai Pramuka Garuda dan Ketua Dewan Kehormatan, integritas moral serta wibawa Sheizi memimpin 250+ penegak menjadi panutan teladan bagi generasi muda di Kabupaten Sintang.',
    initials: 'GP',
    author: 'Pembina Pramuka Senior',
    organization: 'Gudep Pandawa SMAN 1 Sintang',
    rotationClass: 'rotate-1',
  },
  {
    id: 't-3',
    quote:
      'Memandu seminar bersama Sheizi selalu menyenangkan. Sheizi sangat peka dengan dinamika audiens, cekatan beradaptasi dengan protokol, dan menjaga atmosfer panggung tetap hidup.',
    initials: 'GE',
    author: 'Koordinator Program',
    organization: 'Genza Education Kalimantan Barat',
    rotationClass: '-rotate-1',
  },
];

export const COLLABORATION_SERVICES: CollaborationService[] = [
  {
    id: 'col-mc',
    emoji: '🎤',
    title: 'MC & Moderator Diskusi',
    description:
      'Hosting profesional untuk seremoni pemerintahan, seminar pendidikan, wisuda sekolah, talkshow pemuda, dan bedah buku dengan artikulasi terstruktur.',
    bullets: [
      'Penyusunan cue card & gladi rundown acara',
      'Penyesuaian tone formal kenegaraan maupun santai remaja',
      'Pengelolaan tanya-jawab panelis interaktif',
    ],
    formOption: 'Master of Ceremony (MC) / Moderator Diskusi',
  },
  {
    id: 'col-speaker',
    emoji: '🌱',
    title: 'Narasumber & Peer Educator',
    description:
      'Sesi workshop interaktif kepemimpinan pemuda, advokasi lingkungan hidup (KLHK), serta edukasi kesehatan reproduksi remaja (PIK-R/GENRE).',
    bullets: [
      'Materi presentasi Canva dinamis & games seru',
      'Komunikasi sebaya (peer-to-peer) yang dekat & relevan',
      'Rencana aksi nyata untuk diimplementasikan di sekolah',
    ],
    formOption: 'Narasumber Workshop / Peer Education PIK-R',
  },
  {
    id: 'col-event',
    emoji: '📋',
    title: 'Event Management & Sekretariat',
    description:
      'Manajemen floor teknis, persuratan resmi, struktur database peserta kegiatan, dan koordinasi protokoler perkemahan kepanduan.',
    bullets: [
      'Rundown terukur dan pemetaan logistik lapangan',
      'Dokumentasi administratif dan pelaporan kegiatan',
      'Pendampingan gladi resik dan koordinasi seksi acara',
    ],
    formOption: 'Aksi Pelestarian Lingkungan & Penanaman',
  },
  {
    id: 'col-creative',
    emoji: '🎨',
    title: 'Media Kreatif & Seni Budaya',
    description:
      'Produksi video edukasi pendek (CapCut), desain materi publikasi Canva, dan penampilan tari tradisional Melayu untuk pagelaran budaya.',
    bullets: [
      'Editing video kampanye sosial media remaja',
      'Pertunjukan tari tradisional Melayu Kalimantan Barat',
      'Infografis & poster edukasi bertema lingkungan',
    ],
    formOption: 'Pramuka Garuda & Penampilan Tari Tradisional',
  },
];

export const FORM_COLLABORATION_OPTIONS = [
  'Master of Ceremony (MC) / Moderator Diskusi',
  'Narasumber Workshop / Peer Education PIK-R',
  'Aksi Pelestarian Lingkungan & Penanaman',
  'Pramuka Garuda & Penampilan Tari Tradisional',
  'Kolaborasi Kreatif / Agenda Lainnya',
];
