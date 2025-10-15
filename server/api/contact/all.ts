export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await Database.quick<Interfaces.ContactMethod>(Enums.ResponseFormat.ALL, runtimeConfig, 'contact');
})