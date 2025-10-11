export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const dbReq = new DatabaseCall<ContactMethod>(runtimeConfig, 'contact');
    dbReq.query
        .equal('name', name!)
        .orderBy('id')
        .addLimit(1);
    return await dbReq.result.first;
})