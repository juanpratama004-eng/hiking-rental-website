/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hiking: {
          orange: '#E67E22',       /* Warna tombol utama & aksen */
          orangeHover: '#D35400',  /* Warna tombol saat di-hover */
          darkBrown: '#4A3B32',    /* Warna background footer & hero bundling */
          lightBrown: '#5C4033',   /* Ragam warna cokelat sekunder */
          bgLight: '#F9F9F9',      /* Background umum halaman */
          card: '#FFFFFF',         /* Latar belakang kartu/form */
        },
      },
      borderRadius: {
        'hiking-sm': '4px',
        'hiking-md': '8px',
        'hiking-lg': '16px',
      }
    },
  },
  plugins: [],
}