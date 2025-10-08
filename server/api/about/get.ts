import { buildSQLQuery } from "~/utils";

interface ContactMethod {
    header: string;
    description: string;
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await buildSQLQuery<ContactMethod>(runtimeConfig, 'about', { order: 'id.asc' })
})