import React from 'react';

function ProcedureView() {
    const steps = [
        { id: '01', title: 'Pilih Alat / Paket', desc: 'Tentukan perlengkapan atau paket hemat yang sesuai dengan rencana pendakian Anda.' },
        { id: '02', title: 'Amankan Slot', desc: 'Hubungi admin untuk memastikan ketersediaan unit dan menentukan durasi sewa.' },
        { id: '03', title: 'Ambil di Basecamp', desc: 'Datang ke basecamp dengan membawa kartu identitas asli (KTP/SIM) sebagai jaminan.' },
        { id: '04', title: 'Kembalikan Tepat Waktu', desc: 'Setelah selesai petualangan, kembalikan alat dalam kondisi baik dan cek bersama admin.' },
    ];

    return (
        <div id="prosedur" className="w-full flex flex-col">

            {/* 1. TOP HERO BANNER HALAMAN PROSEDUR */}
            <div className="w-full bg-stone-950 text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-30 scale-105" style={{ backgroundImage: "url('/assets/hero-procedure.jpg')" }}></div>
                {/* OVERLAY GRADIENT GANDA */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-950/90 z-0"></div>

                <div className="relative z-10 max-w-3xl mx-auto animate-fade-in-up">
                    <span className="bg-orange-500/20 border border-orange-500/30 text-hiking-orange font-extrabold text-[9px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-lg inline-block mb-3.5 select-none">
                        Regulasi & Alur Penyewaan
                    </span>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl uppercase leading-tight select-none">
                        Prosedur & Layanan Pelanggan
                    </h1>
                    <p className="text-xs sm:text-sm text-stone-400 mt-3 tracking-widest uppercase font-semibold select-none">
                        Royal Rent Outdoor Tangsel
                    </p>
                </div>
            </div>

            {/* SEKSI KONTEN UTAMA */}
            <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-7xl mx-auto w-full">

                    {/* ALUR PROSEDUR CARA SEWA */}
                    <div className="mb-24">
                        <div className="text-center mb-14">
                            <span className="bg-orange-50 text-hiking-orange border border-orange-100 font-extrabold text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full inline-block mb-3.5 select-none">
                                Panduan Penyewaan
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-hiking-darkBrown tracking-tight">
                                Bagaimana Cara Sewa?
                            </h2>
                            <p className="text-stone-500 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
                                Ikuti 4 langkah mudah berikut untuk mendapatkan perlengkapan pendakian siap pakai.
                            </p>
                        </div>

                        {/* Grid Alur Langkah */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step) => (
                                <div key={step.id} className="relative p-7 bg-white rounded-2xl border border-stone-150 shadow-sm hover:shadow-lg hover:shadow-stone-200/40 hover:-translate-y-1.5 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-hiking-orange to-amber-500 text-white flex items-center justify-center text-base font-extrabold mb-6 shadow-md shadow-orange-500/10 group-hover:scale-105 transition-transform duration-300 select-none">
                                        {step.id}
                                    </div>
                                    <h3 className="text-base font-extrabold text-hiking-darkBrown mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-stone-550 text-xs leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HUBUNGI KAMI & LOKASI MAPS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-16 border-t border-stone-100">

                        {/* Kolom Kiri: Form Pertanyaan */}
                        <div className="lg:col-span-5 bg-stone-50/50 p-6 sm:p-8 rounded-3xl border border-stone-150 shadow-sm">
                            <h3 className="text-xl font-extrabold text-hiking-darkBrown mb-2">Ada Pertanyaan?</h3>
                            <p className="text-xs text-stone-500 mb-6">Kirimkan pesan Anda, tim customer service kami akan segera membalas pertanyaan Anda.</p>

                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-extrabold text-hiking-darkBrown uppercase tracking-wider mb-1.5">Nama Lengkap</label>
                                    <input type="text" placeholder="Masukkan nama Anda" className="w-full text-sm p-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-hiking-orange focus:ring-2 focus:ring-hiking-orange/10 placeholder-stone-400 transition-all" />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-extrabold text-hiking-darkBrown uppercase tracking-wider mb-1.5">WhatsApp / No. HP</label>
                                    <input type="text" placeholder="0812xxxx" className="w-full text-sm p-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-hiking-orange focus:ring-2 focus:ring-hiking-orange/10 placeholder-stone-400 transition-all" />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-extrabold text-hiking-darkBrown uppercase tracking-wider mb-1.5">Pesan Pertanyaan</label>
                                    <textarea rows="4" placeholder="Tulis pertanyaan Anda di sini mengenai ketersediaan alat..." className="w-full text-sm p-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-hiking-orange focus:ring-2 focus:ring-hiking-orange/10 placeholder-stone-400 transition-all resize-none"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-hiking-darkBrown hover:bg-hiking-orange text-white text-xs font-extrabold py-3.5 px-4 rounded-xl transition-all duration-300 uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:translate-y-0">
                                    Kirim Pertanyaan
                                </button>
                            </form>
                        </div>

                        {/* KOLOM KANAN: LIVE GOOGLE MAPS INTEGRATED */}
                        <div className="lg:col-span-7 relative w-full h-[450px] bg-stone-50 rounded-3xl overflow-hidden border border-stone-200 shadow-sm group">

                            {/* Google Maps iFrame Live Link dari Klien */}
                            <iframe
                                title="Basecamp Royal Rent Outdoor Tangsel"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60647.29873338479!2d106.63924064863278!3d-6.2590035999999944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1b53b8cda15%3A0x216ae63c0b51ee56!2sRoyal%20Rental%20Outdoor!5e1!3m2!1sid!2sid!4v1779008692513!5m2!1sid!2sid"
                                className="absolute inset-0 w-full h-full border-0 z-0 grayscale-[20%] contrast-[105%] group-hover:grayscale-0 transition-all duration-700"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {/* KARTU ALAMAT PUTIH MENGAMBANG */}
                            <div className="absolute bottom-5 left-5 right-5 md:right-auto bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-stone-150/50 z-10 max-w-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                <span className="text-[9px] font-extrabold text-hiking-orange uppercase tracking-[0.15em] block mb-1.5 select-none">
                                    Basecamp Utama
                                </span>
                                <h3 className="text-base font-extrabold text-hiking-darkBrown mb-2 tracking-tight select-none">
                                    Royal Rent Outdoor Tangsel
                                </h3>
                                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                                    Jl. Puskesmas No.2, RT.05/RW.11, Pd. Aren, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15224
                                </p>

                                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500 font-extrabold uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5 select-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-hiking-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        08:00 - 21:00 WIB
                                    </span>
                                    
                                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider uppercase select-none">
                                        Buka Setiap Hari
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default ProcedureView;