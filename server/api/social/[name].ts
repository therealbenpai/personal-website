export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const username = getRouterParam(event, 'name');
    return await Database.quick<Interfaces.SocialMediaAccount>(Enums.ResponseFormat.ONE, runtimeConfig, 'social', { username });
})