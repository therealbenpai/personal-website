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
    image: string | 'none';
    custom_tags: CustomTag[];
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const data = (await buildSQLQuery<Friend>(runtimeConfig, 'bensfriends', { order: 'id.asc', name: `eq.${name}`, limit: '1' }))[0]
    if (data) {
        const imgData = data.image.split(':');
        switch (imgData[0]) {
            case 'grav':
                data.image = `https://thefemdevs.com/assets/images/grav/${imgData[1]}`;
                break;
            case 'dc':
                data.image = `https://ted.ac/api/discord/user/${imgData[1]}/avatar`
        }
    }
    return data;
})