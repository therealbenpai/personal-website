// server/api/jwt/keys/pub.get.ts
import { exportJWK } from 'jose'

export default defineEventHandler(async (event) => {
    const rtc = useRuntimeConfig(event)
    const publicKeyPem = rtc.public.jwk.pubKey

    if (!publicKeyPem) {
        throw createError({ statusCode: 500, statusMessage: 'Missing public key' })
    }

    // Decode from base64 and import as RSA-PSS key
    const key = await crypto.subtle.importKey(
        'spki',
        Buffer.from(publicKeyPem, 'base64'),
        { name: 'RSA-PSS', hash: 'SHA-256' },
        true,
        ['verify']
    )

    const jwk = await exportJWK(key)
    jwk.alg = 'PS256'
    jwk.use = 'sig'

    return { keys: [jwk] }
})
