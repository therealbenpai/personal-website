export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await Database.quick<Interfaces.Health>(Enums.ResponseFormat.All, runtimeConfig, 'health');
})