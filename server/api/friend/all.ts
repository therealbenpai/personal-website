export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const dbReq = new DatabaseCall<Interfaces.Friend>(runtimeConfig, 'friend');
    dbReq.query.orderBy('id');
    return await quickDBCall<Interfaces.Friend>(Enums.ResponseFormat.ALL, runtimeConfig, 'friend');
})