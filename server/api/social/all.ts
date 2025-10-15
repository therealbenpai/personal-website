export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await quickDBCall<Interfaces.SocialMediaAccount>(Enums.ResponseFormat.ALL, runtimeConfig, 'social');
})