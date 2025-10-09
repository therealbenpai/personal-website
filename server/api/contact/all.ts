export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const query = new QueryHelper().orderBy('id');
    return (await Database.query<ContactMethod>(runtimeConfig, 'contact', query)).all;
})