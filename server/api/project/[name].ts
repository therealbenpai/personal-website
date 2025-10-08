import { buildSQLQuery } from "~/utils";

const KeyMap = {
    'in progress': 'heroicons-solid:clock',
    beta: 'heroicons-solid:sparkles',
    released: 'heroicons-solid:check-circle',
    archived: 'heroicons-solid:archive',
    dropped: 'heroicons-solid:x-circle',
};

type ProjectStatus = keyof typeof KeyMap;

interface Project {
    name: string;
    description: string;
    link: string;
    public: boolean;
    status: ProjectStatus;
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event);
    const name = getRouterParam(event, 'name');
    const data = (await buildSQLQuery<Project>(runtimeConfig, 'project', { order: 'id.asc', name: `eq.${name}`, limit: '1' }))[0]
    return data;
})