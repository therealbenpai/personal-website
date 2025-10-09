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

const { data: projects } = await useFetch(`/api/project/all`);
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Projects</h1>
        <p class="text-lg">
            Here is a list of all of my projects. You can find more information
            about each project by clicking on the project name.
        </p>
        <div class="grid grid-cols-1 gap-4">
            <div
                v-for="project in projects"
                :key="project.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="project.link">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-2xl font-semibold">
                            {{ project.name }}
                        </h2>
                        <p class="text-lg">{{ project.description }}</p>
                        <div class="flex flex-row gap-4 my-2">
                            <span
                                :class="Mapper.getProjectPublicationColor(project.public)"
                                class="text-md px-4 py-1 rounded-2xl"
                            >
                                <Icon
                                    :name="Mapper.getProjectPublicationIcon(project.public)"
                                    size="16px"
                                    class="translate-y-0.5"
                                />
                                {{
                                    `${Mapper.processProjectStatus(project.public)} source`
                                }}
                            </span>
                            <span
                                :class="Mapper.getProjectStatusColor(project.status)"
                                class="text-md px-4 py-1 rounded-2xl"
                            >
                                <Icon
                                    :name="Mapper.getProjectStatusIcon(project.status)"
                                    size="16px"
                                    class="translate-y-0.5"
                                />
                                {{ project.status }}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
