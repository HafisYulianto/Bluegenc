"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  LayoutDashboard,
  Menu,
  X
} from 'lucide-react';

const dict = {
  id: {
    nav: { about: "Tentang Kami", services: "Layanan", portfolio: "Portofolio", team: "Tim", workflow: "Cara Kerja", cta: "Mulai Proyek" },
    hero: {
      badge: "From Zero to Hero.",
      title1: "Bluegenc-",
      title2: "",
      titleHighlight: "Blue Agency",
      desc: "Blue Agency adalah mitra strategis Anda dalam transformasi digital. Kami merancang, mengembangkan, dan mengelola perangkat lunak skala enterprise, antarmuka yang elegan, serta ekosistem IoT terintegrasi.",
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
    partners: {
      title: "Telah Dipercaya Oleh Mitra Inovatif"
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
      title: "Project",
      visit: "Kunjungi Platform"
    },
    team: {
      title: "Tim Eksekutif",
      desc: "Inovator di balik arsitektur digital Bluegenc."
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
    nav: { about: "About Us", services: "Services", portfolio: "Portfolio", team: "Team", workflow: "Workflow", cta: "Start Project" },
    hero: {
      badge: "From Zero to Hero.",
      title1: "Enterprise-Scale ",
      titleHighlight: "Software",
      title2: " Architecture.",
      desc: "Blue Agency is your strategic partner in digital transformation. We design, develop, and manage enterprise-scale software, elegant interfaces, and fully integrated IoT ecosystems. From ideation to implementation, we deliver cutting-edge technology solutions tailored for scalability and the long-term growth of your business.",
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
    partners: {
      title: "Trusted By Innovative Partners"
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
      title: "Projects",
      visit: "Visit Platform"
    },
    team: {
      title: "Executive Team",
      desc: "The innovators behind Bluegenc's digital architecture."
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

const teamDataTranslations = {
  id: [
    { id: 1, name: "Hafis Yulianto", role: "Web Developer", image: "/hafis.JPG" },
    { id: 2, name: "M. Rizki Pratama", role: "Web Developer", image: "/rizkii.png" },
    { id: 3, name: "Naswa Novellia", role: "UI/UX Designer", image: "/naswa.png" },
    { id: 4, name: "Aditia Putra", role: "Web Developer", image: "/adit.png" },
    { id: 5, name: "Rifqi Wahid Dhohiri", role: "IoT Specialist", image: "/rifqii.jpeg" }
  ],
  en: [
    { id: 1, name: "Hafis Yulianto", role: "Web Developer", image: "/hafis.JPG" },
    { id: 2, name: "M. Rizki Pratama", role: "Web Developer", image: "/rizkii.png" },
    { id: 3, name: "Naswa Novellia", role: "UI/UX Designer", image: "/naswa.png" },
    { id: 4, name: "Aditia Putra", role: "Web Developer", image: "/adit.png" },
    { id: 5, name: "Rifqi Wahid Dhohiri", role: "IoT Specialist", image: "/rifqii.jpeg" }
  ]
};

const mockPartners = [
  { id: 1, name: "HIMA INFORMATIKA - UTI", image: "/Logo Hima HD.png" }
];

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = dict[lang];
  const portfolios = portfolioDataTranslations[lang];
  const teams = teamDataTranslations[lang];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    // Kunci API Web3Forms
    formData.append("access_key", "f196ca30-1912-472f-bb8c-6ff6e13d02e4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus('idle'), 5000); // Reset status setelah 5 detik
      } else {
        console.error("Error", data);
        setSubmitStatus('error');
        // Fallback sementara jika API key belum ada agar pesan tetap masuk ke email client lokal
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`);
        window.location.href = `mailto:blueagencylampung@gmail.com?subject=${subject}&body=${body}`;
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Link href="#tim" className="hover:text-white transition-colors duration-300">{t.nav.team}</Link>
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
            <Link href="#kontak" className="hidden sm:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white rounded-full px-5 md:px-7 py-2 md:py-2.5 text-xs md:text-sm font-medium transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(11,132,235,0.4)] hover:shadow-[0_0_30px_rgba(11,132,235,0.6)]">
              {t.nav.cta}
            </Link>
            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030b14]/98 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center pointer-events-auto">
          <nav className="flex flex-col gap-8 items-center text-xl font-medium text-slate-300">
            <Link href="#tentang" onClick={toggleMobileMenu} className="hover:text-white transition-colors duration-300">{t.nav.about}</Link>
            <Link href="#layanan" onClick={toggleMobileMenu} className="hover:text-white transition-colors duration-300">{t.nav.services}</Link>
            <Link href="#portofolio" onClick={toggleMobileMenu} className="hover:text-white transition-colors duration-300">{t.nav.portfolio}</Link>
            <Link href="#tim" onClick={toggleMobileMenu} className="hover:text-white transition-colors duration-300">{t.nav.team}</Link>
            <Link href="#cara-kerja" onClick={toggleMobileMenu} className="hover:text-white transition-colors duration-300">{t.nav.workflow}</Link>
            <Link href="#kontak" onClick={toggleMobileMenu} className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white rounded-full px-8 py-3 text-sm font-bold mt-4 shadow-[0_0_20px_rgba(11,132,235,0.4)]">
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}

      <main>
        {/* B. Hero Section - 3D Dashboard Mockup & Neon Glows */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-[#030b14]">
          {/* Neon Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 w-[1000px] h-[500px] bg-brand-400/20 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-screen"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-4 mt-10"
          >
            <div className="rounded-full bg-brand-900/50 backdrop-blur-md text-brand-300 border border-brand-500/30 px-6 py-2 text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(11,132,235,0.15)] inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" /> {t.hero.badge}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-white mb-8 leading-[1.1] max-w-4xl text-center">
              {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-white">{t.hero.titleHighlight}</span>
              {t.hero.title2 && (
                <>
                  <br />
                  {t.hero.title2}
                </>
              )}
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
          </motion.div>
        </section>

        {/* B2. About Section - The Origin Story */}
        <section id="tentang" className="relative py-24 px-4 md:px-8 bg-[#030b14]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-screen"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10 border-t border-white/5 pt-20"
          >
            {/* Left side text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-900/50 text-brand-300 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(11,132,235,0.15)]">
                <Sparkles className="w-4 h-4" /> {t.about.badge}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {t.about.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">{t.about.titleHighlight}</span><br />{t.about.title2}
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
          </motion.div>
        </section>

        {/* C. Services Section - Bento Box Grid */}
        <section id="layanan" className="relative py-32 px-4 md:px-8 bg-[#0a1526] border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
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

            {/* Compact Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

              {/* Feature 1 */}
              <div className="lg:row-span-2 bg-gradient-to-br from-[#0d1e36] to-[#050e1a] p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-brand-500/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-600/20 rounded-full blur-[80px] group-hover:bg-brand-500/30 transition-colors duration-700 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-500/20 border border-brand-400/30 text-brand-400 rounded-2xl flex items-center justify-center mb-6">
                      <LayoutDashboard className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.services.s1_title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                      {t.services.s1_desc}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium">{t.services.s1_tag1}</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium">{t.services.s1_tag2}</span>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#0d1e36]/50 p-8 md:p-10 rounded-[2rem] border border-white/10 group hover:border-brand-500/50 transition-colors duration-500 flex flex-col justify-between">
                <div>
                  <Globe className="w-8 h-8 md:w-10 md:h-10 text-brand-400 mb-5" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.services.s2_title}</h3>
                  <p className="text-slate-400 text-sm md:text-base">{t.services.s2_desc}</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-brand-600 to-brand-900 p-8 md:p-10 rounded-[2rem] border border-brand-500/50 group hover:border-brand-400 transition-colors duration-500 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -right-4 -top-4 opacity-10 pointer-events-none">
                  <Cpu className="w-32 h-32 md:w-40 md:h-40" />
                </div>
                <div className="relative z-10">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-brand-200 mb-5" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.services.s3_title}</h3>
                  <p className="text-brand-100/70 text-sm md:text-base">{t.services.s3_desc}</p>
                </div>
              </div>

              {/* Feature 4 (Wide Horizontal) */}
              <div className="lg:col-span-2 bg-[#0d1e36]/50 p-6 md:p-8 rounded-[2rem] border border-white/10 group hover:border-brand-500/50 transition-colors duration-500 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5 w-full sm:w-auto">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{t.services.s4_title}</h3>
                    <p className="text-slate-400 text-sm md:text-base max-w-lg">{t.services.s4_desc}</p>
                  </div>
                </div>
                <Link href="#kontak" className="w-full sm:w-auto shrink-0 px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform text-center text-sm md:text-base">
                  {t.services.s4_cta}
                </Link>
              </div>

            </div>
          </motion.div>
        </section>

        {/* D. Featured Portfolio Section - Sleek Dark Gallery */}
        <section id="portofolio" className="py-32 px-4 md:px-8 bg-[#030b14] relative border-y border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {t.portfolio.title}
              </h2>
            </div>

            {/* Slider Container */}
            <div className="flex overflow-x-auto gap-4 md:gap-6 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar">
              {portfolios.map((item, index) => (
                <article key={item.id} className="w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[380px] shrink-0 snap-center group relative rounded-[2rem] bg-[#0a1526] border border-white/10 overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(11,132,235,0.15)] hover:border-brand-500/40">
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

                  <div className="p-6 md:p-7 flex flex-col flex-1 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="bg-brand-500/10 border border-brand-400/20 text-brand-300 text-[10px] md:text-xs px-2.5 py-1 rounded-lg font-semibold tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-xl md:text-2xl text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
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
          </motion.div>
        </section>

        {/* E. Team Section */}
        <section id="tim" className="py-32 px-4 md:px-8 bg-[#0a1526] relative border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {t.team.title}
              </h2>
              <p className="text-lg text-slate-400">
                {t.team.desc}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12">
              {teams.map((member) => (
                <div key={member.id} className="w-full max-w-[320px] sm:max-w-none sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(20%-2rem)] group relative rounded-3xl overflow-hidden bg-[#0d1e36] border border-white/5 hover:border-brand-500/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(11,132,235,0.2)]">

                  {/* Decorative Tech Corners */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 group-hover:border-brand-400 transition-colors duration-500 z-20"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 group-hover:border-brand-400 transition-colors duration-500 z-20"></div>

                  {/* Photo area */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    {/* Blue Multiply Overlay (Disappears on hover) */}
                    <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                    />
                    {/* Bottom Gradient Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526] via-[#0a1526]/80 to-transparent opacity-90 z-10 h-full pointer-events-none"></div>
                  </div>

                  {/* Info Panel */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end h-full pointer-events-none">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <Zap className="w-3 h-3" /> Core Team
                      </div>
                      <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg">{member.name}</h3>
                      <p className="text-brand-400 font-medium text-sm md:text-base tracking-wide uppercase">{member.role}</p>

                      {/* Decorative Glowing Line */}
                      <div className="w-0 h-1 bg-gradient-to-r from-brand-400 to-transparent mt-5 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* F. Workflow Section - Interactive Stepper Style */}
        <section id="cara-kerja" className="relative py-32 px-4 md:px-8 bg-[#030b14] border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto relative z-10"
          >
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
          </motion.div>
        </section>

        {/* F. Contact Section - Massive Gradient Glass Card */}
        <section id="kontak" className="bg-[#030b14] relative py-32 px-4 md:px-8">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto bg-gradient-to-br from-[#0d1e36] to-[#0a1526] rounded-[3rem] shadow-[0_30px_100px_-15px_rgba(11,132,235,0.2)] overflow-hidden flex flex-col lg:flex-row relative z-20 border border-white/10"
          >

            {/* Left side text */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-screen pointer-events-none"></div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 relative z-10 leading-tight text-white">
                {t.contact.title1}<br /><span className="text-brand-400">{t.contact.titleHighlight}</span>
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
              <form onSubmit={handleSendMessage} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.name}
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-white font-medium placeholder-slate-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.contact.email}
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-white font-medium placeholder-slate-500"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder={t.contact.message}
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-white font-medium placeholder-slate-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-5 px-6 rounded-2xl transition-all duration-300 ease-out flex justify-center items-center gap-2 group mt-4 ${submitStatus === 'success' ? 'bg-green-500 hover:bg-green-400 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]' :
                    isSubmitting ? 'bg-slate-700 text-slate-300 cursor-not-allowed' :
                      'bg-brand-500 hover:bg-brand-400 text-white shadow-[0_0_20px_rgba(11,132,235,0.3)] hover:shadow-[0_0_40px_rgba(11,132,235,0.5)] hover:-translate-y-1'
                    }`}
                >
                  {isSubmitting ? 'Mengirim...' : submitStatus === 'success' ? 'Pesan Terkirim!' : t.contact.send}
                  {!isSubmitting && submitStatus !== 'success' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>

          </motion.div>
        </section>
      </main>

      {/* H. Partners Section - Trusted By */}
      <section className="py-20 md:py-32 border-t border-white/5 bg-[#0a1526] relative flex flex-col items-center px-4">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-screen pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16">
            {t.partners.title}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {mockPartners.map((partner) => (
              <div key={partner.id} className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-[#030b14] border border-white/5 hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,132,235,0.15)] w-64 h-48 relative overflow-hidden">

                {/* Image Placeholder or Logo */}
                <div className="relative w-full h-20 mb-4 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <h3 className="font-bold text-white text-center text-sm md:text-base group-hover:text-brand-300 transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* I. Premium Enterprise Footer */}
      <footer className="pt-20 pb-10 bg-[#020810] border-t border-white/5 relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-6">
              <Image
                src="/logoBluegenc2.png"
                alt="Bluegenc Logo"
                width={200}
                height={80}
                className="h-16 w-auto object-contain origin-left"
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                Mitra strategis Anda dalam transformasi digital. Merancang ekosistem teknologi masa depan untuk pertumbuhan bisnis yang tanpa batas.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="mailto:contact@bluegenc.com"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/6282279485813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 border border-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.61 3.38 17.14L2 22L6.98 20.64C8.48 21.49 10.19 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.15 16.5C16.92 17.15 15.77 17.68 15.06 17.8C14.54 17.89 13.8 18 10.97 16.83C7.54 15.41 5.34 11.91 5.17 11.68C5 11.45 3.75 9.79 3.75 8.07C3.75 6.35 4.62 5.51 4.96 5.16C5.23 4.88 5.67 4.75 6.08 4.75C6.21 4.75 6.33 4.75 6.44 4.8C6.73 4.93 6.87 5.28 7.02 5.65C7.23 6.16 7.64 7.16 7.69 7.27C7.74 7.38 7.82 7.55 7.74 7.72C7.65 7.89 7.55 7.97 7.42 8.12C7.29 8.27 7.14 8.44 7.02 8.56C6.88 8.7 6.73 8.86 6.89 9.13C7.05 9.4 7.61 10.31 8.43 11.04C9.5 12 10.37 12.3 10.66 12.43C10.95 12.56 11.13 12.54 11.3 12.35C11.47 12.16 11.96 11.59 12.16 11.33C12.36 11.07 12.56 11.11 12.83 11.21C13.1 11.31 14.53 12.02 14.83 12.17C15.13 12.32 15.33 12.39 15.4 12.5C15.47 12.61 15.47 13.14 15.24 13.79V16.5Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/blueagencylampung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Navigasi</h4>
              <ul className="space-y-4">
                <li><Link href="#tentang" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">{t.nav.about}</Link></li>
                <li><Link href="#layanan" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">{t.nav.services}</Link></li>
                <li><Link href="#portofolio" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">{t.nav.portfolio}</Link></li>
                <li><Link href="#tim" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">{t.nav.team}</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Layanan Kami</h4>
              <ul className="space-y-4">
                <li className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.services.s1_title}</li>
                <li className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.services.s2_title}</li>
                <li className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.services.s3_title}</li>
                <li className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer">{t.services.s4_title}</li>
              </ul>
            </div>

            {/* Column 4: Contact info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Kontak</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm leading-relaxed">
                    Bandar Lampung, Lampung<br/>
                    Indonesia
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="#" className="hover:text-white cursor-pointer transition-colors">Syarat & Ketentuan</Link>
              <Link href="#" className="hover:text-white cursor-pointer transition-colors">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
