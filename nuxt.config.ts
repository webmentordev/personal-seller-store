// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/app.css'],
  runtimeConfig: {
    apiUrl: '',
    public: {
      store: '',
      phone: '',
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
