<script setup lang="ts">
useHead({
    title: 'Projects',
});

useSeoMeta({
    description: 'A list of all of my projects.',
    ogTitle: 'Projects',
    ogDescription: 'A list of all of my projects.',
    ogUrl: 'https://benshawmean.com/projects',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Projects',
    twitterDescription: 'A list of all of my projects.',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
});

const KeyMap = {
    'in progress': 'heroicons-solid:clock',
    beta: 'heroicons-solid:sparkles',
    released: 'heroicons-solid:check-circle',
    archived: 'heroicons-solid:archive',
    dropped: 'heroicons-solid:x-circle',
};

const route = useRoute();
const { project } = route.params;
const { data: projectData } = await useFetch(`/api/project/${project}`);
</script>

<template>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-if="!projectData"
    >
        <h1 class="text-4xl font-bold">No Project Found Here</h1>
        <p class="text-lg">
            We were unable to find a project by this name. Could you have typed
            it in wrong?
        </p>
    </div>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-else-if="!Array.isArray(projectData) && projectData"
    >
        <h1 class="flex flex-row gap-6 text-4xl font-semibold">
            {{ projectData.name }}
        </h1>
        <p class="text-md text-stone-300" v-if="projectData.description">
            <span class="text-2xl font-extrabold">" </span>
            <span class="italic underline text-justify">{{
                projectData.description
            }}</span>
            <span class="text-2xl font-extrabold"> "</span>
        </p>
        <div class="flex flex-row gap-4 my-2">
            <div class="flex flex-row gap-4 my-2">
                <span
                    :class="{
                        'bg-green-500': projectData.public,
                        'bg-red-500': !projectData.public,
                    }"
                    class="text-md px-4 py-1 rounded-2xl"
                >
                    <Icon
                        :name="
                            projectData.public
                                ? 'material-symbols:book-outline'
                                : 'material-symbols:lock-outline'
                        "
                        size="16px"
                        class="translate-y-0.5"
                    />
                    {{ `${projectData.public ? 'open' : 'closed'} source` }}
                </span>
                <span
                    :class="{
                        'bg-green-500': projectData.status === 'released',
                        'bg-yellow-500': projectData.status === 'beta',
                        'bg-orange-500': projectData.status === 'in progress',
                        'bg-red-500': projectData.status === 'archived',
                        'bg-gray-500': projectData.status === 'dropped',
                    }"
                    class="text-md px-4 py-1 rounded-2xl"
                >
                    <Icon
                        :name="KeyMap[projectData.status]"
                        size="16px"
                        class="translate-y-0.5"
                    />
                    {{ projectData.status }}
                </span>
            </div>
        </div>
    </div>
</template>
