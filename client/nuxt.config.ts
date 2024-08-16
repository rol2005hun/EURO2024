// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'hu'
      },
      title: 'FIFA World Cup 2026',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css', crossorigin: 'anonymous' },
        { rel: 'icon', href: 'https://1000logos.net/wp-content/uploads/2023/05/World-Cup-2026-Emblem.png', type: 'image/x-icon' }
      ],
      meta: [
        { name: 'title', content: 'FIFA World Cup 2026 Countdown' },
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
