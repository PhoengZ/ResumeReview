// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:['~/assets/css/main.css'],
  runtimeConfig:{
    geminiToken: process.env.GEMINI_API_KEY
  },
  vite:{
    plugins:[
      tailwindcss()
    ]
  }
})
