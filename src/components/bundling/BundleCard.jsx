import React from 'react';

function BundleCard({ bundle }) {
    const isFullBooked = bundle.status === 'full_booked';

    // Fungsi khusus Vite untuk membaca gambar secara dinamis dari folder src/assets/
    const getImageUrl = (imageName) => {
        return new URL(`../../assets/${imageName}`, import.meta.url).href;
    };

    return (
        <div className={`bg-white rounded-hiking-lg border overflow-hidden flex flex-col md:flex-row shadow-sm transition-all duration-300 ${isFullBooked ? 'border-gray-200 opacity-70' : 'border-gray-100 hover:shadow-md hover:-translate-y-0.5'
            }`}>

            {/* 1. SISI KIRI: Area Foto Utama Paket */}
            <div className="md:w-5/12 bg-stone-100 relative min-h-[200px] md:min-h-full overflow-hidden">
                <img
                    src={getImageUrl(bundle.image)} // Menggunakan pengonversi URL dinamis Vite
                    alt={bundle.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isFullBooked ? 'grayscale' : 'hover:scale-105'
                        }`}
                    onError={(e) => {
                        // Fallback jika file gambar belum ada atau salah penulisan nama
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x500/4a3b32/786152?text=Royal+Outdoor";
                    }}
                />

                {/* Badge Penanda */}
                <div className="absolute top-3 left-3 bg-hiking-orange text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm shadow-sm">
                    Hemat Paket
                </div>

                {/* Pita Merah Jika Full Booked */}
                {isFullBooked && (
                    <div className="absolute inset-0 bg-red-900/20 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">
                            Full Booked
                        </span>
                    </div>
                )}
            </div>

            {/* 2. SISI KANAN: Informasi Detail */}
            <div className="p-6 md:w-7/12 flex flex-col justify-between bg-white relative">
                <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className={`text-base font-extrabold tracking-tight leading-tight ${isFullBooked ? 'text-gray-400 line-through' : 'text-hiking-darkBrown'
                            }`}>
                            {bundle.name}
                        </h4>
                        <span className="text-[10px] font-bold bg-stone-100 border border-stone-200 px-2 py-0.5 rounded text-stone-600 whitespace-nowrap">
                            ⏱️ {bundle.duration}
                        </span>
                    </div>

                    {/* List Spesifikasi Alat */}
                    <ul className="space-y-1.5 mt-4 border-t border-stone-50 pt-3">
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2 block">Isi Bundling Alat:</div>
                        {bundle.items.map((item, index) => (
                            <li key={index} className="flex items-center justify-between text-xs text-stone-600 border-b border-stone-50/60 pb-1">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-hiking-orange font-bold text-xs">▪</span>
                                    <span className={isFullBooked ? 'text-gray-400' : ''}>{item.name}</span>
                                </div>
                                <span className={`font-mono font-bold px-1.5 py-0.2 rounded text-[10px] ${isFullBooked ? 'bg-stone-100 text-gray-400' : 'bg-stone-100 text-hiking-darkBrown'
                                    }`}>
                                    {item.qty}x
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. KOTAK HARGA GELAP */}
                <div className="mt-6 bg-hiking-darkBrown text-white p-3.5 rounded-hiking-md flex items-center justify-between shadow-md border border-stone-700/50">
                    <div>
                        <span className="text-[9px] text-stone-400 uppercase tracking-wider block leading-none mb-1">Total Biaya Sewa</span>
                        <span className={`text-base font-black ${isFullBooked ? 'text-stone-400' : 'text-amber-400'}`}>
                            {bundle.price}
                        </span>
                    </div>

                    {isFullBooked ? (
                        <button
                            disabled
                            className="bg-stone-700 text-stone-500 text-[11px] font-bold py-2 px-3.5 rounded-hiking-sm cursor-not-allowed uppercase tracking-wider"
                        >
                            Solved
                        </button>
                    ) : (
                        <a
                            href={`https://wa.me/+628981555240?text=${encodeURIComponent(`Halo Admin Royal Outdoor, saya tertarik untuk menyewa ${bundle.name} seharga ${bundle.price} untuk durasi ${bundle.duration}. Apakah slotnya masih tersedia?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-hiking-orange hover:text-white text-hiking-darkBrown text-[11px] font-bold py-2 px-3.5 rounded-hiking-sm transition-all duration-200 uppercase tracking-wider shadow-sm text-center block"
                        >
                            Sewa Paket
                        </a>
                    )}
                </div>
            </div>

        </div>
    );
}

export default BundleCard;