// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'hu'
      },
      title: 'UEFA Euro 2024',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css', crossorigin: 'anonymous' },
        { rel: 'icon', href: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/UEFA_Euro_2024_Logo.svg/440px-UEFA_Euro_2024_Logo.svg.png', type: 'image/x-icon' }
      ],
      meta: [
        { name: 'title', content: 'UEFA Euro 2024 Countdown' },
        { name: 'description', content: 'Check it' }
      ]
    },
    rootId: 'app'
  },
  static: {
    directory: 'static'
  }
}

export default config;
