import { buildSQLQuery } from "~/utils";

interface ContactMethod {
    name: string;
    identifier: string;
    link: string;
    icon: string;
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await buildSQLQuery<ContactMethod>(runtimeConfig, 'contact', { order: 'id.asc' })
})