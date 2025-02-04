// https://nuxt.com/docs/api/configuration/nuxt-config

import { languages } from './configs/languages';
import TailwindsConfig from './configs/tailwinds.config';

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
    }
  },
  $development: {},
  $env: {staging: {}},
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
  ],
  runtimeConfig: {
    aws: {
      region: 'us-east-2',
      auth: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: { endpoint: '/_tailwind', exportViewer: true },
    config: TailwindsConfig as any
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
})