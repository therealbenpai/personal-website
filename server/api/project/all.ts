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
    return await buildSQLQuery<Project>(runtimeConfig, 'project', { order: 'id.asc' })
})