import {
    buildSQLQuery,
    type Types,
} from "~/utils";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const data = (await buildSQLQuery<Types.Project>(runtimeConfig, 'project', { order: 'id.asc', name: `eq.${name}`, limit: '1' }))[0]
    return data;
})