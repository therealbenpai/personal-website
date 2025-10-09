<script setup lang="ts">
useHead({
    title: 'Friends',
});

useSeoMeta({
    description: 'A list of all of my friends (current and former).',
    ogTitle: 'Friends',
    ogDescription: 'A list of all of my friends (current and former).',
    ogUrl: 'https://benshawmean.com/friends',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Projects',
    twitterDescription: 'A list of all my friends (current and former).',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
});

const { data: contacts } = await useFetch(`/api/contact/all`);
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Contact</h1>
        <p class="text-lg">You can contact me through the following methods:</p>
        <div class="grid grid-col-1 gap-4">
            <div
                v-for="method in contacts"
                :key="method.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="method.link">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-6">
                            <Icon :name="method.icon" size="24px" />
                            <h2 class="text-2xl font-semibold">
                                {{ method.name }}
                            </h2>
                        </div>
                        <p class="text-lg">{{ method.identifier }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
