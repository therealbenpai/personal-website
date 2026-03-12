<script setup lang="ts">
const route = useRoute();
const { project } = route.params;
const { data: projectData } = await useFetch(`/api/project/${project}`);

if (projectData.value && !Array.isArray(projectData.value)) {
    defineOgImageComponent(
        'ProjectMetaBanner',
        {
            name: projectData.value.name || 'Unknown',
            icon: 'mdi:github',
        },
        {
            cacheMaxAgeSeconds: 180,
            alt: `Project Banner of ${projectData.value.name || 'Unknown'}`
        }
    );

    const pageTitle = `${projectData.value.name} - Benpai's Website`,
        pageDescription =
            projectData.value.description.split('\n')[0] || 'No description available';

    useSeoMeta({
        ogUrl: `https://benshawmean.com/projects/${project}`,
        ogTitle: pageTitle,
        twitterTitle: pageTitle,
        description: pageDescription,
        ogDescription: pageDescription,
        twitterDescription: pageDescription,
        ogImageAlt: 'Profile Picture',
        ogType: 'website',
        ogSiteName: "Benpai's Website",
        twitterCard: 'summary_large_image',
        twitterImageAlt: 'Profile Picture',
        twitterSite: '@therealbenpai',
        twitterCreator: '@therealbenpai',
    });
}
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
                    :class="Mapper.getProjectPublicationColor(projectData.public)"
                    class="text-md px-4 py-1 rounded-2xl"
                >
                    <Icon
                        :name="Mapper.getProjectPublicationIcon(projectData.public)"
                        size="16px"
                        class="translate-y-0.5"
                    />
                    {{ `${Mapper.processProjectStatus(projectData.public)} source` }}
                </span>
                <span
                    :class="Mapper.getProjectStatusColor(projectData.status)"
                    class="text-md px-4 py-1 rounded-2xl"
                >
                    <Icon
                        :name="Mapper.getProjectStatusIcon(projectData.status)"
                        size="16px"
                        class="translate-y-0.5"
                    />
                    {{ projectData.status }}
                </span>
            </div>
        </div>
    </div>
</template>
