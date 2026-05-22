import React from 'react';
import BundleCard from '../components/bundling/BundleCard';

const PRICELIST_DATA = [
    {
        id: 1,
        name: 'Paket Tektokin Sendiri',
        price: 'Rp 70.000',
        duration: '1 Hari',
        status: 'available', // Tersedia
        image: 'tektokin-sendiri.jpg',
        items: [
            { name: 'Hydropack', qty: 1 },
            { name: 'Jacket', qty: 1 },
            { name: 'Sepatu', qty: 1 },
            { name: 'Tracking Pole', qty: 1 },
            { name: 'Topi Rimba', qty: 1 }
        ]
    },
    {
        id: 2,
        name: 'Paket Tektokin Berdua',
        price: 'Rp 130.000',
        duration: '1 Hari',
        status: 'available',
        image: 'tektokin-berdua.jpg',
        items: [
            { name: 'Hydropack', qty: 2 },
            { name: 'Jacket', qty: 2 },
            { name: 'Sepatu', qty: 2 },
            { name: 'Tracking Pole', qty: 2 },
            { name: 'Topi Rimba', qty: 2 }
        ]
    },
    {
        id: 3,
        name: 'Paket Partner Camp',
        price: 'Rp 100.000',
        duration: '1 Hari',
        status: 'full_booked', // Klien meminta opsi Full Booked / Tidak Tersedia
        image: 'partner-camp.jpg',
        items: [
            { name: 'Carrier 45L', qty: 1 },
            { name: 'Tenda Kap 2', qty: 1 },
            { name: 'Lampu Tenda', qty: 1 },
            { name: 'Matras Spoon', qty: 2 },
            { name: 'Kompor Kotak', qty: 1 },
            { name: 'Nesting Set', qty: 1 },
            { name: 'Sleeping Bag', qty: 2 },
            { name: 'Alat Makan (Piring, Gelas, Sendok)', qty: 2 }
        ]
    },
    {
        id: 4,
        name: 'Paket Camping 1',
        price: 'Rp 160.000',
        duration: '3 Hari',
        status: 'available',
        image: 'camping-1.jpg',
        items: [
            { name: 'Carrier 45L', qty: 1 },
            { name: 'Tenda Kap 2', qty: 1 },
            { name: 'Lampu Tenda', qty: 1 },
            { name: 'Matras Spoon', qty: 2 },
            { name: 'Sleeping Bag', qty: 2 },
            { name: 'Kompor Kotak', qty: 1 },
            { name: 'Nesting Set', qty: 1 }
        ]
    },
    {
        id: 5,
        name: 'Paket Camping 2',
        price: 'Rp 250.000',
        duration: '3 Hari',
        status: 'full_booked',
        image: 'camping-2.jpg',
        items: [
            { name: 'Carrier 60L', qty: 1 },
            { name: 'Tenda Kap 4', qty: 1 },
            { name: 'Lampu Tenda', qty: 1 },
            { name: 'Matras Foil 120x200', qty: 1 },
            { name: 'Sleeping Bag', qty: 4 },
            { name: 'Kompor Kotak', qty: 2 },
            { name: 'Nesting', qty: 2 }
        ]
    },
    {
        id: 6,
        name: 'Paket Messi 1',
        price: 'Rp 50.000',
        duration: '1 Hari',
        status: 'available',
        image: 'messi-1.jpg',
        items: [
            { name: 'Meja Lipat', qty: 1 },
            { name: 'Kursi Lipat', qty: 1 }
        ]
    }
];

function BundlingView() {
    return (
        <section id="bundling" className="bg-stone-50 py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-stone-100">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Sekaligus Informasi Aturan Jaminan dari Cetak Biru */}
                <div className="text-center mb-14 animate-fade-in-up">
                    <span className="bg-orange-50 text-hiking-orange border border-orange-100 font-extrabold text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full inline-block mb-3.5 select-none">
                        Daftar Harga Lengkap
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-hiking-darkBrown tracking-tight">
                        Pricelist Paket Hemat
                    </h2>
                    
                    <div className="mt-5 max-w-2xl mx-auto bg-amber-50/70 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-4 text-amber-900 text-xs text-left sm:text-center leading-relaxed flex flex-col sm:flex-row items-center justify-center gap-3 shadow-sm select-none">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <p className="font-medium text-stone-700">
                            <span className="text-amber-800 font-extrabold uppercase tracking-wider text-[10px] mr-1 block sm:inline">Informasi Jaminan:</span> 
                            Wajib menyerahkan kartu identitas asli (KTP / SIM / Kartu Mahasiswa) selama masa peminjaman alat.
                        </p>
                    </div>
                </div>

                {/* Grid Render Kartu Paket Hemat */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRICELIST_DATA.map((bundle) => (
                        <BundleCard key={bundle.id} bundle={bundle} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default BundlingView;