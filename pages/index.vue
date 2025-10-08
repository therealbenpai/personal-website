<script setup lang="ts">
useHead({
    title: 'Homepage',
});

useSeoMeta({
    description: 'About me',
    ogTitle: 'Friends',
    ogDescription: 'About me',
    ogUrl: 'https://benshawmean.com/',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Homepage',
    twitterDescription: 'About me',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
});

const { data: sections } = await useFetch(`/api/about/get`);
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">About Me</h1>
        <p class="text-lg">
            Hello! My name is Ben! I am a full stack developer who works on many
            applications. I am the owner of The FemDevs, a community of
            developers who are passionate about technology.
        </p>
        <div v-for="sect in sections">
            <h2 class="text-2xl font-semibold">{{ sect.header }}</h2>
            <p class="text-lg" v-for="desc in sect.description.split('\n')">{{ desc }}</p>
        </div>
    </div>
</template>
