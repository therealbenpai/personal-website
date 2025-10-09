export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const query = new QueryHelper().orderBy('id');
    return (await Database.query<Project>(runtimeConfig, 'project', query)).all;
})