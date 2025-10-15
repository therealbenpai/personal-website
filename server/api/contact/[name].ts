export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    return await quickDBCall<Interfaces.ContactMethod>(Enums.ResponseFormat.ONE, runtimeConfig, 'contact', { name })
})