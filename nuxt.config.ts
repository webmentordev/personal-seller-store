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
  app: {
    head: {
      title: 'StoreHubMultan - Buy & Sell used items in multan, Pakistan',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/app-store.png' },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
