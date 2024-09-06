// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/supabase'],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
  app: {
    head: {
      title: 'Shopiverse',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js',
          defer: true,
        },
        {
          src: 'https://js.stripe.com/v3/',
          defer: true,
        }
      ],
    },
  },
  runtimeConfig:{
    stripeSK: process.env.STRIPE_SK_KEY,
    public:{
      stripePK: process.env.STRIPE_PK_KEY
    }
  }
});
