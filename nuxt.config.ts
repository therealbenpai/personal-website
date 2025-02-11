// https://nuxt.com/docs/api/configuration/nuxt-config

import { languages } from './configs/languages';
import TailwindsConfig from './configs/tailwinds.config';
import headers from './configs/CORS';

export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true },
      '/api/**': {
        isr: false,
        headers: {
          'Cache-Control': 'no-cache'
        }
      },
      '/blog/**': {
        isr: false,
        ssr: true,
      }
    },
    content: {
      database: {
        type: 'd1',
        bindingName: 'main',
      },
    }
  },
  $development: {},
  $env: { staging: {} },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'color-scheme', content: 'dark' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://thefemdevs.com/assets/images/grav/329f481757ca49ce98d31d9041285a11' },
      ],
    }
  },
  compatibilityDate: {
    default: '2024-11-01',
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true
    },
    renderer: {
      anchorLinks: true,
    },
    watch: {
      enabled: true,
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        }
      }
    }
  },
  devtools: {
    enabled: true,
    vscode: {
      enabled: true,
      host: 'localhost',
      port: 9229,
    },
    telemetry: true,
  },
  experimental: {
    appManifest: true,
    headNext: true,
  },
  features: {
    inlineStyles: true,
    devLogs: "silent",
  },
  future: {
    compatibilityVersion: 4
  },
  i18n: {
    vueI18n: './configs/i18n.config.ts',
    locales: languages,
    defaultLocale: 'en-US',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/turnstile',
  ],
  routeRules: {
    '/**': {
      headers,
    },
  },
  runtimeConfig: {
    cloudflare: {
      auth: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: { endpoint: '/_tailwind', exportViewer: true },
    config: TailwindsConfig as any
  },
  turnstile: {
    siteKey: process.env.TURNSTILE_SITE_KEY,
    secretKey: process.env.TURNSTILE_SECRET_KEY,
    addValidateEndpoint: true,
  },
  typescript: {
    typeCheck: "build",
  },
  vite: {
    server: {
      fs: {
        strict: true,
      }
    },
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  icon: {
    serverBundle: {
      collections: ['mdi', 'fa-solid', 'fa-brands', 'simple-icons', 'material-symbols'] // <!--- this
    }
  }
})