export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const req = new DatabaseCall<Pick<Interfaces.JWKS, 'kid' | 'x' | 'y'>>(runtimeConfig, 'jwks', 'anon')
    req.query.addSelect('kid', 'x', 'y');

    const jwksData = await req.result.all;

    return {
        keys: jwksData?.map((jwk) => ({
            kty: 'EC',
            use: 'sig',
            crv: 'P-256',
            alg: 'ES256',
            ...jwk,
        })) || [],
    };
})