<script setup lang="ts">
const { data: socials } = await useFetch(`/api/social/all`);

defineOgImageComponent(
    'BasicMetaBanner',
    {
        page: 'Social Accounts',
        description: 'Information about the various social media accounts I have.',
        icon: 'mdi:account-circle'
    },
    {
        cacheMaxAgeSeconds: 180,
        alt: `Social Accounts Banner`,
    }
);

const pageTitle = `Social Accounts - Benpai's Website`,
    pageDescription = 'Information about the various social media accounts I have.';

useSeoMeta({
    ogUrl: `https://benshawmean.com/socials`,
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
