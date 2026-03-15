export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        weprom: {
          dark: '#0f172a',    
          gold: '#94a3b8',    
        }
      },
      fontFamily: {
        // Asignamos las fuentes según el estilo de la imagen
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], // Para Títulos y Logos
        serif: ['Lora', 'serif'], // Para Itálicas y Authority Statements
      }
    },
  },
  plugins: [],
}