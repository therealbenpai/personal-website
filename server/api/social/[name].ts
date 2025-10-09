export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const query = new QueryHelper()
        .orderBy('id')
        .equal('identifier', name!)
        .addLimit(1);
    return (await Database.query<SocialMediaAccount>(runtimeConfig, 'social', query)).first;
})