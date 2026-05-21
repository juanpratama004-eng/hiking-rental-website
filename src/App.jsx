import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomeView from './views/HomeView';
import CatalogView from './views/CatalogView'; // Impor Katalog Eceran
import BundlingView from './views/BundlingView';
import ProcedureView from './views/ProcedureView';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-hiking-bgLight font-sans selection:bg-orange-100 selection:text-hiking-orange">
      {/* Navigasi Utama */}
      <Navbar />

      {/* Stack Halaman Utama */}
      <main className="flex-grow">
        <HomeView />
        <CatalogView />  {/* Tampil Pertama Setelah Banner */}
        <BundlingView /> {/* Tampil Kedua (Pricelist Paket Hemat) */}
        <ProcedureView />{/* Tampil Ketiga (Prosedur & Kontak) */}
      </main>

      {/* Kaki Halaman */}
      <Footer />
    </div>
  );
}

export default App;