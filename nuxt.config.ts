// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/_main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
  modules: ['@nuxt/image', '@nuxt/eslint'],
  nitro: {
    output: {
        dir: 'output',
        serverDir: 'output/server',
        publicDir: 'output/public'
    }
}
})