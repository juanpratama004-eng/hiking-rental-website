import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                {/* Kolom 1: Tentang / Deskripsi Ringkas */}
                <div className="md:col-span-1 flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Royal Rent Outdoor" className="h-10 w-auto" onError={(e) => e.target.style.display = 'none'} />
                        <span className="text-xl font-extrabold tracking-tight text-white select-none">
                            Royal Rent<span className="text-hiking-orange"> Outdoor</span>
                        </span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed font-medium">
                        Penyedia layanan persewaan alat mendaki gunung dan ekspedisi terlengkap, aman, dan tepercaya untuk petualangan tanpa ribet.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex space-x-3 pt-2">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-hiking-orange text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://wa.me/+628981555240" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-hiking-orange text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </a>
                        <a href="https://maps.app.goo.gl/G78VZMP3EUjhA2v28" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-hiking-orange text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Kolom 2: Tautan Produk */}
                <div>
                    <h4 className="text-white text-xs font-extrabold uppercase tracking-[0.15em] mb-5 select-none">Produk</h4>
                    <ul className="space-y-3 text-sm text-stone-400 font-medium">
                        <li>
                            <a href="#katalog" className="hover:text-hiking-orange transition-all duration-300 flex items-center gap-1 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-hiking-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2.5 group-hover:ml-0 group-hover:mr-1"></span>
                                Alat Terpisah
                            </a>
                        </li>
                        <li>
                            <a href="#bundling" className="hover:text-hiking-orange transition-all duration-300 flex items-center gap-1 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-hiking-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2.5 group-hover:ml-0 group-hover:mr-1"></span>
                                Paket Bundling
                            </a>
                        </li>
                        <li>
                            <a href="#katalog" className="hover:text-hiking-orange transition-all duration-300 flex items-center gap-1 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-hiking-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2.5 group-hover:ml-0 group-hover:mr-1"></span>
                                Peralatan Tenda
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Kolom 3: Layanan Pelanggan */}
                <div>
                    <h4 className="text-white text-xs font-extrabold uppercase tracking-[0.15em] mb-5 select-none">Bantuan</h4>
                    <ul className="space-y-3 text-sm text-stone-400 font-medium">
                        <li>
                            <a href="#prosedur" className="hover:text-hiking-orange transition-all duration-300 flex items-center gap-1 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-hiking-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2.5 group-hover:ml-0 group-hover:mr-1"></span>
                                Cara Menyewa
                            </a>
                        </li>
                        <li>
                            <a href="#prosedur" className="hover:text-hiking-orange transition-all duration-300 flex items-center gap-1 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-hiking-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2.5 group-hover:ml-0 group-hover:mr-1"></span>
                                Syarat & Ketentuan
                            </a>
                        </li>
                        <li>
                            <a href="#prosedur" className="hover:text-hiking-orange transition-all duration-300 flex items-center gap-1 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-hiking-orange opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2.5 group-hover:ml-0 group-hover:mr-1"></span>
                                Kontak Basecamp
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Kolom 4: Kontak Informasi */}
                <div className="flex flex-col space-y-4">
                    <h4 className="text-white text-xs font-extrabold uppercase tracking-[0.15em] mb-1 select-none">Basecamp Utama</h4>
                    <div className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-hiking-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-sm text-stone-400 leading-relaxed font-medium">
                            Jl. Puskesmas No.2, RT.05/RW.11, Pd. Aren, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15224
                        </p>
                    </div>
                </div>

            </div>

            {/* Garis batas & Copyright */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
                <p className="text-center sm:text-left font-medium select-none">&copy; {new Date().getFullYear()} Royal Rent Outdoor Hiking Rental. All rights reserved.</p>
                <div className="flex space-x-6 font-medium">
                    <span className="hover:text-hiking-orange transition-colors cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-hiking-orange transition-colors cursor-pointer">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;