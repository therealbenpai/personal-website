export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    return await quickDBCall<Interfaces.Project>(Enums.ResponseFormat.ONE, runtimeConfig, 'project', { name });
})