"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, 
  Database, 
  Cpu, 
  Smartphone, 
  ExternalLink, 
  Mail, 
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  LayoutDashboard
} from 'lucide-react';

const dict = {
  id: {
    nav: { about: "Tentang Kami", services: "Layanan", portfolio: "Portofolio", workflow: "Cara Kerja", cta: "Mulai Proyek" },
    hero: {
      badge: "From Zero to Hero.",
      title1: "Arsitektur ",
      titleHighlight: "Perangkat Lunak",
      title2: " Skala Enterprise.",
      desc: "Kami merekayasa sistem kustom, antarmuka memukau, dan ekosistem IoT cerdas untuk mendorong batas inovasi bisnis Anda.",
      cta1: "Konsultasi Gratis",
      cta2: "Eksplorasi Portofolio"
    },
    about: {
      badge: "Kisah Kami",
      title1: "Lahir dari Visi, ",
      titleHighlight: "Berkembang",
      title2: " untuk Masa Depan.",
      desc1: "Bluegenc lahir dari sebuah visi besar di kawasan Pancoran, Jakarta Selatan. Berawal dari pemikiran inovatif seorang mahasiswa magang asal Lampung yang melihat celah dalam efisiensi operasional B2B.",
      desc2: "Kini, ide sederhana tersebut telah berkembang pesat menjadi arsitektur solusi digital berskala enterprise. Perjalanan kami adalah bukti nyata bahwa inovasi besar seringkali bermula dari keberanian untuk menantang status quo, menggabungkan semangat muda dengan keahlian teknis tingkat tinggi untuk mentransformasi ekosistem bisnis."
    },
    services: {
      title: "Ekosistem Layanan",
      desc: "Desain Bento-Grid. Modular, skalabel, dan disesuaikan untuk mengatasi masalah teknis paling kompleks.",
      s1_title: "Pengembangan Sistem Khusus",
      s1_desc: "Resolusi masalah operasional B2B, ERP, arsitektur database terpusat, dan integrasi API yang solid.",
      s1_tag1: "Sistem ERP",
      s1_tag2: "Integrasi API",
      s2_title: "Pembuatan Website",
      s2_desc: "Performa tinggi (fast-loading) dan desain UI/UX modern berbasis konversi.",
      s3_title: "Solusi IoT Pintar",
      s3_desc: "Integrasi hardware, dasbor real-time, dan telemetri robotika udara tingkat lanjut.",
      s4_title: "Aplikasi Mobile Enterprise",
      s4_desc: "Akses, kontrol, dan monitoring sistem operasional secara langsung di dalam genggaman, mendukung iOS & Android.",
      s4_cta: "Minta Demo"
    },
    portfolio: {
      title: "Karya & Studi Kasus",
      visit: "Kunjungi Platform"
    },
    workflow: {
      title: "Metodologi Eksekusi",
      steps: ["Riset & Audit", "PRD Dasar", "Prototyping Cepat", "Pengembangan", "Peluncuran"]
    },
    contact: {
      title1: "Mulai Kolaborasi ",
      titleHighlight: "Hari Ini.",
      desc: "Jangan biarkan kompetitor mendahului Anda. Diskusikan arsitektur teknis Anda bersama kami.",
      direct: "Email Langsung",
      formTitle: "Informasi Proyek",
      name: "Nama Lengkap",
      email: "Email Perusahaan",
      message: "Ceritakan detail proyek...",
      send: "Kirim Pesan"
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Bluegenc. Hak cipta dilindungi.`
    }
  },
  en: {
    nav: { about: "About Us", services: "Services", portfolio: "Portfolio", workflow: "Workflow", cta: "Start Project" },
    hero: {
      badge: "From Zero to Hero.",
      title1: "Enterprise-Scale ",
      titleHighlight: "Software",
      title2: " Architecture.",
      desc: "We engineer custom systems, stunning interfaces, and smart IoT ecosystems to push the boundaries of your business innovation.",
      cta1: "Free Consultation",
      cta2: "Explore Portfolio"
    },
    about: {
      badge: "Our Story",
      title1: "Born from Vision, ",
      titleHighlight: "Evolving",
      title2: " for the Future.",
      desc1: "Bluegenc was born from a grand vision in the heart of Pancoran, South Jakarta. Originating as the innovative brainchild of an ambitious intern from Lampung who identified a critical gap in B2B operational efficiency.",
      desc2: "Today, this simple idea has rapidly evolved into an enterprise-scale digital solution architecture. Our journey is a testament to the fact that great innovation often begins with the courage to challenge the status quo, combining youthful drive with high-level technical expertise to transform business ecosystems."
    },
    services: {
      title: "Service Ecosystem",
      desc: "Bento-Grid Design. Modular, scalable, and tailored to solve the most complex technical problems.",
      s1_title: "Custom System Development",
      s1_desc: "Resolution of B2B operational issues, ERP, centralized database architecture, and solid API integration.",
      s1_tag1: "ERP Systems",
      s1_tag2: "API Integration",
      s2_title: "Website Development",
      s2_desc: "High performance (fast-loading) and modern conversion-based UI/UX design.",
      s3_title: "Smart IoT Solutions",
      s3_desc: "Hardware integration, real-time dashboards, and advanced aerial robotics telemetry.",
      s4_title: "Enterprise Mobile Apps",
      s4_desc: "Access, control, and monitoring of operational systems directly in the palm of your hand, supporting iOS & Android.",
      s4_cta: "Request Demo"
    },
    portfolio: {
      title: "Work & Case Studies",
      visit: "Visit Platform"
    },
    workflow: {
      title: "Execution Methodology",
      steps: ["Research & Audit", "Base PRD", "Rapid Prototyping", "Development", "Deployment"]
    },
    contact: {
      title1: "Start Collaborating ",
      titleHighlight: "Today.",
      desc: "Don't let competitors get ahead of you. Discuss your technical architecture with us.",
      direct: "Direct Email",
      formTitle: "Project Information",
      name: "Full Name",
      email: "Company Email",
      message: "Tell us about your project...",
      send: "Send Message"
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Bluegenc. All rights reserved.`
    }
  }
};

