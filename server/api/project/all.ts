export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await quickDBCall<Interfaces.Project>(Enums.ResponseFormat.ALL, runtimeConfig, 'project');
})