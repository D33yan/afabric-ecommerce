/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			  peach: {
				50: '#FFF5F0',
				100: '#FFE6D5',
				200: '#FFD0B5',
				300: '#FFB088',
				400: '#FF9466',
				500: '#FF7733',
				600: '#FF5C00',
				700: '#CC4A00',
				800: '#993800',
				900: '#662500',
			  },
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  animation: {
			'text-shine': 'shine 8s linear infinite',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
