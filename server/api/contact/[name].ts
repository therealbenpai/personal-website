import { buildSQLQuery } from "~/utils";

interface ContactMethod {
    name: string;
    identifier: string;
    link: string;
    icon: string;
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const data = (await buildSQLQuery<ContactMethod>(runtimeConfig, 'contact', { order: 'id.asc', name: `eq.${name}`, limit: '1' }))[0]
    return data;
})