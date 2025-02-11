// https://nuxt.com/docs/api/configuration/nuxt-config

import { languages } from './configs/languages';
import TailwindsConfig from './configs/tailwinds.config';
import * as CORS from './src/CORS';
import _ from 'lodash';

const headers = CORS.Headers({
  CORS: CORS.WebSecurity.CORS(
    {
      maxAge: 864e2,
      allowCredentials: true,
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-HTTP-Method-Override', 'Accept', 'Origin'],
    },
    {
      embedderPolicy: 'unsafe-none',
      resourcePolicy: 'cross-origin',
      openerPolicy: 'same-origin',
    }
  ),
  CSP: CORS.WebSecurity.CSP(
    new CORS.CSPObj('imgSrc', false, [], false, true, []),
    new CORS.CSPObj('fontSrc', false, [], false, true, []),
    new CORS.CSPObj('mediaSrc', false, [], false, true, []),
    new CORS.CSPObj('childSrc', false, [], false, true, ['blob:']),
    new CORS.CSPObj('workerSrc', false, [], false, true, ['blob:']),
    new CORS.CSPObj('objectSrc', true, [], false, false, []),
    new CORS.CSPObj('defaultSrc', false, [], false, true, []),
    new CORS.CSPObj('connectSrc', false, [], false, true, []),
    new CORS.CSPObj('formAction', false, [], false, true, []),
    new CORS.CSPObj('prefetchSrc', false, [], false, true, []),
    new CORS.CSPObj('manifestSrc', false, [], true, false, []),
    new CORS.CSPObj('blockAllMixedContent', false, [], false, false, []),
    new CORS.CSPObj('styleSrc', false, ['unsafe-inline'], false, true, []),
    new CORS.CSPObj('upgradeInsecureRequests', false, [], false, false, []),
    new CORS.CSPObj('baseUri', false, [], true, false, ['benshawmean.com']),
    new CORS.CSPObj('scriptSrc', false, ['unsafe-inline', 'unsafe-eval'], true, false,
      [
        'blob:',
        [
          'benshawmean.com', 'google.com',
          'fontawesome.com', 'jsdelivr.net',
          'preline.co', 'accounts.dev',
          'vercel-scripts.com', 'clerk.dev',
          'cloudflare.com', 'cloudflareinsights.com',
        ].map(CORS.WebSecurity.CD),
      ].flat(2),
    ),
  ),
  PermissionPolicy: CORS.WebSecurity.PermissionPolicy(
    new CORS.PermissionPolicy('hid', { none: true }),
    new CORS.PermissionPolicy('usb', { none: true }),
    new CORS.PermissionPolicy('midi', { none: true }),
    new CORS.PermissionPolicy('camera', { none: true }),
    new CORS.PermissionPolicy('serial', { none: true }),
    new CORS.PermissionPolicy('battery', { none: true }),
    new CORS.PermissionPolicy('gamepad', { none: true }),
    new CORS.PermissionPolicy('autoplay', { none: true }),
    new CORS.PermissionPolicy('webShare', { self: true }),
    new CORS.PermissionPolicy('bluetooth', { none: true }),
    new CORS.PermissionPolicy('gyroscope', { none: true }),
    new CORS.PermissionPolicy('fullscreen', { self: true }),
    new CORS.PermissionPolicy('magnetometer', { none: true }),
    new CORS.PermissionPolicy('accelerometer', { none: true }),
    new CORS.PermissionPolicy('idleDetection', { none: true }),
    new CORS.PermissionPolicy('browsingTopics', { none: true }),
    new CORS.PermissionPolicy('localFonts', { wildcard: true }),
    new CORS.PermissionPolicy('screenWakeLock', { none: true }),
    new CORS.PermissionPolicy('display-capture', { none: true }),
    new CORS.PermissionPolicy('document-domain', { none: true }),
    new CORS.PermissionPolicy('encrypted-media', { none: true }),
    new CORS.PermissionPolicy('windowManagement', { none: true }),
    new CORS.PermissionPolicy('xrSpacialTracking', { none: true }),
    new CORS.PermissionPolicy('ambientLightSensor', { none: true }),
    new CORS.PermissionPolicy('executionWhileNotRendered', { none: true }),
    new CORS.PermissionPolicy('executionWhileOutOfViewport', { none: true }),
    new CORS.PermissionPolicy('microphone', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('storageAccess', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('otpCredentials', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('pictureInPicture', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('speakerSelection', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('identityCredentialsGet', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('publickeyCredentialsGet', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('publickeyCredentialsCreate', { self: true, domains: CORS.WebSecurity.CD('benshawmean.com') }),
    new CORS.PermissionPolicy('geolocation', { self: true, domains: ['googleapis.com', 'benshawmean.com'].map(CORS.WebSecurity.CD).flat(2) }),
    new CORS.PermissionPolicy('payment', { self: true, domains: [...CORS.WebSecurity.CD('benshawmean.com'), ...CORS.WebSecurity.CD('stripe.com')] }),
  ),
  HSTS: CORS.WebSecurity.HSTS({ ma: 31536e3, iSD: true, pl: true }),
});

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
      headers: _.fromPairs(headers),
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
})