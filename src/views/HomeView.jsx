import React from 'react';
// Import gambar hero secara langsung agar Vite mengunci path-nya dengan benar
import heroImage from '../assets/hero.png';

function HomeView() {
    return (
        <div id="home" className="w-full flex flex-col">
            {/* 1. HERO SECTION DENGAN FULL BACKGROUND IMAGE */}
            <section className="relative h-[85vh] sm:h-[90vh] w-full flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-950">

                {/* GAMBAR BACKGROUND UTAMA DENGAN EFEK PARALLAX/ZOOM */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Mountain Sunrise"
                        className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite] hover:scale-110 transition-transform duration-[10s]"
                    />
                    {/* OVERLAY GRADIENT GANDA: Untuk efek sinematik & kontras teks tinggi */}
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80"></div>
                </div>

                {/* KONTEN HERO */}
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl animate-fade-in-up">
                        <span className="bg-gradient-to-r from-hiking-orange to-amber-500 text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-lg uppercase tracking-[0.2em] mb-6 inline-block shadow-lg shadow-orange-500/20">
                            Premium Outdoor Gear
                        </span>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
                            Jelajahi Alam Tanpa <br />
                            <span className="bg-gradient-to-r from-hiking-orange to-amber-400 bg-clip-text text-transparent italic">Ribet Beli Alat</span>
                        </h1>

                        <p className="text-base sm:text-lg text-stone-300 mb-10 leading-relaxed max-w-xl">
                            Sewa perlengkapan outdoor premium dengan mudah, cepat, dan harga terjangkau.
                            Mulai petualanganmu hari ini tanpa beban investasi alat mahal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#katalog"
                                className="relative group bg-gradient-to-r from-hiking-orange to-amber-500 hover:from-hiking-orangeHover hover:to-amber-600 text-white text-center font-extrabold py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-1 active:translate-y-0 text-sm uppercase tracking-wider overflow-hidden"
                            >
                                <span className="relative z-10">Jelajahi Katalog</span>
                                {/* Efek Kilap / Glow di tombol */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-25 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                            </a>
                            <a
                                href="#bundling"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-center font-extrabold py-4 px-10 rounded-2xl border border-white/20 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 shadow-lg text-sm uppercase tracking-wider"
                            >
                                Lihat Paket Hemat
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SECTION KEUNGGULAN (Polished & Professional Cards) */}
            <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-stone-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Keunggulan 1 */}
                        <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-stone-100/80 shadow-md shadow-stone-100/50 hover:shadow-xl hover:shadow-stone-250/30 hover:-translate-y-2 transition-all duration-500 group bg-white">
                            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-hiking-orange group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-hiking-orange group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-hiking-darkBrown mb-3">Sewa Terpercaya</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                                Semua peralatan dicek dan dibersihkan secara steril sebelum dipinjamkan ke pendaki berikutnya.
                            </p>
                        </div>

                        {/* Keunggulan 2 */}
                        <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-stone-100/80 shadow-md shadow-stone-100/50 hover:shadow-xl hover:shadow-stone-250/30 hover:-translate-y-2 transition-all duration-500 group bg-white">
                            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-hiking-orange group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-hiking-orange group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-hiking-darkBrown mb-3">Paket Lengkap</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                                Tersedia berbagai pilihan paket bundling ekspedisi hemat untuk perorangan maupun kelompok kecil.
                            </p>
                        </div>

                        {/* Keunggulan 3 */}
                        <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-stone-100/80 shadow-md shadow-stone-100/50 hover:shadow-xl hover:shadow-stone-250/30 hover:-translate-y-2 transition-all duration-500 group bg-white">
                            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-hiking-orange group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-hiking-orange group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-hiking-darkBrown mb-3">Antar & Jemput</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                                Layanan pengambilan langsung di basecamp strategis dekat jalur pendakian utama.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeView;