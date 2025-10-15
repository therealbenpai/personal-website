export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await Database.quick<Interfaces.Project>(Enums.ResponseFormat.ALL, runtimeConfig, 'project');
})