export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await quickDBCall<Interfaces.AboutSection>(Enums.ResponseFormat.ALL, runtimeConfig, 'about')
})