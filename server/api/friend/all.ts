export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const dbReq = new DatabaseCall<Friend>(runtimeConfig, 'friend');
    dbReq.query.orderBy('id');
    return await dbReq.result.all;
})