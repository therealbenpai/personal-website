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
    return await buildSQLQuery<SocialMediaAccount>(runtimeConfig, 'social', { order: 'id.asc' })
})