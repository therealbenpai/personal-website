export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await quickDBCall<Interfaces.ContactMethod>(Enums.ResponseFormat.ALL, runtimeConfig, 'contact');
})