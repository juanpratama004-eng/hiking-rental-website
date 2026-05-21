import React from 'react';

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-100/80 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Kiri: Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold tracking-tight text-hiking-darkBrown">
                            Adventure<span className="text-hiking-orange">Rent</span>
                        </span>
                    </div>

                    {/* Tengah: Menu Navigasi */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-hiking-orange font-semibold text-sm transition-colors">Home</a>
                        <a href="#katalog" className="text-gray-600 hover:text-hiking-orange font-medium text-sm transition-colors">Katalog</a>
                        <a href="#bundling" className="text-gray-600 hover:text-hiking-orange font-medium text-sm transition-colors">Paket Bundling</a>
                        <a href="#prosedur" className="text-gray-600 hover:text-hiking-orange font-medium text-sm transition-colors">Prosedur & Layanan</a>
                    </div>

                    {/* Kanan: Button CTA */}
                    <div className="flex items-center">
                        <button className="bg-hiking-orange hover:bg-hiking-orangeHover text-white text-sm font-semibold py-2 px-5 rounded-hiking-md transition-all duration-300 shadow-sm shadow-orange-200 active:scale-95">
                            Sewa Alat
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;