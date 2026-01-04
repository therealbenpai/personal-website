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
        nitro: {
            preset: "deno"
        }
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

    compatibilityDate: '2025-12-10',

    experimental: {
        appManifest: true,
        headNext: true,
    },

    features: {
        inlineStyles: true,
        devLogs: 'silent',
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

    modules: ['@nuxt/devtools', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/scripts', '@nuxt/icon', 'nuxt-security', 'nuxt-og-image'],

    routeRules: {
        '/**': {
            isr: false,
        },
    },

    runtimeConfig: {
        supabase: {
            url: process.env.SUPABASE_URL,
            keys: {
                anon: process.env.SUPABASE_KEY,
                service: process.env.SUPABASE_SERVICE_KEY,
            },
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
            origin: '*',
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
                            'ted.ac', 'thefemdevs.com', 'localhost',
                        ].map(CD),
                    ].flat(2),
                }).parse(),
                'child-src': BaseValues.csp.blob,
                'worker-src': BaseValues.csp.blob,
                'object-src': BaseValues.csp.none,
                'font-src': new CSPObj({
                    self: true, domains: [
                        'data:',
                    ], wildcard: true,
                }).parse(),
                'media-src': BaseValues.csp.wildcard,
                'default-src': BaseValues.csp.wildcard,
                'connect-src': new CSPObj({
                    wildcard: true, domains: [
                        'data:', 'ws:',
                    ],
                }).parse(),
                'form-action': BaseValues.csp.wildcard,
                'prefetch-src': BaseValues.csp.wildcard,
                'manifest-src': BaseValues.csp.self,
                'style-src': new CSPObj({
                    self: true, directives: ['unsafe-inline'], domains: [
                        'fonts.googleapis.com',
                    ],
                }).parse(),
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
                ...Object.fromEntries(
                    [
                        'hid', 'usb', 'midi', 'camera', 'serial', 'gamepad', 'payment',
                        'autoplay', 'bluetooth', 'gyroscope', 'microphone', 'geolocation',
                        'magnetometer', 'accelerometer', 'idle-detection', 'storage-access',
                        'otp-credentials', 'display-capture', 'encrypted-media',
                        'screen-wake-lock', 'window-management', 'xr-spatial-tracking',
                    ].map((p) => [p, BaseValues.permissions.none]),
                ),
                ...Object.fromEntries(
                    ['web-share', 'fullscreen', 'identity-credentials-get', 'publickey-credentials-get', 'publickey-credentials-create']
                        .map((p) => [p, BaseValues.permissions.self]),
                ),
                ...Object.fromEntries(
                    ['local-fonts', 'picture-in-picture'].map((p) => [p, BaseValues.permissions.wildcard]),
                ),
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
        preset: 'deno-deploy'
    },
});