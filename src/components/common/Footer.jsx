import React from 'react';

function Footer() {
    return (
        <footer className="bg-hiking-darkBrown text-gray-200 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                {/* Kolom 1: Tentang / Deskripsi Ringkas */}
                <div className="md:col-span-1">
                    <h3 className="text-white text-lg font-bold mb-4">Adventureland</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Penyedia layanan persewaan alat mendaki gunung dan ekspedisi terlengkap, aman, dan tepercaya untuk petualangan tanpa ribet.
                    </p>
                </div>

                {/* Kolom 2: Tautan Produk */}
                <div>
                    <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Produk</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#katalog" className="hover:text-hiking-orange transition-colors">Alat Terpisah</a></li>
                        <li><a href="#bundling" className="hover:text-hiking-orange transition-colors">Paket Bundling</a></li>
                        <li><a href="#katalog" className="hover:text-hiking-orange transition-colors">Peralatan Tenda</a></li>
                    </ul>
                </div>

                {/* Kolom 3: Layanan Pelanggan */}
                <div>
                    <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Bantuan</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#prosedur" className="hover:text-hiking-orange transition-colors">Cara Menyewa</a></li>
                        <li><a href="#prosedur" className="hover:text-hiking-orange transition-colors">Syarat & Ketentuan</a></li>
                        <li><a href="#prosedur" className="hover:text-hiking-orange transition-colors">Kontak Basecamp</a></li>
                    </ul>
                </div>

                {/* Kolom 4: Kontak Informasi */}
                <div>
                    <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Basecamp Utama</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Jl. Puskesmas No.2, RT.05/RW.11, Pd. Aren, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15224<br />
                        <span className="block mt-2 font-medium text-white">cs@adventureland.com</span>
                    </p>
                </div>

            </div>

            {/* Garis batas & Copyright */}
            <div className="max-w-7xl mx-auto pt-6 border-t border-stone-600 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400">
                <p>&copy; {new Date().getFullYear()} Adventureland Hiking Rental. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 sm:mt-0">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;