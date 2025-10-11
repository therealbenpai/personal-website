export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const dbReq = new DatabaseCall<Project>(runtimeConfig, 'project');
    dbReq.query
        .equal('name', name!)
        .orderBy('id')
        .addLimit(1);
    return await dbReq.result.first;
})