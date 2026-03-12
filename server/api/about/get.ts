export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await Database.quick<Interfaces.AboutSection>(Enums.ResponseFormat.All, runtimeConfig, 'about')
})