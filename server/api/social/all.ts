export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await Database.quick<Interfaces.SocialMediaAccount>(Enums.ResponseFormat.All, runtimeConfig, 'social');
})