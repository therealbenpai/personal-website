export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const dbReq = new DatabaseCall<AboutSection>(runtimeConfig, 'about');
    dbReq.query.orderBy('id')
    return await dbReq.result.all;
})