export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await Database.quick<Interfaces.Friend>(Enums.ResponseFormat.ALL, runtimeConfig, 'friend');
})