export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const dbReq = new DatabaseCall<ContactMethod>(runtimeConfig, 'contact');
    dbReq.query.orderBy('id');
    return await dbReq.result.all;
})