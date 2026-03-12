<script setup lang="ts">
const route = useRoute();
const { social } = route.params;
const { data: socialData } = await useFetch(`/api/social/${social}`);

if (socialData.value && !Array.isArray(socialData.value)) {
    defineOgImageComponent(
        'ProjectMetaBanner',
        {
            name: socialData.value.platform || 'Unknown',
            icon: 'mdi:github',
            identifier: socialData.value.identifier || 'unknown',
        },
        {
            cacheMaxAgeSeconds: 180,
            alt: `Project Banner of ${socialData.value.platform || 'Unknown'}`
        }
    );

    const pageTitle = `${socialData.value.platform} - Benpai's Website`,
        pageDescription = 'No description available.';

    useSeoMeta({
        ogUrl: `https://benshawmean.com/socials/${social}`,
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
        v-if="!socialData"
    >
        <h1 class="text-4xl font-bold">No Social Found Here</h1>
        <p class="text-lg">
            We were unable to find a social by this name. Could you have typed it in wrong?
        </p>
    </div>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-else-if="!Array.isArray(socialData)"
    >
        <h1 class="flex flex-row gap-6 text-4xl font-semibold">In Development</h1>
    </div>
</template>
