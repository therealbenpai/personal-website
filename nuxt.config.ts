// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

import TailwindsConfig from './tailwinds.config';
import { CSPObj, CD, BaseValues } from './lib/security';

export default defineNuxtConfig({
    $development: {
        devtools: {
            enabled: true,
            vscode: {
                enabled: true,
                host: 'localhost',
                port: 9229,
            },
            telemetry: true,
            timeline: {
                enabled: true,
            },
            componentInspector: true,
            assets: {
                uploadExtensions: '*',
            },
        },
    },

    $env: { staging: {} },

    app: {
        head: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'color-scheme', content: 'dark' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: 'https://thefemdevs.com/assets/images/grav/329f481757ca49ce98d31d9041285a11',
                },
            ],
        },
    },

    compatibilityDate: {
        default: '2024-11-01',
    },

    experimental: {
        appManifest: true,
        headNext: true,
    },

    features: {
        inlineStyles: true,
        devLogs: 'silent',
    },

    future: {
        compatibilityVersion: 4,
    },

    icon: {
        collections: [
            'heroicons-solid',
            'fa-solid',
            'fa-brands',
            'simple-icons',
            'material-symbols',
        ],
    },

    modules: [
        '@nuxt/devtools',
        '@nuxtjs/tailwindcss',
        '@nuxt/fonts',
        '@nuxt/scripts',
        '@nuxt/icon',
        'nuxt-security',
    ],

    routeRules: {
        '/**': {
            isr: false,
        },
    },

    runtimeConfig: {
        supabase: {
            url: process.env.SUPABASE_URL,
            key: process.env.SUPABASE_KEY,
            serviceKey: process.env.SUPABASE_SERVICE_KEY,
        },
    },

    tailwindcss: {
        exposeConfig: true,
        viewer: { endpoint: '/_tailwind', exportViewer: true },
        config: TailwindsConfig,
    },

    typescript: {
        typeCheck: 'build',
    },

    vite: {
        build: {
            rollupOptions: {
                external: ['unenv/runtime/mock/noop'],
            },
        },
        server: {
            fs: {
                strict: true,
            },
        },
        vue: {
            customElement: true,
        },
        vueJsx: {
            mergeProps: true,
        },
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
                'img-src': new CSPObj({
                    domains: ['data:', 'blob:',
                        [
                            'benshawmean.com', 'google.com',
                            'fontawesome.com', 'jsdelivr.net',
                            'preline.co', 'accounts.dev', 'clerk.dev',
                            'cloudflare.com', 'cloudflareinsights.com',
                            'thefemdevs.com', 'localhost',
                        ].map(CD),
                    ].flat(2),
                }).parse(),
                'child-src': BaseValues.csp.blob,
                'worker-src': BaseValues.csp.blob,
                'object-src': BaseValues.csp.none,
                'font-src': BaseValues.csp.wildcard,
                'media-src': BaseValues.csp.wildcard,
                'default-src': BaseValues.csp.wildcard,
                'connect-src': BaseValues.csp.wildcard,
                'form-action': BaseValues.csp.wildcard,
                'prefetch-src': BaseValues.csp.wildcard,
                'manifest-src': BaseValues.csp.self,
                'style-src': BaseValues.csp.unsafeInline,
                'base-uri': new CSPObj({ self: true, domains: ['benshawmean.com'] }).parse(),
                'script-src': new CSPObj({
                    self: true, directives: ['unsafe-inline', 'unsafe-eval'], domains: [
                        'blob:',
                        [
                            'benshawmean.com', 'google.com',
                            'fontawesome.com', 'jsdelivr.net',
                            'preline.co', 'accounts.dev', 'clerk.dev',
                            'cloudflare.com', 'cloudflareinsights.com',
                            'thefemdevs.com', 'localhost',
                        ].map(CD),
                    ].flat(2),
                }).parse(),
            },
            permissionsPolicy: {
                'hid': BaseValues.permissions.none,
                'usb': BaseValues.permissions.none,
                'midi': BaseValues.permissions.none,
                'camera': BaseValues.permissions.none,
                'serial': BaseValues.permissions.none,
                'battery': BaseValues.permissions.none,
                'gamepad': BaseValues.permissions.none,
                'payment': BaseValues.permissions.none,
                'autoplay': BaseValues.permissions.none,
                'web-share': BaseValues.permissions.self,
                'bluetooth': BaseValues.permissions.none,
                'gyroscope': BaseValues.permissions.none,
                'fullscreen': BaseValues.permissions.self,
                'microphone': BaseValues.permissions.none,
                'geolocation': BaseValues.permissions.none,
                'magnetometer': BaseValues.permissions.none,
                'accelerometer': BaseValues.permissions.none,
                'idle-detection': BaseValues.permissions.none,
                'storage-access': BaseValues.permissions.none,
                'otp-credentials': BaseValues.permissions.none,
                'browsing-topics': BaseValues.permissions.none,
                'local-fonts': BaseValues.permissions.wildcard,
                'display-capture': BaseValues.permissions.none,
                'document-domain': BaseValues.permissions.none,
                'encrypted-media': BaseValues.permissions.none,
                'screen-wake-lock': BaseValues.permissions.none,
                'speaker-selection': BaseValues.permissions.none,
                'window-management': BaseValues.permissions.none,
                'xr-spatial-tracking': BaseValues.permissions.none,
                'ambient-light-sensor': BaseValues.permissions.none,
                'picture-in-picture': BaseValues.permissions.wildcard,
                'identity-credentials-get': BaseValues.permissions.self,
                'publickey-credentials-get': BaseValues.permissions.self,
                'execution-while-not-rendered': BaseValues.permissions.none,
                'publickey-credentials-create': BaseValues.permissions.self,
                'execution-while-out-of-viewport': BaseValues.permissions.none,
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
            referrerPolicy: 'strict-origin',
        },
        hidePoweredBy: true,
    },

    nitro: {
        preset: 'cloudflare-pages',
    },
});