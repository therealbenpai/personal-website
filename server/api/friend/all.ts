import { buildSQLQuery } from "~/utils";

interface CustomTag {
    text: string;
    color: string;
    icon: string;
}

interface Friend {
    id: number;
    name: string;
    description: string;
    active: boolean;
    start: string;
    end: string | null;
    aliases: string;
    customTags: CustomTag[];
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    return await buildSQLQuery<Friend>(runtimeConfig, 'friend', { order: 'id.asc' })
})