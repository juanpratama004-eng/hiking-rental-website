import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-stone-200/40 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Kiri: Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo.png" alt="Royal Rent Outdoor" className="h-10 w-auto" onError={(e) => e.target.style.display = 'none'} />
                        <span className="text-xl font-extrabold tracking-tight text-hiking-darkBrown select-none">
                            Royal Rent<span className="text-hiking-orange"> Outdoor</span>
                        </span>
                    </div>

                    {/* Tengah: Menu Navigasi (Desktop) */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="relative text-stone-850 hover:text-hiking-orange font-semibold text-sm transition-colors py-1 group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hiking-orange transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#katalog" className="relative text-stone-600 hover:text-hiking-orange font-medium text-sm transition-colors py-1 group">
                            Katalog
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hiking-orange transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#bundling" className="relative text-stone-600 hover:text-hiking-orange font-medium text-sm transition-colors py-1 group">
                            Paket Bundling
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hiking-orange transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#prosedur" className="relative text-stone-600 hover:text-hiking-orange font-medium text-sm transition-colors py-1 group">
                            Prosedur & Layanan
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hiking-orange transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                    {/* Kanan: Button CTA (Desktop) */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="#katalog"
                            className="bg-gradient-to-r from-hiking-orange to-amber-500 hover:from-hiking-orangeHover hover:to-amber-600 text-white text-xs uppercase tracking-wider font-extrabold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Sewa Alat
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-stone-600 hover:text-hiking-orange hover:bg-stone-50 focus:outline-none transition-all"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 border-t border-stone-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-4 pt-3 pb-4 space-y-2 bg-white/95 backdrop-blur-lg">
                    <a
                        href="#home"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-xl text-base font-semibold text-hiking-orange bg-orange-50/50"
                    >
                        Home
                    </a>
                    <a
                        href="#katalog"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-xl text-base font-medium text-stone-700 hover:text-hiking-orange hover:bg-stone-50 transition-colors"
                    >
                        Katalog
                    </a>
                    <a
                        href="#bundling"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-xl text-base font-medium text-stone-700 hover:text-hiking-orange hover:bg-stone-50 transition-colors"
                    >
                        Paket Bundling
                    </a>
                    <a
                        href="#prosedur"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-xl text-base font-medium text-stone-700 hover:text-hiking-orange hover:bg-stone-50 transition-colors"
                    >
                        Prosedur & Layanan
                    </a>
                    <div className="pt-2 px-3">
                        <a
                            href="#katalog"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center block bg-gradient-to-r from-hiking-orange to-amber-500 text-white font-extrabold py-2.5 px-4 rounded-xl shadow-md text-sm uppercase tracking-wider"
                        >
                            Sewa Alat
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;