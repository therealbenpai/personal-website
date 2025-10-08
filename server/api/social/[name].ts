import { buildSQLQuery } from "~/utils";

interface SocialMediaAccount {
    username: string;
    identifier: string;
    link: string;
    platform: string;
    icon: string;
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const data = (await buildSQLQuery<SocialMediaAccount>(runtimeConfig, 'social', { order: 'id.asc', identifier: `eq.${name}`, limit: '1' }))[0]
    return data;
})