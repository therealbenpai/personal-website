export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const query = new QueryHelper()
        .equal('name', name!)
        .orderBy('id')
        .addLimit(1);
    return (await Database.query<ContactMethod>(runtimeConfig, 'contact', query)).first;
})