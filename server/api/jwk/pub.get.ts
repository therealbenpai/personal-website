// server/api/jwt/keys/pub.get.ts
import { createPublicKey } from 'crypto';
import { exportJWK } from 'jose';

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const publicPem = runtimeConfig.public.jwk.pubKey;
    const key = createPublicKey(publicPem);
    const jwk = await exportJWK(key);
    jwk.alg = 'RS256';
    jwk.use = 'sig';
    jwk.kid = 'main-key'; // identifier if you rotate keys

    return {
        keys: [jwk],
    };
})
