import { FormEvent, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Expand,
  Mail,
  Menu,
  MessageCircle,
  Send,
  X,
} from 'lucide-react';
import {
  ABOUT_SPEECH_PHOTO,
  COLLABORATION_SERVICES,
  COMPETENCIES,
  FOCUS_PILLARS,
  FORM_COLLABORATION_OPTIONS,
  HERO_PORTRAIT,
  HONOR_BADGES,
  MILESTONE_METRICS,
  ORG_TIMELINE,
  PROJECT_CHAPTERS,
  ProjectCategory,
  TESTIMONIALS,
  TOOLS_LIST,
} from './data/portfolioData';
import { LightboxItem, LightboxModal } from './components/LightboxModal';
import { ScrapbookImage } from './components/ScrapbookImage';
import { SewingButton } from './components/SewingButton';

const FILTER_OPTIONS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'environment', label: 'Environment (KLHK)' },
  { id: 'pramuka', label: 'Pramuka & Culture' },
  { id: 'media', label: 'Media & Public Speaking' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>('all');
  const [activeLightbox, setActiveLightbox] = useState<LightboxItem | null>(null);

  // Contact form state
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [collaborationType, setCollaborationType] = useState(FORM_COLLABORATION_OPTIONS[0]);
  const [messageBody, setMessageBody] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState<{
    name: string;
    contact: string;
    type: string;
  } | null>(null);

  const visibleChapters = useMemo(() => {
    if (projectFilter === 'all') return PROJECT_CHAPTERS;
    return PROJECT_CHAPTERS.filter((ch) => ch.category === projectFilter);
  }, [projectFilter]);

  // Flat list of gallery photos for Next/Prev navigation in lightbox
  const allGalleryPhotos: LightboxItem[] = useMemo(() => {
    return visibleChapters.flatMap((chapter) => chapter.photos);
  }, [visibleChapters]);

  const currentGalleryIndex = useMemo(() => {
    if (!activeLightbox) return -1;
    return allGalleryPhotos.findIndex((p) => p.id === activeLightbox.id);
  }, [activeLightbox, allGalleryPhotos]);

  const handlePrevPhoto = () => {
    if (currentGalleryIndex === -1 || allGalleryPhotos.length === 0) return;
    const prevIdx =
      (currentGalleryIndex - 1 + allGalleryPhotos.length) % allGalleryPhotos.length;
    setActiveLightbox(allGalleryPhotos[prevIdx]);
  };

  const handleNextPhoto = () => {
    if (currentGalleryIndex === -1 || allGalleryPhotos.length === 0) return;
    const nextIdx = (currentGalleryIndex + 1) % allGalleryPhotos.length;
    setActiveLightbox(allGalleryPhotos[nextIdx]);
  };

  const handleSelectCollaboration = (formOption: string) => {
    setCollaborationType(formOption);
    setSubmittedSummary(null);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderContact.trim() || !messageBody.trim()) return;
    setSubmittedSummary({
      name: senderName.trim(),
      contact: senderContact.trim(),
      type: collaborationType,
    });
    setSenderName('');
    setSenderContact('');
    setMessageBody('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* TOP SKY & CLOUD BANNER */}
      <header className="relative bg-gradient-to-b from-[#60a8f7] via-[#85bdfa] to-[#d6ebff] pt-4 pb-10 overflow-hidden border-b-4 border-white">
        {/* Fluffy Clouds & Stars */}
        <div
          className="absolute -top-6 -left-10 w-44 h-24 bg-white rounded-full blur-[1px] opacity-80 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-2 left-20 w-36 h-16 bg-white/90 rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-16 w-56 h-28 bg-white rounded-full opacity-85 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-6 right-36 w-32 h-16 bg-white/70 rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="hidden sm:inline-block absolute top-4 left-1/4 text-sunny-400 text-2xl drop-shadow select-none"
          aria-hidden="true"
        >
          ★
        </span>
        <span
          className="hidden sm:inline-block absolute top-10 right-1/3 text-white text-xl drop-shadow select-none"
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="hidden sm:inline-block absolute top-3 right-12 text-sunny-400 text-3xl drop-shadow select-none"
          aria-hidden="true"
        >
          ★
        </span>

        {/* 3-Zone Top Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-950 rounded-full pr-2"
          >
            <span className="w-11 h-11 rounded-full bg-sunny-400 border-4 border-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform text-xl">
              🐥
            </span>
            <span className="font-bubble text-xl sm:text-2xl font-bold text-denim-950 tracking-tight">
              Sheizi Ayu Nadira
            </span>
          </a>

          {/* Zone 2: Concise Single-Line Nav Links */}
          <nav
            aria-label="Navigasi utama"
            className="hidden lg:flex items-center gap-6 text-sm font-bubble font-bold text-denim-950"
          >
            <a
              href="#about"
              className="whitespace-nowrap shrink-0 hover:text-denim-700 hover:underline underline-offset-4 decoration-2 transition-colors"
            >
              About Me
            </a>
            <a
              href="#focus"
              className="whitespace-nowrap shrink-0 hover:text-denim-700 hover:underline underline-offset-4 decoration-2 transition-colors"
            >
              Focus Pillars
            </a>
            <a
              href="#milestones"
              className="whitespace-nowrap shrink-0 hover:text-denim-700 hover:underline underline-offset-4 decoration-2 transition-colors"
            >
              Milestones
            </a>
            <a
              href="#projects"
              className="whitespace-nowrap shrink-0 hover:text-denim-700 hover:underline underline-offset-4 decoration-2 transition-colors"
            >
              Fieldwork
            </a>
            <a
              href="#collaborate"
              className="whitespace-nowrap shrink-0 hover:text-denim-700 hover:underline underline-offset-4 decoration-2 transition-colors"
            >
              Collaborate
            </a>
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-sunny-400 text-denim-950 border-2 border-denim-950 font-bubble text-xs sm:text-sm font-bold shadow-[0_3px_0_#0f1c33] hover:translate-y-0.5 hover:shadow-none transition-all whitespace-nowrap shrink-0"
            >
              Let&apos;s Talk ✦
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="lg:hidden w-10 h-10 rounded-full bg-white text-denim-950 border-2 border-denim-950 flex items-center justify-center shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Navigasi seluler"
            className="lg:hidden max-w-7xl mx-auto px-4 pt-4 relative z-10"
          >
            <div className="bg-white/95 rounded-2xl border-2 border-denim-950 p-3 shadow-lg flex flex-wrap gap-2 justify-center">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#focus', label: 'Focus Pillars' },
                { href: '#milestones', label: 'Milestones' },
                { href: '#projects', label: 'Fieldwork' },
                { href: '#collaborate', label: 'Collaborate' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-full bg-notebook hover:bg-sunny-400 text-denim-950 border border-denim-900 font-bubble text-xs font-bold whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* YELLOW TORN PAPER SEPARATOR */}
      <div
        className="w-full h-8 bg-sunny-400 torn-paper-bottom -mt-2 z-20 relative shadow-md"
        aria-hidden="true"
      />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="hidden sm:inline-flex absolute top-8 left-8 rotate-12">
            <SewingButton />
          </div>
          <div className="hidden sm:inline-flex absolute bottom-12 right-10 scale-125 -rotate-12">
            <SewingButton />
          </div>
          <span
            className="hidden md:inline-block absolute top-20 right-1/3 text-sunny-400 text-4xl select-none"
            aria-hidden="true"
          >
            ★
          </span>
          <span
            className="hidden md:inline-block absolute bottom-28 left-12 text-sunny-300 text-3xl select-none"
            aria-hidden="true"
          >
            ✦
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Bubble Typography & Scrapbook Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunny-400 text-denim-950 font-bubble text-xs font-bold uppercase tracking-wider border-2 border-white shadow-[0_4px_0_rgba(0,0,0,0.25)]">
                <span aria-hidden="true">★</span>
                <span>Portfolio &amp; Fieldwork Presentation</span>
                <span aria-hidden="true">★</span>
              </div>

              <div className="space-y-1">
                <h1 className="bubble-title text-4xl sm:text-6xl lg:text-7xl font-bold text-denim-800 leading-[1.05] tracking-tight">
                  SHEIZI AYU
                </h1>
                <div className="bubble-title-yellow text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
                  NADIRA
                </div>
                <p className="font-bubble text-white text-lg sm:text-2xl font-bold tracking-wide pt-2 flex flex-wrap items-center gap-2">
                  <span className="bg-sunny-400 text-denim-950 px-3 py-0.5 rounded-lg border-2 border-white text-sm sm:text-base whitespace-nowrap">
                    Student Leader
                  </span>
                  <span>✦ Green Ambassador ✦ Public Speaker</span>
                </p>
              </div>

              {/* Scrapbook Bio Note */}
              <div className="relative bg-white/95 text-denim-950 p-6 rounded-2xl border-4 border-sunny-400 shadow-2xl stitch-border-denim">
                <div
                  className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full border-2 border-sunny-400 flex items-center justify-center text-xl shadow-md"
                  aria-hidden="true"
                >
                  🎀
                </div>
                <p className="font-sans text-sm sm:text-base text-denim-900 leading-relaxed font-semibold">
                  Halo! Saya{' '}
                  <span className="bg-sunny-300 px-1.5 py-0.5 rounded font-extrabold text-denim-950">
                    Sheizi Ayu Nadira
                  </span>{' '}
                  — siswi berprestasi, Green Ambassador KLHK Batch II, dan Ketua Dewan
                  Kehormatan Pramuka Penegak dari Kalimantan Barat. Memadukan kepemimpinan akar
                  rumput, aksi pelestarian lingkungan, dan komunikasi publik yang menggerakkan.
                </p>

                <div className="mt-4 pt-3 border-t-2 border-dashed border-denim-900/20 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bubble font-bold text-denim-800">
                  <span>📍 Sintang, Kalbar</span>
                  <span aria-hidden="true">·</span>
                  <span>🌿 Green Ambassador KLHK</span>
                  <span aria-hidden="true">·</span>
                  <span>⚜️ Pramuka Garuda &apos;25</span>
                  <span aria-hidden="true">·</span>
                  <span>🎙️ MC &amp; Radio Speaker</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-7 py-3 rounded-full bg-sunny-400 text-denim-950 font-bubble font-bold text-base border-2 border-white shadow-[0_5px_0_#0f1c33] hover:translate-y-0.5 hover:shadow-none transition-all inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Explore Scrapbook</span>
                  <span aria-hidden="true">📂</span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-white text-denim-900 font-bubble font-bold text-base border-2 border-denim-950 shadow-[0_5px_0_rgba(0,0,0,0.3)] hover:bg-sunny-300 transition-all inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Collaboration Request</span>
                  <span aria-hidden="true">💌</span>
                </a>
              </div>
            </div>

            {/* Right Column: Handheld Console Polaroid Showcase */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div
                className="absolute -top-7 z-30 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <span className="text-4xl filter drop-shadow">🎀</span>
              </div>

              <div className="console-bezel w-full max-w-md p-4 sm:p-5 relative transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center justify-between px-2 mb-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-3.5 h-3.5 rounded-full bg-sunny-400 border border-white" />
                    <span className="w-3.5 h-3.5 rounded-full bg-red-400 border border-white" />
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-white" />
                  </div>
                  <div className="px-3 py-0.5 rounded-full bg-denim-950/60 text-[10px] font-bubble text-sunny-300 font-bold uppercase tracking-wider">
                    ✦ PRESENTASI PROFIL ✦
                  </div>
                  <div className="text-white text-xs font-mono font-bold tracking-tighter" aria-hidden="true">
                    ➕ ⚪ ⚪
                  </div>
                </div>

                <div className="bg-denim-950 rounded-2xl p-3 border-2 border-white/40 overflow-hidden relative">
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 px-2.5 h-6 bg-sunny-400 border-2 border-denim-950 rounded shadow-md flex items-center justify-center font-mono text-[9px] font-black text-denim-950"
                    aria-hidden="true"
                  >
                    📎 PIN
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveLightbox(HERO_PORTRAIT)}
                    className="polaroid-card mt-2 transform -rotate-1 w-full text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunny-400"
                    aria-label="Perbesar potret Sheizi Ayu Nadira"
                  >
                    <div className="aspect-[4/5] rounded bg-denim-900 overflow-hidden relative border border-slate-200">
                      <ScrapbookImage
                        src={HERO_PORTRAIT.src}
                        alt={HERO_PORTRAIT.alt}
                        fallbackLabel="Sheizi Ayu Nadira"
                        className="w-[1000px] h-full object-cover object-top"
                      />
                      <span className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 text-denim-950 border border-denim-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                        <Expand className="w-4 h-4" />
                      </span>
                      <div className="absolute bottom-2 left-2 right-2 bg-denim-950/85 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-center">
                        <span className="font-bubble text-xs text-sunny-300 font-bold block">
                          &ldquo;Berani memimpin, konsisten melayani.&rdquo;
                        </span>
                        <span className="text-[11px] text-slate-200 font-sans">
                          SMAN 1 Sintang · Angkatan 2026
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between px-1">
                      <span className="font-hand text-2xl font-bold text-denim-950">
                        Sheizi Ayu Nadira
                      </span>
                      <span className="font-bubble text-[11px] font-bold bg-sunny-400 text-denim-950 px-2 py-0.5 rounded border border-denim-950 shadow-sm tabular-nums">
                        GPA 89.95 / 100
                      </span>
                    </div>
                  </button>

                  <div className="mt-2 text-center">
                    <span className="font-bubble text-xs font-bold text-sunny-300 tracking-wider">
                      ★ INDONESIA DELEGATE &amp; PRAMUKA GARUDA ★
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JAGGED YELLOW TORN PAPER DIVIDER */}
        <div className="w-full relative my-4" aria-hidden="true">
          <div className="h-10 bg-sunny-400 torn-paper-bottom shadow-lg" />
        </div>

        {/* ABOUT ME SECTION: SPIRAL BINDER NOTEBOOK */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="spiral-notebook rounded-3xl p-6 sm:p-12 relative border-4 border-white shadow-2xl stitch-border-denim">
            {/* Spiral Wire Rings */}
            <div
              className="absolute -top-4 left-0 right-0 flex justify-around px-8 pointer-events-none"
              aria-hidden="true"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="spiral-wire" />
              ))}
            </div>

            <div className="text-center max-w-2xl mx-auto mb-12 pt-4">
              <div className="inline-block highlighter-tape px-6 py-1.5 rounded text-denim-950 font-bubble text-sm font-bold uppercase tracking-wider border border-denim-900">
                ★ LEMBAR BIOGRAFI &amp; TENTANG SHEIZI ★
              </div>
              <h2 className="bubble-title text-3xl sm:text-5xl font-bold text-denim-900 mt-3 text-balance">
                Driven by Purpose, Curious by Heart
              </h2>
              <p className="font-sans text-xs sm:text-sm text-denim-800 font-semibold mt-2">
                Dedikasi nyata di bidang kepemimpinan pelajar, pelestarian lingkungan, dan
                komunikasi publik.
              </p>
            </div>

            {/* Bio Content & Clipped Polaroid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-16 h-7 bg-sunny-400 border-2 border-denim-950 rounded shadow flex items-center justify-center font-bubble text-[10px] font-bold text-denim-950"
                    aria-hidden="true"
                  >
                    ★ PHOTO ★
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveLightbox(ABOUT_SPEECH_PHOTO)}
                    className="polaroid-card transform -rotate-2 hover:rotate-0 transition-transform border-2 border-sunny-400 w-full text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-900"
                    aria-label="Perbesar foto Public Speaking di Youth Environmental Assembly"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded bg-denim-900 border border-slate-200 relative">
                      <ScrapbookImage
                        src={ABOUT_SPEECH_PHOTO.src}
                        alt={ABOUT_SPEECH_PHOTO.alt}
                        fallbackLabel={ABOUT_SPEECH_PHOTO.title}
                      />
                      <span className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 text-denim-950 border border-denim-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                        <Expand className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="text-center pt-3 font-hand text-2xl font-bold text-denim-900">
                      {ABOUT_SPEECH_PHOTO.title}
                    </div>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 text-denim-950 font-sans">
                <div className="p-5 rounded-2xl bg-white/85 border-2 border-sunny-400 shadow-sm relative">
                  <span className="inline-block mb-2 px-3 py-0.5 bg-sunny-400 rounded-full text-[11px] font-bubble font-bold text-denim-950 border border-denim-950">
                    Akademik &amp; Organisasi
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed font-semibold text-slate-800">
                    Saya adalah siswi kelas XII SMAN 1 Sintang dengan rekam jejak akademik
                    konsisten sebagai{' '}
                    <strong className="bg-sunny-300 px-1.5 py-0.5 rounded text-denim-950 tabular-nums">
                      Juara 1 Paralel (Rata-rata 89.95/100)
                    </strong>
                    . Ruang belajar saya tidak hanya terbatas di dalam kelas, melainkan hadir nyata
                    bersama masyarakat dan generasi muda.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/85 border-2 border-sunny-400 shadow-sm relative">
                  <span className="inline-block mb-2 px-3 py-0.5 bg-sunny-400 rounded-full text-[11px] font-bubble font-bold text-denim-950 border border-denim-950">
                    KLHK &amp; Pramuka
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed font-semibold text-slate-800">
                    Dinobatkan sebagai{' '}
                    <strong className="text-denim-900 underline decoration-sunny-500 decoration-2">
                      Green Ambassador oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK)
                    </strong>{' '}
                    melalui program Green Youth Movement Batch II, serta memegang amanah sebagai
                    Ketua Dewan Kehormatan dan Pramuka Garuda Golongan Penegak di Sintang.
                  </p>
                </div>

                <blockquote className="p-4 rounded-xl bg-sunny-400/30 border-2 border-dashed border-sunny-500 font-hand text-2xl text-denim-950 font-bold text-center">
                  &ldquo;Mari ciptakan dampak bermakna bersama — melalui kata yang menggerakkan dan
                  karya yang menetap!&rdquo;
                </blockquote>
              </div>
            </div>

            {/* 3 Index Card Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t-2 border-dashed border-denim-900/30">
              {/* Column 1: Organization Timeline */}
              <div className="bg-white rounded-2xl p-5 border-2 border-denim-800 shadow-lg hover:-translate-y-1 transition-transform">
                <div className="highlighter-tape text-center py-1 rounded font-bubble text-xs font-bold text-denim-950 mb-4 border border-denim-950">
                  ★ PENGALAMAN ORGANISASI ★
                </div>
                <div className="space-y-4 text-xs font-sans">
                  {ORG_TIMELINE.map((item) => (
                    <div key={item.role} className="flex items-start gap-2.5">
                      <span
                        className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 border border-denim-950 ${
                          item.accent === 'sunny' ? 'bg-sunny-400' : 'bg-denim-700'
                        }`}
                        aria-hidden="true"
                      />
                      <div>
                        <span
                          className={`font-bubble font-bold block text-[11px] tabular-nums ${
                            item.accent === 'sunny' ? 'text-sunny-600' : 'text-denim-700'
                          }`}
                        >
                          {item.period}
                        </span>
                        <h3 className="font-bubble text-sm font-bold text-denim-950">
                          {item.role}
                        </h3>
                        <p className="text-slate-600 font-medium">{item.org}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Competencies */}
              <div className="bg-white rounded-2xl p-5 border-2 border-denim-800 shadow-lg hover:-translate-y-1 transition-transform">
                <div className="highlighter-tape text-center py-1 rounded font-bubble text-xs font-bold text-denim-950 mb-4 border border-denim-950">
                  ★ KOMPETENSI UTAMA ★
                </div>
                <div className="space-y-4 text-xs font-sans">
                  {COMPETENCIES.map((comp) => (
                    <div key={comp.title}>
                      <h3 className="font-bubble text-sm font-bold text-denim-950 flex items-center gap-1.5">
                        <span aria-hidden="true">{comp.emoji}</span>
                        <span>{comp.title}</span>
                      </h3>
                      <p className="text-slate-600 font-medium mt-0.5 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Education & Tools */}
              <div className="bg-white rounded-2xl p-5 border-2 border-denim-800 shadow-lg hover:-translate-y-1 transition-transform flex flex-col justify-between">
                <div>
                  <div className="highlighter-tape text-center py-1 rounded font-bubble text-xs font-bold text-denim-950 mb-3 border border-denim-950">
                    ★ ALAT &amp; PENDIDIKAN ★
                  </div>
                  <div className="p-3 bg-sunny-400/20 rounded-xl border border-sunny-500 mb-3 text-xs">
                    <span className="font-bubble font-bold text-denim-950 block">
                      SMAN 1 SINTANG (2023–2026)
                    </span>
                    <p className="text-slate-700 font-medium mt-0.5 tabular-nums">
                      Kurikulum Merdeka · Nilai Rapor 89.95 / 100
                    </p>
                    <span className="font-bubble font-bold text-denim-900 bg-sunny-400 px-2 py-0.5 rounded text-[11px] mt-1.5 inline-block">
                      Peringkat 1 Paralel (Sem 1–5)
                    </span>
                  </div>

                  <div className="space-y-2">
                    {TOOLS_LIST.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <span
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold font-bubble shrink-0 ${tool.badgeClass}`}
                          aria-hidden="true"
                        >
                          {tool.badge}
                        </span>
                        <span className="font-bubble text-xs font-bold text-slate-800">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center font-hand text-xl font-bold text-denim-800 mt-3 pt-2 border-t border-dashed border-slate-300">
                  Siap berkolaborasi &amp; berkarya! ★
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY ADVOCACY PILLARS */}
        <section id="focus" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sunny-400 text-denim-950 font-bubble text-xs font-bold uppercase border-2 border-white shadow">
              ★ 4 PILAR FOKUS UTAMA ★
            </div>
            <h2 className="bubble-title-yellow text-3xl sm:text-5xl font-bold mt-3 text-balance">
              MY FOCUS &amp; ROLES
            </h2>
            <p className="font-bubble text-white text-sm sm:text-base font-bold mt-2">
              Menghubungkan dialog pemuda, kepedulian lingkungan, dan nilai kebudayaan lokal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOCUS_PILLARS.map((pillar) => {
              const isYellow = pillar.borderVariant === 'yellow';
              return (
                <article
                  key={pillar.id}
                  className={`bg-denim-800 text-white rounded-3xl p-6 border-4 shadow-2xl relative hover:-translate-y-2 transition-transform flex flex-col justify-between ${
                    isYellow ? 'border-sunny-400' : 'border-white'
                  }`}
                >
                  <div
                    className={`absolute -top-3.5 left-6 px-3 py-0.5 rounded font-bubble text-xs font-bold uppercase border border-denim-950 ${
                      isYellow ? 'bg-sunny-400 text-denim-950' : 'bg-white text-denim-950'
                    }`}
                  >
                    {pillar.code}
                  </div>

                  <div>
                    <div className="pt-2 flex items-center justify-between mb-4">
                      <span className="text-4xl" aria-hidden="true">
                        {pillar.emoji}
                      </span>
                      <span
                        className={`font-bubble text-[11px] px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap ${
                          isYellow ? 'bg-white text-denim-950' : 'bg-sunny-400 text-denim-950'
                        }`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-bubble text-xl font-bold text-sunny-300 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/20 font-bubble text-xs text-sunny-400 font-bold flex items-center justify-between gap-2">
                    <span>{pillar.footerLeft}</span>
                    <span>✦ {pillar.footerRight}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* BILLBOARD MILESTONES & METRICS */}
        <section id="milestones" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-[#8ab9f1] via-[#bcdbff] to-[#e4f1ff] p-6 sm:p-10 rounded-3xl border-4 border-white shadow-2xl relative overflow-hidden">
            <div
              className="absolute top-2 right-4 w-32 h-16 bg-white rounded-full opacity-80 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-2 left-6 w-40 h-20 bg-white rounded-full opacity-70 pointer-events-none"
              aria-hidden="true"
            />

            <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
              <span className="font-bubble text-xs font-bold bg-denim-900 text-sunny-300 px-4 py-1 rounded-full uppercase tracking-wider inline-block border-2 border-white shadow">
                ★ BILLBOARD PRESTASI &amp; DAMPAK ★
              </span>
              <h2 className="bubble-title text-3xl sm:text-5xl font-bold text-denim-950 mt-3 text-balance">
                Milestones &amp; Metrics
              </h2>
            </div>

            {/* 6 Metric Notes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
              {MILESTONE_METRICS.map((metric) => (
                <div
                  key={metric.id}
                  className={`bg-white p-4 rounded-2xl border-2 border-denim-900 text-center shadow-lg transform hover:rotate-0 transition-transform ${metric.rotationClass}`}
                >
                  <span
                    className={`font-bubble font-bold text-sunny-500 block tabular-nums ${
                      metric.isText
                        ? 'text-2xl sm:text-3xl leading-tight mt-1'
                        : 'text-3xl sm:text-4xl'
                    }`}
                  >
                    {metric.value}
                  </span>
                  <span className="font-bubble text-xs font-bold text-denim-950 uppercase block mt-1">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-slate-600 font-semibold block mt-0.5">
                    {metric.sublabel}
                  </span>
                </div>
              ))}
            </div>

            {/* 3 Honor Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 relative z-10">
              {HONOR_BADGES.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-white/95 p-4 rounded-xl border-2 border-denim-900 flex items-center gap-3 shadow-sm"
                >
                  <span
                    className="w-10 h-10 rounded-full bg-sunny-400 text-denim-950 font-bubble font-bold flex items-center justify-center text-lg border border-denim-950 shrink-0"
                    aria-hidden="true"
                  >
                    ★
                  </span>
                  <div>
                    <span className="font-bubble text-xs font-bold text-slate-600 block">
                      {badge.meta}
                    </span>
                    <h3 className="font-bubble text-sm font-bold text-denim-950">{badge.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SCRAPBOOK */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunny-400 text-denim-950 font-bubble text-xs font-bold uppercase border-2 border-white shadow">
              ★ DOKUMENTASI AKSI LAPANGAN ★
            </div>
            <h2 className="bubble-title-yellow text-3xl sm:text-5xl font-bold mt-3 text-balance">
              Featured Projects Scrapbook
            </h2>
            <p className="font-bubble text-white text-sm sm:text-base font-bold mt-2">
              Galeri kegiatan riil dari Sintang hingga panggung nasional Kementerian LHK RI. Klik
              foto polaroid mana saja untuk melihat detail cerita.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter proyek lapangan"
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {FILTER_OPTIONS.map((opt) => {
              const active = projectFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setProjectFilter(opt.id)}
                  className={`px-4 py-2 rounded-full font-bubble text-xs sm:text-sm font-bold border-2 transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-sunny-400 text-denim-950 border-white shadow-[0_3px_0_#0f1c33]'
                      : 'bg-denim-900 text-slate-200 border-white/30 hover:border-sunny-400 hover:text-sunny-300'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Project Chapters */}
          <div className="space-y-16">
            {visibleChapters.map((chapter) => {
              const isYellow = chapter.borderVariant === 'yellow';
              return (
                <article
                  key={chapter.id}
                  className={`bg-denim-900/95 rounded-3xl p-6 sm:p-10 border-4 shadow-2xl relative ${
                    isYellow
                      ? 'border-sunny-400 stitch-border-white'
                      : 'border-white stitch-border-yellow'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-dashed border-white/20">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5 text-xs font-bubble">
                        <span
                          className={`px-3 py-0.5 rounded-full font-bold ${
                            isYellow
                              ? 'bg-sunny-400 text-denim-950'
                              : 'bg-white text-denim-950'
                          }`}
                        >
                          {chapter.numberLabel}
                        </span>
                        <span className="text-slate-300 font-semibold">{chapter.meta}</span>
                      </div>
                      <h3
                        className={`bubble-title font-bold ${
                          chapter.id === 'project-01'
                            ? 'border-[#d6d6ab] text-[29px] leading-[42px] text-[#16668d]'
                            : chapter.id === 'project-02'
                              ? 'text-2xl sm:text-3xl text-[#2e3f75]'
                              : chapter.id === 'project-03'
                                ? 'text-2xl sm:text-3xl text-[#3b5792]'
                                : 'text-2xl sm:text-3xl text-white'
                        }`}
                      >
                        {chapter.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-sunny-200 mt-1 font-semibold">
                        {chapter.role}
                      </p>
                    </div>

                    <div className="highlighter-tape px-4 py-1.5 rounded font-bubble text-xs font-bold text-denim-950 self-start sm:self-auto border border-denim-950 whitespace-nowrap shrink-0">
                      {chapter.ribbonText}
                    </div>
                  </div>

                  {/* 4 Polaroid Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                    {chapter.photos.map((photo) => (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => setActiveLightbox(photo)}
                        className={`polaroid-card transform text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunny-400 ${photo.rotationClass}`}
                        aria-label={`Lihat detail foto ${photo.title}`}
                      >
                        <div className="aspect-square rounded overflow-hidden mb-2 bg-slate-100 border border-slate-200 relative">
                          <ScrapbookImage
                            src={photo.src}
                            alt={photo.alt}
                            fallbackLabel={photo.title}
                          />
                          <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 text-denim-950 border border-denim-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                            <Expand className="w-3.5 h-3.5" />
                          </span>
                        </div>
                        <p className="font-hand text-xl font-bold text-denim-950 text-center">
                          {photo.title}
                        </p>
                        <p className="text-[11px] text-slate-600 text-center font-bold">
                          {photo.subtitle}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Chapter Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 mt-4 border-t border-dashed border-white/20 text-xs font-sans font-semibold text-slate-200">
                    {chapter.highlights.map((hl) => (
                      <div key={hl} className="flex items-start gap-2">
                        <span className="text-sunny-400 font-bubble text-base leading-none" aria-hidden="true">
                          ★
                        </span>
                        <p>{hl}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* TESTIMONIALS / KIND WORDS FROM MENTORS */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunny-400 text-denim-950 font-bubble text-xs font-bold uppercase border-2 border-white shadow">
              ★ TESTIMONI &amp; APRESIASI ★
            </div>
            <h2 className="bubble-title-yellow text-3xl sm:text-5xl font-bold mt-3 text-balance">
              Kind Words From Mentors
            </h2>
            <p className="font-bubble text-white text-sm font-bold mt-2">
              Apresiasi dari pembina Green Youth Movement KLHK, Pramuka, dan Genza Education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className={`bg-white rounded-3xl p-6 border-2 border-denim-950 shadow-2xl flex flex-col justify-between transform hover:rotate-0 transition-transform ${item.rotationClass}`}
              >
                <div>
                  <div
                    className="text-sunny-500 font-bubble text-xl tracking-widest mb-3"
                    aria-label="5 dari 5 bintang"
                  >
                    ★★★★★
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-denim-950 leading-relaxed font-semibold italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t-2 border-dashed border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sunny-400 font-bubble font-bold text-denim-950 flex items-center justify-center text-sm border-2 border-denim-950 shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-bubble text-xs font-bold text-denim-950">{item.author}</h3>
                    <p className="text-[11px] text-slate-600 font-medium">{item.organization}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WAYS WE CAN COLLABORATE */}
        <section id="collaborate" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunny-400 text-denim-950 font-bubble text-xs font-bold uppercase border-2 border-white shadow">
              ★ TAWARAN KOLABORASI ★
            </div>
            <h2 className="bubble-title-yellow text-3xl sm:text-5xl font-bold mt-3 text-balance">
              Let&apos;s Make Meaningful Impact
            </h2>
            <p className="font-bubble text-white text-sm font-bold mt-2">
              Tersedia untuk pembawa acara (MC), narasumber workshop, aksi lingkungan, dan
              pertunjukan seni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COLLABORATION_SERVICES.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-3xl p-7 border-2 border-denim-950 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-12 h-12 rounded-2xl bg-sunny-400 border-2 border-denim-950 flex items-center justify-center text-2xl shadow"
                      aria-hidden="true"
                    >
                      {service.emoji}
                    </span>
                    <SewingButton className="scale-75" />
                  </div>

                  <h3 className="font-bubble text-2xl font-bold text-denim-950">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-xs text-slate-600 font-medium space-y-1.5 pt-2 border-t border-dashed border-slate-200">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="text-sunny-600 font-bold" aria-hidden="true">
                          ✦
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3">
                  <button
                    type="button"
                    onClick={() => handleSelectCollaboration(service.formOption)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sunny-400 hover:bg-sunny-300 text-denim-950 font-bubble text-xs font-bold border-2 border-denim-950 shadow-[0_3px_0_#0f1c33] hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Book / Inquire Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* JAGGED TORN YELLOW DIVIDER BEFORE FOOTER */}
      <div className="w-full relative mt-10" aria-hidden="true">
        <div className="h-10 bg-sunny-400 torn-paper-top shadow-inner" />
      </div>

      {/* FOOTER & CONTACT FORM */}
      <footer
        id="contact"
        className="bg-denim-950 text-white pt-14 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="hidden sm:inline-flex absolute top-8 right-12 rotate-12 scale-110">
          <SewingButton />
        </div>
        <span
          className="hidden sm:inline-block absolute bottom-12 left-10 text-sunny-400 text-4xl select-none"
          aria-hidden="true"
        >
          ★
        </span>
        <span
          className="hidden sm:inline-block absolute top-1/2 left-1/4 text-white text-2xl select-none"
          aria-hidden="true"
        >
          ✦
        </span>

        <div className="max-w-7xl mx-auto space-y-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Terimakasih! */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunny-400 text-denim-950 font-bubble text-xs font-bold uppercase border border-white">
                <span aria-hidden="true">★</span>
                <span>Start a Conversation</span>
              </div>

              <div className="space-y-1">
                <h2 className="bubble-title-yellow text-4xl sm:text-6xl font-bold">
                  Terimakasih!
                </h2>
                <p className="bubble-title text-2xl sm:text-4xl font-bold text-white">
                  Let&apos;s Bring Ideas to Life.
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 font-semibold leading-relaxed max-w-lg">
                Terbuka untuk undangan MC, kolaborasi program peduli lingkungan, kepanduan Pramuka,
                maupun sesi berbagi inspirasi pelajar. Mari berjejaring!
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="mailto:sheizinadira@gmail.com"
                  className="px-5 py-3 rounded-full bg-sunny-400 text-denim-950 font-bubble font-bold text-xs border-2 border-white shadow-[0_4px_0_#0f1c33] hover:translate-y-0.5 hover:shadow-none transition-all inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  <span>sheizinadira@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/6283874562176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white text-denim-950 font-bubble font-bold text-xs border-2 border-sunny-400 shadow-[0_4px_0_#0f1c33] hover:translate-y-0.5 hover:shadow-none transition-all inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="tabular-nums">+62 838-7456-2176</span>
                </a>
              </div>
            </div>

            {/* Right Side: Notepad Collaboration Form */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-sunny-400 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 highlighter-tape px-6 py-1 rounded font-bubble text-xs font-bold text-denim-950 border border-denim-950 whitespace-nowrap">
                  FORMULIR KOLABORASI
                </div>

                {submittedSummary ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 border-2 border-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-bubble text-2xl font-bold text-denim-950">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-sm text-slate-700 font-medium max-w-md mx-auto leading-relaxed">
                      Terima kasih, <strong>{submittedSummary.name}</strong>. Permintaan kolaborasi
                      untuk <strong>{submittedSummary.type}</strong> telah dicatat. Kami akan
                      menghubungi Anda melalui <strong>{submittedSummary.contact}</strong>.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSubmittedSummary(null)}
                        className="px-5 py-2.5 rounded-full bg-sunny-400 hover:bg-sunny-300 text-denim-950 font-bubble text-xs font-bold border-2 border-denim-950 shadow-[0_3px_0_#0f1c33] cursor-pointer"
                      >
                        Kirim Pesan Lainnya
                      </button>
                      <a
                        href={`mailto:sheizinadira@gmail.com?subject=${encodeURIComponent(
                          `Undangan Kolaborasi: ${submittedSummary.type}`
                        )}`}
                        className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-denim-950 font-bubble text-xs font-bold border-2 border-denim-950"
                      >
                        Buka di Aplikasi Email
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="font-bubble text-xl font-bold text-denim-950 mt-2 mb-1">
                      Kirim Pesan / Undangan
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mb-5">
                      Silakan isi formulir di bawah ini, saya akan merespons secepatnya.
                    </p>

                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="sender-name"
                            className="block font-bubble text-xs font-bold text-denim-950 uppercase mb-1"
                          >
                            Nama Anda / Lembaga
                          </label>
                          <input
                            id="sender-name"
                            type="text"
                            required
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="cth: Kak Amanda / Panitia Festival"
                            className="w-full text-xs font-medium rounded-xl border-2 border-slate-300 focus:border-sunny-500 focus:outline-none p-2.5 text-slate-900"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="sender-contact"
                            className="block font-bubble text-xs font-bold text-denim-950 uppercase mb-1"
                          >
                            Email / WhatsApp
                          </label>
                          <input
                            id="sender-contact"
                            type="text"
                            required
                            value={senderContact}
                            onChange={(e) => setSenderContact(e.target.value)}
                            placeholder="kontak@email.com / 08..."
                            className="w-full text-xs font-medium rounded-xl border-2 border-slate-300 focus:border-sunny-500 focus:outline-none p-2.5 text-slate-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="collab-type"
                          className="block font-bubble text-xs font-bold text-denim-950 uppercase mb-1"
                        >
                          Jenis Kolaborasi
                        </label>
                        <select
                          id="collab-type"
                          value={collaborationType}
                          onChange={(e) => setCollaborationType(e.target.value)}
                          className="w-full text-xs font-medium rounded-xl border-2 border-slate-300 focus:border-sunny-500 focus:outline-none p-2.5 text-slate-900 bg-white"
                        >
                          {FORM_COLLABORATION_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message-body"
                          className="block font-bubble text-xs font-bold text-denim-950 uppercase mb-1"
                        >
                          Detail Kegiatan &amp; Tanggal
                        </label>
                        <textarea
                          id="message-body"
                          rows={3}
                          required
                          value={messageBody}
                          onChange={(e) => setMessageBody(e.target.value)}
                          placeholder="Tuliskan sekilas konsep acara, tanggal pelaksanaan, dan lokasi..."
                          className="w-full text-xs font-medium rounded-xl border-2 border-slate-300 focus:border-sunny-500 focus:outline-none p-2.5 text-slate-900"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full bg-sunny-400 hover:bg-sunny-500 text-denim-950 font-bubble text-sm font-bold border-2 border-denim-950 shadow-[0_4px_0_#0f1c33] hover:translate-y-0.5 hover:shadow-none transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan Kolaborasi ★</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Copyright & Back to Top */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-bubble text-slate-300 gap-4">
            <div>© 2023–2026 Sheizi Ayu Nadira · SMAN 1 Sintang, Kalimantan Barat.</div>
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="hover:text-sunny-300 transition-colors font-bold inline-flex items-center gap-1 whitespace-nowrap"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
              <span className="font-hand text-2xl font-bold text-sunny-400">
                Sheizi Ayu Nadira
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* POLAROID LIGHTBOX MODAL */}
      <LightboxModal
        item={activeLightbox}
        onClose={() => setActiveLightbox(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        hasNavigation={currentGalleryIndex !== -1}
      />
    </div>
  );
}
