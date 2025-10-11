export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const dbReq = new DatabaseCall<SocialMediaAccount>(runtimeConfig, 'social');
    dbReq.query.orderBy('id');
    return await dbReq.result.all;
    const query = new QueryHelper().orderBy('id');
    return (await DBQuery<SocialMediaAccount>(runtimeConfig, 'social', query)).all;
})