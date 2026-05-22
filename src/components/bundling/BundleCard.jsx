import React from 'react';

function BundleCard({ bundle }) {
    const isFullBooked = bundle.status === 'full_booked';

    // Fungsi khusus Vite untuk membaca gambar secara dinamis dari folder src/assets/
    const getImageUrl = (imageName) => {
        return new URL(`../../assets/${imageName}`, import.meta.url).href;
    };

    return (
        <div className={`bg-white rounded-[24px] border overflow-hidden flex flex-col md:flex-row shadow-sm transition-all duration-500 group ${isFullBooked
            ? 'border-stone-200 opacity-60 scale-[0.98]'
            : 'border-stone-150/80 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1'
            }`}>

            {/* 1. SISI KIRI: Area Foto Utama Paket */}
            <div className="md:w-5/12 bg-stone-50 relative min-h-[220px] md:min-h-full overflow-hidden">
                <img
                    src={getImageUrl(bundle.image)} // Menggunakan pengonversi URL dinamis Vite
                    alt={bundle.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isFullBooked ? 'grayscale' : 'group-hover:scale-105'
                        }`}
                    onError={(e) => {
                        // Fallback jika file gambar belum ada atau salah penulisan nama
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x500/4a3b32/786152?text=Royal+Rent+Outdoor";
                    }}
                />

                {/* Badge Penanda */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-hiking-orange to-amber-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg shadow-md z-10 select-none">
                    Hemat Paket
                </div>

                {/* Pita Merah Jika Full Booked */}
                {isFullBooked && (
                    <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-red-600/90 text-white text-[9px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-md border border-red-500/20">
                            Full Booked
                        </span>
                    </div>
                )}
            </div>

            {/* 2. SISI KANAN: Informasi Detail */}
            <div className="p-6 md:w-7/12 flex flex-col justify-between bg-white relative">
                <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className={`text-base font-extrabold tracking-tight leading-tight ${isFullBooked ? 'text-stone-400 line-through' : 'text-hiking-darkBrown group-hover:text-hiking-orange transition-colors duration-300'
                            }`}>
                            {bundle.name}
                        </h4>
                        
                        <span className="text-[9px] font-extrabold bg-stone-50 border border-stone-150 px-2.5 py-1 rounded-lg text-stone-600 uppercase tracking-wider flex items-center gap-1 select-none whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-hiking-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {bundle.duration}
                        </span>
                    </div>

                    {/* List Spesifikasi Alat */}
                    <ul className="space-y-2 mt-4 border-t border-stone-100 pt-4">
                        <div className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest mb-2.5 block select-none">
                            Isi Bundling Alat:
                        </div>
                        {bundle.items.map((item, index) => (
                            <li key={index} className="flex items-center justify-between text-xs text-stone-600 border-b border-stone-50 pb-1.5">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 flex-shrink-0 ${isFullBooked ? 'text-stone-300' : 'text-emerald-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className={isFullBooked ? 'text-stone-400' : 'font-medium'}>{item.name}</span>
                                </div>
                                <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[10px] ${isFullBooked ? 'bg-stone-100 text-stone-400' : 'bg-stone-50 text-hiking-darkBrown border border-stone-100'
                                    }`}>
                                    {item.qty}x
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. KOTAK HARGA GELAP (Earth Tone Wood-Brown Gradient) */}
                <div className="mt-6 bg-gradient-to-r from-hiking-darkBrown to-[#332822] p-4 rounded-2xl flex flex-col gap-3 shadow-md border border-[#524137]">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-[10px] text-stone-300/80 uppercase tracking-widest block leading-none select-none font-extrabold">Total Biaya Sewa</span>
                        <span className={`text-xl font-black leading-none mt-1.5 ${isFullBooked ? 'text-stone-400' : 'text-amber-400'}`}>
                            {bundle.price}
                        </span>
                    </div>

                    {isFullBooked ? (
                        <button
                            disabled
                            className="w-full bg-stone-800 text-stone-500 border border-stone-700 text-[11px] font-extrabold py-3 rounded-xl cursor-not-allowed uppercase tracking-wider whitespace-nowrap inline-flex items-center justify-center"
                        >
                            Full Booked
                        </button>
                    ) : (
                        <a
                            href={`https://wa.me/+628981555240?text=${encodeURIComponent(`Halo Admin Royal Rent Outdoor, saya tertarik untuk menyewa ${bundle.name} seharga ${bundle.price} untuk durasi ${bundle.duration}. Apakah slotnya masih tersedia?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-hiking-orange to-amber-500 hover:from-hiking-orangeHover hover:to-amber-600 text-white text-[11px] font-extrabold py-3 rounded-xl transition-all duration-300 uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center whitespace-nowrap"
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