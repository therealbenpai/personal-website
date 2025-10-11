export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const dbReq = new DatabaseCall<Project>(runtimeConfig, 'project');
    dbReq.query.orderBy('id');
    return await dbReq.result.all;
})