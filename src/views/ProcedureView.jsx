import React from 'react';

function ProcedureView() {
    const steps = [
        { id: '01', title: 'Pilih Alat / Paket', desc: 'Tentukan perlengkapan atau paket hemat yang sesuai dengan rencana pendakian Anda.' },
        { id: '02', title: 'Amankan Slot', desc: 'Hubungi admin untuk memastikan ketersediaan unit dan menentukan durasi sewa.' },
        { id: '03', title: 'Ambil di Basecamp', desc: 'Datang ke basecamp dengan membawa kartu identitas asli (KTP/SIM) sebagai jaminan.' },
        { id: '04', title: 'Kembalikan Tepat Waktu', desc: 'Setelah selesai petualangan, kembalikan alat dalam kondisi baik dan cek bersama admin.' },
    ];

    return (
        <div className="w-full flex flex-col">

            {/* 1. TOP HERO BANNER HALAMAN PROSEDUR */}
            <div className="w-full bg-stone-800 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/assets/hero-procedure.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/80"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-3xl font-black tracking-tight sm:text-4xl uppercase">
                        Prosedur & Layanan Pelanggan
                    </h1>
                    <p className="text-xs sm:text-sm text-stone-400 mt-2 tracking-wide uppercase">
                        Royal Outdoor Tangsel • Regulasi & Alur Penyewaan
                    </p>
                </div>
            </div>

            {/* SEKSI KONTEN UTAMA */}
            <section id="prosedur" className="bg-white py-20 px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-7xl mx-auto w-full">

                    {/* ALUR PROSEDUR CARA SEWA */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <span className="text-hiking-orange font-bold text-xs uppercase tracking-widest block mb-1">Panduan Penyewaan</span>
                            <h2 className="text-3xl font-extrabold text-hiking-darkBrown tracking-tight">
                                Bagaimana Cara Sewa?
                            </h2>
                            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
                                Ikuti 4 langkah mudah berikut untuk mendapatkan perlengkapan pendakian siap pakai.
                            </p>
                        </div>

                        {/* Grid Alur Langkah */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step) => (
                                <div key={step.id} className="relative p-6 bg-stone-50 rounded-hiking-md border border-stone-100 group hover:border-green-200 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center text-lg font-bold mb-5 shadow-sm group-hover:bg-green-600 transition-colors">
                                        {step.id}
                                    </div>
                                    <h3 className="text-base font-bold text-hiking-darkBrown mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HUBUNGI KAMI & LOKASI MAPS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-gray-100">

                        {/* Kolom Kiri: Form Pertanyaan */}
                        <div className="lg:col-span-5 bg-stone-50 p-6 sm:p-8 rounded-hiking-lg border border-stone-100 shadow-sm">
                            <h3 className="text-xl font-bold text-hiking-darkBrown mb-2">Ada Pertanyaan?</h3>
                            <p className="text-xs text-gray-500 mb-6">Kirimkan pesan Anda, tim customer service kami akan segera membalas pertanyaan Anda.</p>

                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-hiking-darkBrown uppercase tracking-wider mb-1">Nama Lengkap</label>
                                    <input type="text" placeholder="Masukkan nama Anda" className="w-full text-sm p-2.5 bg-white border border-gray-200 rounded-hiking-sm focus:outline-none focus:border-hiking-orange" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-hiking-darkBrown uppercase tracking-wider mb-1">WhatsApp / No. HP</label>
                                    <input type="text" placeholder="0812xxxx" className="w-full text-sm p-2.5 bg-white border border-gray-200 rounded-hiking-sm focus:outline-none focus:border-hiking-orange" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-hiking-darkBrown uppercase tracking-wider mb-1">Pesan Pertanyaan</label>
                                    <textarea rows="4" placeholder="Tulis pertanyaan Anda di sini mengenai ketersediaan alat..." className="w-full text-sm p-2.5 bg-white border border-gray-200 rounded-hiking-sm focus:outline-none focus:border-hiking-orange resize-none"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-hiking-darkBrown hover:bg-stone-700 text-white text-xs font-bold py-3 px-4 rounded-hiking-sm transition-colors uppercase tracking-wider shadow-sm">
                                    Kirim Pertanyaan
                                </button>
                            </form>
                        </div>

                        {/* KOLOM KANAN: LIVE GOOGLE MAPS INTEGRATED */}
                        <div className="lg:col-span-7 relative w-full h-[440px] bg-stone-100 rounded-hiking-lg overflow-hidden border border-gray-200 shadow-sm group">

                            {/* Google Maps iFrame Live Link dari Klien */}
                            <iframe
                                title="Basecamp Royal Outdoor Tangsel"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60647.29873338479!2d106.63924064863278!3d-6.2590035999999944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1b53b8cda15%3A0x216ae63c0b51ee56!2sRoyal%20Rental%20Outdoor!5e1!3m2!1sid!2sid!4v1779008692513!5m2!1sid!2sid"
                                className="absolute inset-0 w-full h-full border-0 z-0 grayscale-[25%] contrast-[110%] group-hover:grayscale-0 transition-all duration-500"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {/* KARTU ALAMAT PUTIH MENGAMBANG */}
                            <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white/95 backdrop-blur-sm p-5 rounded-hiking-md shadow-2xl border border-stone-100 z-10 max-w-sm transition-transform duration-300 hover:scale-[1.01]">
                                <span className="text-[10px] font-extrabold text-hiking-orange uppercase tracking-widest block mb-1">
                                    Basecamp Utama
                                </span>
                                <h3 className="text-base font-extrabold text-hiking-darkBrown mb-2 tracking-tight">
                                    Royal Outdoor Tangsel
                                </h3>
                                <p className="text-xs text-stone-500 leading-relaxed">
                                    Jl. Puskesmas No.2, RT.05/RW.11, Pd. Aren, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15224
                                </p>

                                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600 font-semibold">
                                    <span className="flex items-center gap-1">⏰ 08:00 - 21:00 WIB</span>
                                    <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-[10px]">
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