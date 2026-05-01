import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, 
  Database, 
  Cpu, 
  Smartphone, 
  Image as ImageIcon, 
  ExternalLink, 
  Mail, 
  MapPin 
} from 'lucide-react';

const portfolioData = [
  { id: 1, title: "AeroSuoh", desc: "Platform pariwisata pintar dan dasbor pemantauan geotermal masa depan untuk kawasan Suoh.", image: "aeroSuohImg", tags: ["Web Dev", "Pariwisata", "Dashboard"], demo: "https://aero-suoh.vercel.app/" },
  { id: 2, title: "Sertifikat Generator", desc: "Aplikasi web berbasis Client-Side murni untuk membuat dan mengunduh ratusan sertifikat secara otomatis.", image: "sertifHimaIfImg", tags: ["Web Dev", "Sertifikat Generator", "Client-Side"], demo: "https://sertifikat-generator-hima-informati.vercel.app/" },
  { id: 3, title: "TeknoCom", desc: "Platform informasi berbasis web untuk mempromosikan kegiatan dan informasi seputar kompetisi International dibidang IT.", image: "teknoComImg", tags: ["Web Dev", "Informasi Kompetisi", "International"], demo: "https://teknocom.teknokrat.ac.id/" },
  { id: 4, title: "Cv-Builder", desc: "Web app ringan untuk membuat CV secara cepat dengan preview real‑time dan ekspor PDF.", image: "cvBuilderImg", tags: ["Web Dev", "Cv-Builder", "Auto-Generate"], demo: "https://cv-builder-by-hy.vercel.app/" },
  { id: 5, title: "Transparansi Skor & Kinerja", desc: "Platform digital untuk memantau keaktifan dan kontribusi seluruh anggota organisasi secara real-time.", image: "transparansiSkorKinerjaImg", tags: ["Web Dev", "Sistem Transparansi", "Real-time"], demo: "https://app.himaif.web.id/" }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      {/* A. Sticky Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image 
              src="/logoBluegenc2.png" 
              alt="Bluegenc Logo" 
              width={400} 
              height={100} 
              className="h-16 md:h-20 w-auto object-contain transform scale-125 md:scale-150 origin-left" 
              priority 
            />
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center font-medium text-slate-600">
            <Link href="#layanan" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Layanan</Link>
            <Link href="#portofolio" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Portofolio</Link>
            <Link href="#cara-kerja" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Cara Kerja</Link>
          </nav>

          <div>
            <Link href="#kontak" className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
              Konsultasi
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* B. Hero Section */}
        <section className="relative bg-white pt-20 overflow-hidden">
          {/* Subtle dot pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-0 opacity-50"></div>
          
          <div className="relative z-10 min-h-[90vh] flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 py-20">
            <div className="rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold mb-6 animate-fade-in-up shadow-sm">
              Terpercaya. Cepat. Terukur.
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Membangun Solusi Digital & IoT Terukur untuk <span className="text-blue-600">Transformasi Bisnis</span> Anda.
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Bluegenc mengintegrasikan perangkat keras dan perangkat lunak dengan arsitektur yang solid untuk enterprise dan B2B.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <Link href="#kontak" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3.5 font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl text-center">
                Jadwalkan Konsultasi
              </Link>
              <Link href="#portofolio" className="w-full sm:w-auto border-2 border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-full px-8 py-3.5 font-medium transition-all duration-300 ease-in-out text-center">
                Lihat Karya Kami
              </Link>
            </div>
          </div>
        </section>

        {/* C. Services Section */}
        <section id="layanan" className="bg-slate-50 py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center mb-12">
              Layanan Unggulan Kami
            </h2>
            
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pembuatan Website</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Performa tinggi (fast-loading) dan desain UI/UX modern berbasis konversi.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pengembangan Sistem Khusus</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Resolusi masalah operasional B2B, ERP, dan arsitektur database terpusat.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Solusi IoT</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Integrasi hardware, dashboard real-time, dan telemetri robotika udara.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Aplikasi Mobile</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Akses, kontrol, dan monitoring sistem enterprise langsung di dalam genggaman.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* D. Featured Portfolio Section */}
        <section id="portofolio" className="bg-white py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center mb-16">
              Studi Kasus & Karya Kami
            </h2>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {portfolioData.map((item) => (
                <article key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-2 group">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-slate-200 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-300 transition-colors duration-300">
                    <ImageIcon className="text-slate-400 w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-bold text-xl text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {item.desc}
                    </p>
                    
                    <Link 
                      href={item.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1.5 transition-colors duration-300 w-fit"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* E. Workflow Section */}
        <section id="cara-kerja" className="bg-slate-900 text-white py-24 px-4 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
              Proses Kerja Terstruktur
            </h2>

            <div className="relative">
              {/* Desktop Horizontal Line */}
              <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0"></div>
              
              {/* Mobile Vertical Line */}
              <div className="block lg:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-slate-800 z-0"></div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
                {[
                  "Research & UX Audit",
                  "Penyusunan PRD",
                  "High-Fidelity Prototyping",
                  "Development & QA",
                  "Deployment & Maintenance"
                ].map((step, index) => (
                  <div key={index} className="flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4 group cursor-default relative pl-2 lg:pl-0">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-slate-800 group-hover:bg-blue-600 text-white flex items-center justify-center font-bold text-lg transition-colors duration-300 border-4 border-slate-900 shadow-sm z-10 relative">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-100 group-hover:text-blue-400 transition-colors duration-300">
                        {step}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* F. Contact Section */}
        <section id="kontak" className="bg-white py-24 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left side text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Siap Melesatkan Bisnis Anda?
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                Mari diskusikan tantangan teknis perusahaan Anda. Tim ahli kami siap membantu merancang solusi digital yang tepat sasaran, terukur, dan berdampak nyata.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors group">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Email Kami</div>
                    <a href="mailto:hello@bluegenc.com" className="text-sm">hello@bluegenc.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors group">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Kantor Utama</div>
                    <p className="text-sm">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Perusahaan</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Pesan & Kebutuhan</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Ceritakan singkat tentang proyek atau masalah yang ingin diselesaikan..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg active:scale-[0.98]"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* F. Footer */}
      <footer className="border-t border-slate-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Bluegenc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
