/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ─── Colores exactos de synthia.mx ───────────────────────────────
      colors: {
        synthia: {
          blue:       '#226AF8', // fondo secciones principales (rgb 34 106 248)
          navy:       '#072146', // fondo oscuro / navbar overlay (rgb 7 33 70)
          'navy-dark':'#071F3B', // fondo más oscuro (rgb 7 31 59)
          'deep-blue':'#0014B0', // azul profundo (rgb 0 20 176)
          green:      '#61CE70', // botón CTA "Conoce más" (rgb 97 206 112)
          white:      '#FFFFFF',
        },
      },
      // ─── Tipografía ───────────────────────────────────────────────────
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // ─── Espaciado y tamaños de contenedor ───────────────────────────
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
