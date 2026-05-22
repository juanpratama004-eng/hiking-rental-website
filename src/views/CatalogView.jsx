import React, { useState } from 'react';
import ProductCard from '../components/catalog/ProductCard';

const CATEGORIES = [
    { id: 'all', name: 'Semua Alat', icon: '⛰️' },
    { id: 'tenda', name: 'Tenda & Shelter', icon: '⛺' },
    { id: 'tas', name: 'Carrier & Tas', icon: '🎒' },
    { id: 'masak', name: 'Peralatan Masak', icon: '🍳' },
    { id: 'apparel', name: 'Pakaian & Proteksi', icon: '🥾' },
    { id: 'aksesoris', name: 'Aksesoris', icon: '🔦' },
];

const INDIVIDUAL_PRODUCTS = [
    // TENDA & SHELTER
    { id: 1, category: 'tenda', categoryName: 'Tenda & Shelter', name: 'Tenda Kapasitas 2 (Single)', price: 'Rp 30.000', image: 'item-tenda-2p-single.jpg' },
    { id: 2, category: 'tenda', categoryName: 'Tenda & Shelter', name: 'Tenda Kapasitas 4 (Double)', price: 'Rp 40.000', image: 'item-tenda-4p-double.jpg' },
    { id: 3, category: 'tenda', categoryName: 'Tenda & Shelter', name: 'Tenda Kapasitas 6 (Double)', price: 'Rp 60.000', image: 'item-tenda-6p-double.jpg' },
    { id: 4, category: 'tenda', categoryName: 'Tenda & Shelter', name: 'Flysheet 3x4', price: 'Rp 15.000', image: 'item-flysheet-3x4.jpg' },
    { id: 5, category: 'tenda', categoryName: 'Tenda & Shelter', name: 'Tiang Flysheet', price: 'Rp 10.000', image: 'item-tiang-flysheet.jpg' },
    { id: 6, category: 'tenda', categoryName: 'Tenda & Shelter', name: 'Frame Tenda Kapasitas 4', price: 'Rp 15.000', image: 'item-frame-tenda4p.jpg' },

    // CARRIER & TAS
    { id: 8, category: 'tas', categoryName: 'Carrier & Tas', name: 'Carrier 65L', price: 'Rp 35.000', image: 'item-carrier-consina-65l.jpg' },
    { id: 9, category: 'tas', categoryName: 'Carrier & Tas', name: 'Carrier 40-45L', price: 'Rp 20.000', image: 'item-carrier-random-45l.jpg' },
    { id: 10, category: 'tas', categoryName: 'Carrier & Tas', name: 'Carrier 60L', price: 'Rp 30.000', image: 'item-carrier-random-60l.jpg' },
    { id: 11, category: 'tas', categoryName: 'Carrier & Tas', name: 'Daypack', price: 'Rp 20.000', image: 'item-daypack.jpg' },
    { id: 12, category: 'tas', categoryName: 'Carrier & Tas', name: 'Hydropack', price: 'Rp 20.000', image: 'item-hydropack.jpg' },
    { id: 13, category: 'tas', categoryName: 'Carrier & Tas', name: 'Rain Cover All Size', price: 'Rp 10.000', image: 'item-raincover.jpg' },

    // PERALATAN MASAK
    { id: 14, category: 'masak', categoryName: 'Peralatan Masak', name: 'Kompor Kotak', price: 'Rp 15.000', image: 'item-kompor-kotak.jpg' },
    { id: 15, category: 'masak', categoryName: 'Peralatan Masak', name: 'Kompor Bunga', price: 'Rp 20.000', image: 'item-kompor-bunga.jpg' },
    { id: 16, category: 'masak', categoryName: 'Peralatan Masak', name: 'Kompor Grill', price: 'Rp 25.000', image: 'item-kompor-grill.jpg' },
    { id: 17, category: 'masak', categoryName: 'Peralatan Masak', name: 'Pan Grill', price: 'Rp 10.000', image: 'item-pan-grill.jpg' },
    { id: 18, category: 'masak', categoryName: 'Peralatan Masak', name: 'Nesting Set', price: 'Rp 10.000', image: 'item-nesting.jpg' },
    { id: 19, category: 'masak', categoryName: 'Peralatan Masak', name: 'Set Meja & Kursi', price: 'Rp 20.000', image: 'item-set-meja-kursi.jpg' },

    // PAKAIAN & PROTEKSI
    { id: 20, category: 'apparel', categoryName: 'Pakaian & Proteksi', name: 'Sepatu Tracking', price: 'Rp 20.000', image: 'item-sepatu-tracking.jpg' },
    { id: 21, category: 'apparel', categoryName: 'Pakaian & Proteksi', name: 'Jaket Windbreaker', price: 'Rp 15.000', image: 'item-jaket-windbreaker.jpg' },
    { id: 22, category: 'apparel', categoryName: 'Pakaian & Proteksi', name: 'Jaket Bulang', price: 'Rp 25.000', image: 'item-jaket-bulang.jpg' },
    { id: 23, category: 'apparel', categoryName: 'Pakaian & Proteksi', name: 'Jaket Gorpcore', price: 'Rp 25.000', image: 'item-jaket-gorpcore.jpg' },
    { id: 24, category: 'apparel', categoryName: 'Pakaian & Proteksi', name: 'Topi Rimba', price: 'Rp 10.000', image: 'item-topi-rimba.jpg' },

    // AKSESORIS
    { id: 25, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Sleeping Bag', price: 'Rp 20.000', image: 'item-sleeping-bag.jpg' },
    { id: 26, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Tracking Pole', price: 'Rp 10.000', image: 'item-tracking-pole.jpg' },
    { id: 27, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Matras Spoon', price: 'Rp 10.000', image: 'item-matras-spoon.jpg' },
    { id: 28, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Matras Foil (50x200)', price: 'Rp 10.000', image: 'item-matras-foil-50x200.jpg' },
    { id: 29, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Matras Foil (100x200)', price: 'Rp 15.000', image: 'item-matras-foil-besar.jpg' },
    { id: 30, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Headlamp', price: 'Rp 10.000', image: 'item-headlamp.jpg' },
    { id: 31, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Lampu Tenda', price: 'Rp 10.000', image: 'item-lampu-tenda.jpg' },
    { id: 32, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Senter', price: 'Rp 10.000', image: 'item-senter.jpg' },
    { id: 33, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Powerbank 10.000mAh', price: 'Rp 15.000', image: 'item-powerbank.jpg' },
    { id: 34, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Tripod Bluetooth', price: 'Rp 10.000', image: 'item-tripod.jpg' },
    { id: 35, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Hammock', price: 'Rp 10.000', image: 'item-hammock.jpg' },
    { id: 36, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Kursi Lipat', price: 'Rp 10.000', image: 'item-kursi-lipat.jpg' },
    { id: 37, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Box Telur', price: 'Rp 5.000', image: 'item-box-telur.jpg' },
    { id: 38, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Water Tank Lipat', price: 'Rp 5.000', image: 'item-water-tank.jpg' },
    { id: 39, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Sekop Lipat', price: 'Rp 5.000', image: 'item-sekop.jpg' },
    { id: 40, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Bantal Pompa', price: 'Rp 5.000', image: 'item-bantal.jpg' },
    { id: 41, category: 'aksesoris', categoryName: 'Aksesoris', name: 'Gaiter', price: 'Rp 10.000', image: 'item-gaiter.jpg' },
];

function CatalogView() {
    const [activeTab, setActiveTab] = useState('all');

    const filteredProducts = activeTab === 'all'
        ? INDIVIDUAL_PRODUCTS
        : INDIVIDUAL_PRODUCTS.filter(product => product.category === activeTab);

    return (
        <section id="katalog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-stone-100">

            <div className="text-center mb-14">
                <span className="bg-orange-50 text-hiking-orange border border-orange-100 font-extrabold text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full inline-block mb-3.5 select-none">
                    Sewa Satuan
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-hiking-darkBrown tracking-tight">
                    Katalog Alat Eceran
                </h2>
                <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
                    Pilih jenis perlengkapan eceran berkualitas tinggi sesuai kebutuhan petualangan spesifik Anda.
                </p>
            </div>

            {/* Grid Filter Kategori Visual Sesuai PDF */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
                {CATEGORIES.map((cat) => {
                    const isActive = activeTab === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`relative px-4 py-4 rounded-2xl border text-center flex flex-col items-center justify-center transition-all duration-300 overflow-hidden group ${isActive
                                ? 'bg-gradient-to-r from-hiking-orange to-amber-500 text-white border-transparent shadow-lg shadow-orange-500/25 font-bold scale-[1.03] z-10'
                                : 'bg-white text-stone-600 border-stone-100 shadow-sm hover:border-hiking-orange/30 hover:shadow-md hover:text-hiking-orange hover:-translate-y-1'
                                }`}
                        >
                            {/* Latar Belakang Lingkaran (Glow Effect) untuk Active State */}
                            {isActive && (
                                <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-xl -top-6 -right-6 animate-pulse"></div>
                            )}

                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${isActive ? 'bg-white/25' : 'bg-stone-50 group-hover:bg-orange-50'}`}>
                                <span className={`text-xl transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-md' : 'group-hover:scale-110'}`}>{cat.icon}</span>
                            </div>
                            <span className="text-[10px] tracking-wide leading-none font-extrabold uppercase relative z-10">{cat.name}</span>
                        </button>
                    );
                })}
            </div>

            {/* Grid Render Kartu Produk Satuan */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </section>
    );
}

export default CatalogView;