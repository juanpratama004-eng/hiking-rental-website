import React from 'react';
// Import gambar hero secara langsung agar Vite mengunci path-nya dengan benar
import heroImage from '../assets/hero.png';

function HomeView() {
    return (
        <div className="w-full flex flex-col">
            {/* 1. HERO SECTION DENGAN FULL BACKGROUND IMAGE */}
            <section className="relative h-[85vh] sm:h-[90vh] w-full flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">

                {/* GAMBAR BACKGROUND UTAMA DENGAN EFEK PARALLAX/ZOOM */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Mountain Sunrise"
                        className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite] hover:scale-110 transition-transform duration-[10s]"
                    />
                    {/* OVERLAY GRADIENT: Membuat gambar gelap di sisi kiri agar teks terbaca, dan redup secara keseluruhan */}
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-stone-950/20"></div>
                </div>

                {/* KONTEN HERO */}
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl">
                        <span className="bg-hiking-orange text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-[0.2em] mb-6 inline-block shadow-lg">
                            Premium Outdoor Gear
                        </span>

                        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
                            Jelajahi Alam Tanpa <br />
                            <span className="text-hiking-orange italic">Ribet Beli Alat</span>
                        </h1>

                        <p className="text-base sm:text-lg text-stone-200 mb-10 leading-relaxed max-w-xl drop-shadow-sm">
                            Sewa perlengkapan outdoor premium dengan mudah, cepat, dan harga terjangkau.
                            Mulai petualanganmu hari ini tanpa beban investasi alat mahal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                href="#katalog"
                                className="relative group bg-hiking-orange hover:bg-hiking-orangeHover text-white text-center font-bold py-4 px-10 rounded-hiking-sm transition-all duration-300 shadow-xl shadow-orange-900/40 active:scale-95 overflow-hidden"
                            >
                                <span className="relative z-10">Jelajahi Katalog</span>
                                {/* Efek Kilap / Glow di tombol */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                            </a>
                            <a
                                href="#bundling"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-center font-bold py-4 px-10 rounded-hiking-sm border border-white/30 transition-all duration-300 active:scale-95 shadow-lg shadow-black/10 hover:border-white/50"
                            >
                                Lihat Paket Hemat
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SECTION KEUNGGULAN (Simple & Clean) */}
            <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm">🛡️</div>
                            <h3 className="text-lg font-bold text-hiking-darkBrown mb-3">Sewa Terpercaya</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Semua peralatan dicek dan dibersihkan secara steril sebelum dipinjamkan ke pendaki berikutnya.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm">🎒</div>
                            <h3 className="text-lg font-bold text-hiking-darkBrown mb-3">Paket Lengkap</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Tersedia berbagai pilihan paket bundling ekspedisi hemat untuk perorangan maupun kelompok kecil.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm">📍</div>
                            <h3 className="text-lg font-bold text-hiking-darkBrown mb-3">Antar & Jemput</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Layanan pengambilan langsung di basecamp strategis dekat jalur pendakian utama.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeView;