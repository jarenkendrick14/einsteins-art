/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'art-black': '#0f0f0f',
        'art-gold': '#d4af37',
        'art-cream': '#f5f5f0',
        'art-gray': '#1f1f1f'
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(15, 15, 15, 0.9), rgba(15, 15, 15, 0.7)), url('https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/504128403_722888486958707_1219131620446287358_n.png?_nc_cat=100&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFgba2CO_NE4J1jTp7JSs66eCZrkCxZ9b94JmuQLFn1v0JX1mGqCjq8SsGnbAEe0dy0JT_EbK-j-mjZh1TpOZZ7&_nc_ohc=f3m7QwpDk88Q7kNvwHXlKqi&_nc_oc=AdmyAV3epPVJmsCDCzztEMZMLZ00_MveqXHKY8_YKx4RLsoJt8ejineunGknYrn8eb0&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=AjHXw-e-OXY-STLFpuJaSg&oh=00_AfndhR7Axb4MbQxjRI_McPaZUkm6TNYQNXrbyoZ2OFuVyg&oe=693B4DDE')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'bounce-short': 'bounceShort 0.5s ease-in-out 1'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceShort: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
}