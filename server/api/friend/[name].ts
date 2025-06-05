import { createClient } from '@supabase/supabase-js';

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
    const supabase = createClient(runtimeConfig.supabase.url, runtimeConfig.supabase.key);
    const response = await supabase
        .from('bensfriends')
        .select('*')
        .eq('name', name)
        .limit(1)
        .single()
    const data = response.data as Friend;
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
    return data as Friend;
})