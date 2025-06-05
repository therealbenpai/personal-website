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
    customTags: CustomTag[];
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const supabase = createClient(runtimeConfig.supabase.url, runtimeConfig.supabase.key);
    const { data, error } = await supabase
        .from('bensfriends')
        .select('*')
        .order('id', { ascending: true });
    return data as Friend[];
})