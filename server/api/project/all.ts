import {
    buildSQLQuery,
    type Types,
} from "~/utils";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await buildSQLQuery<Types.Project>(runtimeConfig, 'project', { order: 'id.asc' })
})