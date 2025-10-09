<script setup lang="ts">
useHead({
    title: 'Social Accounts',
});

useSeoMeta({
    description: 'A list of all of my social media accounts.',
    ogTitle: 'Social Accounts',
    ogDescription: 'A list of all of my social media accounts.',
    ogUrl: 'https://benshawmean.com/social',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Social Accounts',
    twitterDescription: 'A list of all of my social media accounts.',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
});

const { data: socials } = await useFetch(`/api/social/all`);
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-auto">
        <h1 class="text-4xl font-bold">Social Accounts</h1>
        <p class="text-lg">You can find me on the following platforms:</p>
        <div class="grid grid-col-1 gap-4">
            <div
                v-for="account in socials"
                :key="account.platform"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="account.link">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-6">
                            <Icon :name="account.icon" size="24px" />
                            <h2 class="text-2xl font-semibold">{{ account.platform }}</h2>
                        </div>
                        <p class="text-lg">{{ account.username }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
