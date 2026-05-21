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
        <section id="bundling" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8 w-full border-t border-gray-100">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Sekaligus Informasi Aturan Jaminan dari Cetak Biru */}
                <div className="text-center mb-12">
                    <span className="text-hiking-orange font-bold text-xs uppercase tracking-widest block mb-1">Daftar Harga Lengkap</span>
                    <h2 className="text-3xl font-extrabold text-hiking-darkBrown tracking-tight">
                        Pricelist Paket Hemat
                    </h2>
                    <div className="mt-3 max-w-xl mx-auto bg-amber-50 border border-amber-200 rounded-hiking-md p-3 text-amber-800 text-xs leading-relaxed">
                        <strong>💡 Informasi Penting:</strong> Wajib menyerahkan kartu identitas asli (KTP / SIM / Kartu Mahasiswa / Kartu Pegawai) sebagai jaminan selama masa peminjaman alat.
                    </div>
                </div>

                {/* Grid Render Kartu Paket Hemat */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRICELIST_DATA.map((bundle) => (
                        <BundleCard key={bundle.id} bundle={bundle} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default BundlingView;