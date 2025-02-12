// https://nuxt.com/docs/api/configuration/nuxt-config

import { languages } from './configs/languages';
import TailwindsConfig from './configs/tailwinds.config';

const caab = (v: any) => Array.isArray(v) && v;

const CD = (domain: string) => Array.of(domain, `*.${domain} `);

class CSPObj {
  none: boolean;
  directives: string[];
  self: boolean;
  wildcard: boolean;
  domains: string[];
  constructor(
    none: boolean,
    directives: string[],
    self: boolean,
    wildcard: boolean,
    domains: string[]
  ) {
    this.none = none;
    this.directives = directives;
    this.self = self;
    this.wildcard = wildcard;
    this.domains = domains;
  }
  parse() {
    if (this.none) return `'none'`;
    return [
      caab(this.directives) ? this.directives.map(v => `'${v}'`) : [],
      this.wildcard ? '*' : '',
      this.self ? "'self'" : '',
      caab(this.domains) ? this.domains : [],
    ].flat(2);
  }
}

class PermissionPolicy {
  none: boolean;
  self: boolean;
  wildcard: boolean;
  src: boolean;
  domains: string[];
  constructor(data: {
    none?: boolean,
    self?: boolean,
    wildcard?: boolean,
    src?: boolean,
    domains?: string[]
  }) {
    this.none = data.none ?? false;
    this.self = data.self ?? false;
    this.wildcard = data.wildcard ?? false;
    this.src = data.src ?? false;
    this.domains = data.domains ?? [];
  }
  toString() {
    if (this.none) return '()';
    if (this.wildcard) return '*';
    return [
      this.src ? 'src' : '',
      this.self ? "self" : '',
      caab(this.domains) ? this.domains : [],
    ].flat(2);
  }
}

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
    'nuxt-security'
  ],
  routeRules: {},
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
  security: {
    corsHandler: {
      maxAge: String(864e2),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-HTTP-Method-Override', 'Accept', 'Origin'],
    },
    headers: {
      contentSecurityPolicy: {
        'img-src': new CSPObj(false, [], false, true, [
          'data:', 'blob:',
          [
            'benshawmean.com', 'google.com',
            'fontawesome.com', 'jsdelivr.net',
            'preline.co', 'accounts.dev',
            'vercel-scripts.com', 'clerk.dev',
            'cloudflare.com', 'cloudflareinsights.com',
            'thefemdevs.com', 'localhost',
          ].map(CD),
        ].flat(2)).parse(),
        'font-src': new CSPObj(false, [], false, true, []).parse(),
        'media-src': new CSPObj(false, [], false, true, []).parse(),
        'child-src': new CSPObj(false, [], false, true, ['blob:']).parse(),
        'worker-src': new CSPObj(false, [], false, true, ['blob:']).parse(),
        'object-src': new CSPObj(true, [], false, false, []).parse(),
        'default-src': new CSPObj(false, [], false, true, []).parse(),
        'connect-src': new CSPObj(false, [], false, true, []).parse(),
        'form-action': new CSPObj(false, [], false, true, []).parse(),
        'prefetch-src': new CSPObj(false, [], false, true, []).parse(),
        'manifest-src': new CSPObj(false, [], true, false, []).parse(),
        'style-src': new CSPObj(false, ['unsafe-inline'], false, true, []).parse(),
        'base-uri': new CSPObj(false, [], true, false, ['benshawmean.com']).parse(),
        'script-src': new CSPObj(false, ['unsafe-inline', 'unsafe-eval'], true, false,
          [
            'blob:',
            [
              'benshawmean.com', 'google.com',
              'fontawesome.com', 'jsdelivr.net',
              'preline.co', 'accounts.dev',
              'vercel-scripts.com', 'clerk.dev',
              'cloudflare.com', 'cloudflareinsights.com',
              'thefemdevs.com', 'localhost',
            ].map(CD),
          ].flat(2),
        ).parse(),
      },
      permissionsPolicy: {
        'hid': new PermissionPolicy({ none: true }).toString(),
        'usb': new PermissionPolicy({ none: true }).toString(),
        'midi': new PermissionPolicy({ none: true }).toString(),
        'camera': new PermissionPolicy({ none: true }).toString(),
        'serial': new PermissionPolicy({ none: true }).toString(),
        'battery': new PermissionPolicy({ none: true }).toString(),
        'gamepad': new PermissionPolicy({ none: true }).toString(),
        'payment': new PermissionPolicy({ none: true }).toString(),
        'autoplay': new PermissionPolicy({ none: true }).toString(),
        'web-share': new PermissionPolicy({ self: true }).toString(),
        'bluetooth': new PermissionPolicy({ none: true }).toString(),
        'gyroscope': new PermissionPolicy({ none: true }).toString(),
        'fullscreen': new PermissionPolicy({ self: true }).toString(),
        'microphone': new PermissionPolicy({ none: true }).toString(),
        'geolocation': new PermissionPolicy({ none: true }).toString(),
        'magnetometer': new PermissionPolicy({ none: true }).toString(),
        'accelerometer': new PermissionPolicy({ none: true }).toString(),
        'idle-detection': new PermissionPolicy({ none: true }).toString(),
        'storage-access': new PermissionPolicy({ none: true }).toString(),
        'otp-credentials': new PermissionPolicy({ none: true }).toString(),
        'browsing-topics': new PermissionPolicy({ none: true }).toString(),
        'local-fonts': new PermissionPolicy({ wildcard: true }).toString(),
        'screen-wake-lock': new PermissionPolicy({ none: true }).toString(),
        'display-capture': new PermissionPolicy({ none: true }).toString(),
        'document-domain': new PermissionPolicy({ none: true }).toString(),
        'encrypted-media': new PermissionPolicy({ none: true }).toString(),
        'speaker-selection': new PermissionPolicy({ none: true }).toString(),
        'window-management': new PermissionPolicy({ none: true }).toString(),
        'xr-spatial-tracking': new PermissionPolicy({ none: true }).toString(),
        'ambient-light-sensor': new PermissionPolicy({ none: true }).toString(),
        'picture-in-picture': new PermissionPolicy({ wildcard: true }).toString(),
        'identity-credentials-get': new PermissionPolicy({ self: true }).toString(),
        'publickey-credentials-get': new PermissionPolicy({ self: true }).toString(),
        'execution-while-not-rendered': new PermissionPolicy({ none: true }).toString(),
        'publickey-credentials-create': new PermissionPolicy({ self: true }).toString(),
        'execution-while-out-of-viewport': new PermissionPolicy({ none: true }).toString(),
      },
      strictTransportSecurity: {
        includeSubdomains: true,
        preload: true,
        maxAge: 31536e3,
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginResourcePolicy: 'cross-origin',
      crossOriginOpenerPolicy: 'same-origin',
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'DENY',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '1; mode=block',
      referrerPolicy: 'strict-origin'
    },
    csrf: {
      enabled: true,
      cookie: {
        secure: true,
        sameSite: 'strict',
        httpOnly: true,
      },
    },
    hidePoweredBy: true,
    rateLimiter: {
      interval: 60,
      tokensPerInterval: 300,
      throwError: true,
    },
  },
})