const portfolioDataTranslations = {
  id: [
    { id: 1, title: "AeroSuoh", desc: "Platform pariwisata pintar dan dasbor pemantauan geotermal masa depan untuk kawasan Suoh.", tags: ["Web Dev", "Dashboard"], demo: "https://aero-suoh.vercel.app/", image: "/aerosuoh.png" },
    { id: 2, title: "Sertifikat Generator", desc: "Aplikasi web berbasis Client-Side murni untuk membuat dan mengunduh ratusan sertifikat secara otomatis.", tags: ["Web Dev", "Auto-Generate"], demo: "https://sertifikat-generator-hima-informati.vercel.app/", image: "/sertifikat-generator.png" },
    { id: 3, title: "TeknoCom", desc: "Platform informasi berbasis web kompetisi International dibidang IT.", tags: ["Web Dev", "Informasi"], demo: "https://teknocom.teknokrat.ac.id/", image: "/teknocom.png" },
    { id: 4, title: "Cv-Builder", desc: "Web app ringan untuk membuat CV secara cepat dengan ekspor PDF.", tags: ["Web App", "Generator"], demo: "https://cv-builder-by-hy.vercel.app/", image: "/cv-builder.png" },
    { id: 5, title: "Transparansi Skor", desc: "Platform digital pantau keaktifan anggota organisasi real-time.", tags: ["Web Dev", "Real-time"], demo: "https://app.himaif.web.id/", image: "/transparansi-skor.png" }
  ],
  en: [
    { id: 1, title: "AeroSuoh", desc: "Smart tourism platform and future geothermal monitoring dashboard for the Suoh area.", tags: ["Web Dev", "Dashboard"], demo: "https://aero-suoh.vercel.app/", image: "/aerosuoh.png" },
    { id: 2, title: "Certificate Generator", desc: "Pure Client-Side web application to automatically create and download hundreds of certificates.", tags: ["Web Dev", "Auto-Generate"], demo: "https://sertifikat-generator-hima-informati.vercel.app/", image: "/sertifikat-generator.png" },
    { id: 3, title: "TeknoCom", desc: "Web-based information platform for IT International competitions.", tags: ["Web Dev", "Information"], demo: "https://teknocom.teknokrat.ac.id/", image: "/teknocom.png" },
    { id: 4, title: "Cv-Builder", desc: "Lightweight web app to quickly create CVs with real-time preview and PDF export.", tags: ["Web App", "Generator"], demo: "https://cv-builder-by-hy.vercel.app/", image: "/cv-builder.png" },
    { id: 5, title: "Score Transparency", desc: "Digital platform to monitor the activity and contribution of organization members in real-time.", tags: ["Web Dev", "Real-time"], demo: "https://app.himaif.web.id/", image: "/transparansi-skor.png" }
  ]
};

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const t = dict[lang];
  const portfolios = portfolioDataTranslations[lang];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500 selection:text-white bg-[#030b14] text-slate-100 overflow-x-hidden">
      
      {/* A. Floating Glass Navigation & Independent Logo */}
      <div className="fixed top-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 transition-all duration-300 pointer-events-none flex justify-between items-center">
        
        {/* Independent Logo at Top Left */}
        <Link href="/" className="cursor-pointer pointer-events-auto shrink-0">
          <Image 
            src="/logoBluegenc2.png" 
            alt="Bluegenc Logo" 
            width={400} 
            height={100} 
            className="h-24 md:h-36 w-auto object-contain origin-left hover:scale-[1.05] transition-transform duration-300 ease-out" 
            priority 
          />
        </Link>
        
        {/* Floating Nav Pill (Right Aligned) */}
        <header className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full shadow-2xl px-4 md:px-6 h-14 md:h-16 flex items-center gap-6 pointer-events-auto shrink-0">
          <nav className="hidden lg:flex gap-8 items-center font-medium text-slate-300">
            <Link href="#tentang" className="hover:text-white transition-colors duration-300">{t.nav.about}</Link>
            <Link href="#layanan" className="hover:text-white transition-colors duration-300">{t.nav.services}</Link>
            <Link href="#portofolio" className="hover:text-white transition-colors duration-300">{t.nav.portfolio}</Link>
            <Link href="#cara-kerja" className="hover:text-white transition-colors duration-300">{t.nav.workflow}</Link>
          </nav>

          <div className="flex items-center gap-3 lg:border-l lg:border-white/10 lg:pl-6">
            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 text-xs md:text-sm font-bold text-white transition-colors"
            >
              {lang.toUpperCase()}
            </button>
            <Link href="#kontak" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white rounded-full px-5 md:px-7 py-2 md:py-2.5 text-xs md:text-sm font-medium transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(11,132,235,0.4)] hover:shadow-[0_0_30px_rgba(11,132,235,0.6)]">
              {t.nav.cta}
            </Link>
          </div>
        </header>
      </div>

      <main>
        {/* B. Hero Section - 3D Dashboard Mockup & Neon Glows */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-[#030b14]">
          {/* Neon Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 w-[1000px] h-[500px] bg-brand-400/20 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-screen"></div>
          
          <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-4 mt-10">
            <div className="rounded-full bg-brand-900/50 backdrop-blur-md text-brand-300 border border-brand-500/30 px-6 py-2 text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(11,132,235,0.15)] inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" /> {t.hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-white mb-8 leading-[1.1] max-w-4xl">
              {t.hero.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-white">{t.hero.titleHighlight}</span>{t.hero.title2}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-14 font-light">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full mb-20">
              <Link href="#kontak" className="w-full sm:w-auto bg-white text-brand-900 rounded-full px-8 py-4 font-bold transition-all duration-300 ease-out shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1 text-center flex items-center justify-center gap-2 group">
                {t.hero.cta1} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#portofolio" className="w-full sm:w-auto text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 ease-out text-center hover:bg-white/10 border border-white/20 backdrop-blur-sm">
                {t.hero.cta2}
              </Link>
            </div>

            {/* 3D Dashboard Mockup Element */}
            <div className="w-full max-w-5xl mx-auto relative perspective-[2000px] mt-10">
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#0a1526]/80 backdrop-blur-2xl rounded-t-3xl border-x border-t border-white/10 shadow-[0_-20px_80px_rgba(11,132,235,0.2)] transform rotateX-[15deg] translate-y-10 flex flex-col overflow-hidden transition-transform duration-1000 hover:rotateX-[5deg]">
                 {/* fake browser header */}
                 <div className="h-12 border-b border-white/10 flex items-center px-6 gap-2 bg-white/5">
                   <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                   <div className="ml-4 h-5 w-48 bg-white/5 rounded-full"></div>
                 </div>
                 {/* fake content */}
                 <div className="flex-1 p-8 grid grid-cols-3 gap-6 relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#030b14] to-transparent z-10 translate-y-1/2"></div>
                   <div className="col-span-2 space-y-4 relative z-0">
                     <div className="h-8 bg-brand-500/20 rounded-lg w-1/3"></div>
                     <div className="h-32 bg-white/5 rounded-xl border border-white/5"></div>
                     <div className="h-32 bg-white/5 rounded-xl border border-white/5"></div>
                   </div>
                   <div className="space-y-4 relative z-0">
                     <div className="h-24 bg-brand-500/10 rounded-xl border border-brand-400/20"></div>
                     <div className="h-24 bg-brand-400/10 rounded-xl border border-brand-300/20"></div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </section>

        {/* B2. About Section - The Origin Story */}
        <section id="tentang" className="relative py-24 px-4 md:px-8 bg-[#030b14]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-screen"></div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10 border-t border-white/5 pt-20">
            {/* Left side text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-900/50 text-brand-300 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(11,132,235,0.15)]">
                <Sparkles className="w-4 h-4" /> {t.about.badge}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {t.about.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">{t.about.titleHighlight}</span><br/>{t.about.title2}
              </h2>
            </div>
            
            {/* Right side narrative */}
            <div className="flex-1 bg-[#0a1526]/80 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-brand-500/40 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-[80px] group-hover:bg-brand-500/30 transition-colors duration-700 pointer-events-none"></div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 relative z-10 font-medium">
                {t.about.desc1}
              </p>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed relative z-10">
                {t.about.desc2}
              </p>
            </div>
          </div>
        </section>

        {/* C. Services Section - Bento Box Grid */}
        <section id="layanan" className="relative py-32 px-4 md:px-8 bg-[#0a1526] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  {t.services.title}
                </h2>
                <p className="text-lg text-slate-400">
                  {t.services.desc}
                </p>
              </div>
            </div>
            
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
              
              {/* Large Main Feature (Bento 1) */}
              <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#0d1e36] to-[#050e1a] p-10 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden group hover:border-brand-500/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] group-hover:bg-brand-500/30 transition-colors duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 bg-brand-500/20 border border-brand-400/30 text-brand-400 rounded-2xl flex items-center justify-center mb-8">
                      <LayoutDashboard className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.services.s1_title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                      {t.services.s1_desc}
                    </p>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">{t.services.s1_tag1}</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">{t.services.s1_tag2}</span>
                  </div>
                </div>
              </div>

              {/* Bento 2 */}
              <div className="bg-[#0d1e36]/50 p-8 rounded-[2.5rem] border border-white/10 group hover:border-brand-500/50 transition-colors duration-500 flex flex-col justify-between">
                <div>
                  <Globe className="w-10 h-10 text-brand-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">{t.services.s2_title}</h3>
                  <p className="text-slate-400 text-sm">{t.services.s2_desc}</p>
                </div>
              </div>

              {/* Bento 3 */}
              <div className="bg-gradient-to-br from-brand-600 to-brand-900 p-8 rounded-[2.5rem] border border-brand-500/50 group hover:border-brand-400 transition-colors duration-500 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -right-4 -top-4 opacity-20">
                  <Cpu className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <Zap className="w-10 h-10 text-brand-200 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">{t.services.s3_title}</h3>
                  <p className="text-brand-100/70 text-sm">{t.services.s3_desc}</p>
                </div>
              </div>

              {/* Bento 4 (Wide Horizontal) */}
              <div className="md:col-span-3 bg-[#0d1e36]/50 p-8 md:p-10 rounded-[2.5rem] border border-white/10 group hover:border-brand-500/50 transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shrink-0">
                    <Smartphone className="w-10 h-10 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t.services.s4_title}</h3>
                    <p className="text-slate-400 max-w-xl">{t.services.s4_desc}</p>
                  </div>
                </div>
                <Link href="#kontak" className="shrink-0 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform">
                  {t.services.s4_cta}
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* D. Featured Portfolio Section - Sleek Dark Gallery */}
        <section id="portofolio" className="py-32 px-4 md:px-8 bg-[#030b14] relative border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {t.portfolio.title}
              </h2>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {portfolios.map((item, index) => (
                <article key={item.id} className="group relative rounded-[2.5rem] bg-[#0a1526] border border-white/10 overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(11,132,235,0.15)] hover:border-brand-500/40">
                  {/* Glowing Edge on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/10 group-hover:to-transparent transition-all duration-500 z-0"></div>
                  
                  {/* Image Area */}
                  <div className={`w-full bg-[#0d1e36] flex items-center justify-center relative overflow-hidden transition-colors duration-500 aspect-video z-10`}>
                    {(item as any).image ? (
                      <Image 
                        src={(item as any).image} 
                        alt={item.title} 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                      />
                    ) : (
                      <Code2 className="text-brand-900 w-16 h-16 group-hover:scale-110 group-hover:text-brand-700 transition-transform duration-700 ease-out relative z-10" />
                    )}
                    
                    {/* Inner Shadow overlay to blend with dark card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526] via-transparent to-transparent opacity-80 z-20 pointer-events-none"></div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="bg-brand-500/10 border border-brand-400/20 text-brand-300 text-xs px-3 py-1.5 rounded-lg font-semibold tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-bold text-2xl text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                      {item.desc}
                    </p>
                    
                    <Link 
                      href={item.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-300 font-bold text-sm flex items-center gap-2 transition-colors duration-300 w-fit"
                    >
                      {t.portfolio.visit} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* E. Workflow Section - Interactive Stepper Style */}
        <section id="cara-kerja" className="relative py-32 px-4 md:px-8 bg-[#0a1526]">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-20">
              {t.workflow.title}
            </h2>

            <div className="flex flex-col md:flex-row justify-between relative">
              {/* Dashed Connecting Line */}
              <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-600/50 via-brand-400 to-brand-600/50 border-t-2 border-dashed border-transparent z-0"></div>

              {t.workflow.steps.map((step, index) => (
                <div key={index} className="flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-4 group relative z-10 mb-8 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-[#030b14] border-2 border-white/10 flex items-center justify-center text-2xl font-black text-slate-600 group-hover:bg-brand-600 group-hover:border-brand-400 group-hover:text-white transition-all duration-500 shadow-[0_0_0_8px_rgba(10,21,38,1)]">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-lg text-slate-300 group-hover:text-white transition-colors duration-300">
                    {step}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F. Contact Section - Massive Gradient Glass Card */}
        <section id="kontak" className="bg-[#030b14] relative py-32 px-4 md:px-8">
          
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0d1e36] to-[#0a1526] rounded-[3rem] shadow-[0_30px_100px_-15px_rgba(11,132,235,0.2)] overflow-hidden flex flex-col lg:flex-row relative z-20 border border-white/10">
            
            {/* Left side text */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-screen pointer-events-none"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 relative z-10 leading-tight text-white">
                {t.contact.title1}<br/><span className="text-brand-400">{t.contact.titleHighlight}</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-14 relative z-10 text-lg">
                {t.contact.desc}
              </p>

              <div className="space-y-8 relative z-10 mt-auto">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-500">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-400 mb-1">{t.contact.direct}</div>
                    <a href="mailto:blueagencylampung@gmail.com" className="text-lg md:text-xl text-white font-bold hover:text-brand-300 transition-colors">blueagencylampung@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form (Glassy Dark) */}
            <div className="flex-1 bg-white/5 backdrop-blur-xl p-10 md:p-16 relative border-l border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">{t.contact.formTitle}</h3>
              <form className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    placeholder={t.contact.name}
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-white font-medium placeholder-slate-500"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder={t.contact.email}
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-white font-medium placeholder-slate-500"
                  />
                </div>

                <div>
                  <textarea 
                    rows={4}
                    placeholder={t.contact.message}
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-white font-medium placeholder-slate-500 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-300 ease-out shadow-[0_0_20px_rgba(11,132,235,0.3)] hover:shadow-[0_0_40px_rgba(11,132,235,0.5)] hover:-translate-y-1 mt-4 flex justify-center items-center gap-2 group"
                >
                  {t.contact.send} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      {/* F. Minimalist Dark Footer */}
      <footer className="py-12 bg-[#030b14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Footer */}
          <Image 
            src="/logoBluegenc2.png" 
            alt="Bluegenc Logo" 
            width={200} 
            height={80} 
            className="h-20 md:h-28 w-auto object-contain hover:scale-[1.05] transition-all duration-300 origin-center md:origin-left" 
          />
          
          {/* Socials & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://www.instagram.com/blueagencylampung/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-slate-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="text-sm font-medium">@blueagencylampung</span>
            </a>
            
            <p className="text-slate-500 text-sm font-medium text-center md:text-right">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
