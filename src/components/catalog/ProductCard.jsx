import React from 'react';

// Memetakan seluruh gambar di folder src/assets/catalog secara real-time
const ALL_CATALOG_IMAGES = import.meta.glob('../../assets/catalog/*.{png,jpg,jpeg,JPG,JPEG,svg}', { eager: true });

function ProductCard({ product }) {
    // Cari key yang cocok dengan nama file di product.image secara case-insensitive (mengatasi .JPG vs .jpg)
    const matchingKey = Object.keys(ALL_CATALOG_IMAGES).find(key => 
        key.toLowerCase().includes(product.image.toLowerCase().replace('.jpg', ''))
    );

    // Jika foto alat satuan ketemu di folder src/assets/catalog, pakai foto itu. Jika tidak, pakai placeholder cerah.
    const finalImageSrc = matchingKey
        ? ALL_CATALOG_IMAGES[matchingKey].default
        : `https://placehold.co/300x300/f5f5f4/4a3b32?text=${encodeURIComponent(product.name)}`;

    return (
        <div className="bg-white rounded-hiking-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group cursor-pointer">

            {/* Area Gambar Produk */}
            <div className="relative aspect-square w-full bg-stone-50 overflow-hidden flex items-center justify-center">

                {/* Detail Kecil 3: Tag Vertical Rent */}
                <div className="absolute top-0 left-0 w-2.5 h-8 bg-hiking-orange rounded-br-sm z-10"></div>
                <div className="absolute top-2 left-4 bg-amber-400 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm text-stone-900 shadow-sm z-10 select-none">
                    Rent
                </div>

                <img
                    src={finalImageSrc}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Detail Informasi Jenis Barang & Kategori */}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div className="mb-4">
                    <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest block">
                        {product.categoryName}
                    </span>
                    <h4 className="text-xs font-bold text-hiking-darkBrown mt-0.5 line-clamp-2 group-hover:text-hiking-orange transition-colors min-h-[32px] leading-tight">
                        {product.name}
                    </h4>
                    <p className="text-hiking-orange font-black text-sm mt-1.5">
                        {product.price} <span className="text-[10px] text-gray-400 font-normal">/ hari</span>
                    </p>
                </div>

                {/* Tombol Aksi Cokelat Gelap */}
                <a 
                    href="https://forms.gle/g9A3X9NC1fDafiHq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-hiking-darkBrown group-hover:bg-hiking-orange text-white text-[11px] font-bold py-2.5 px-3 rounded-hiking-sm transition-all duration-300 uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 active:scale-[0.97]"
                >
                    <span>Sewa Sekarang</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

        </div>
    );
}

export default ProductCard;