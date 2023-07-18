// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      noscript: [{ children: 'JavaScript is required' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon'],
});
