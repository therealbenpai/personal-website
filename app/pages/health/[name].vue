<script setup lang="ts">
import _ from 'lodash';

useHead({
    title: 'Health',
});

useSeoMeta({
    description: 'Information about my health and wellness.',
    ogTitle: 'Health',
    ogDescription: 'Information about my health and wellness.',
    ogUrl: 'https://benshawmean.com/health',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Health',
    twitterDescription: 'Information about my health and wellness.',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
});

const route = useRoute();
const { name } = route.params;
const { data: healthData } = await useFetch(`/api/health/${name}`);
</script>

<template>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-if="!healthData"
    >
        <h1 class="text-4xl font-bold">No Health Information Found Here</h1>
        <p class="text-lg">
            We were unable to find health information for this person. Could you
            have typed it in wrong?
        </p>
    </div>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-else-if="!Array.isArray(healthData) && healthData"
    >
        <h1 class="text-4xl font-semibold">
            {{ healthData.fullname }}
        </h1>
        <div v-if="healthData.aka" class="flex flex-row gap-2 items-center">
            <h2 class="text-xl font-medium text-stone-300">Also known as:</h2>
            <span class="italic text-lg font-light text-stone-300">{{ healthData.aka }}</span>
        </div>
        <div class="flex flex-row gap-4 my-2">
            <h2 class="text-2xl font-semibold">Type:</h2>
            <span
                :class="Mapper.getHealthColor(healthData.type)"
                class="text-md px-4 py-1 rounded-2xl max-w-32 justify-center flex gap-2"
            >
                <Icon
                    :name="Mapper.getHealthIcon(healthData.type)"
                    size="16px"
                    class="translate-y-0.5"
                />
                <p class="text-center font-medium">
                    {{ _.capitalize(healthData.type) }}
                </p>
            </span>
        </div>
        <div class="flex flex-col gap-4 my-2" v-if="healthData.description">
            <h2 class="text-2xl font-semibold">Description:</h2>
            <p
                v-for="line in healthData.description.split('\n')"
                :key="line"
                class="text-md text-stone-300"
            >
                {{ line }}
            </p>
        </div>
        <div class="flex flex-col gap-4 my-2" v-if="healthData.personal">
            <h2 class="text-2xl font-semibold">How it Affects Me:</h2>
            <p
                v-for="line in healthData.personal.split('\n')"
                :key="line"
                class="text-md text-stone-300"
            >
                {{ line }}
            </p>
        </div>
        <div class="flex flex-col gap-2" v-if="healthData.links">
            <h2 class="text-2xl font-semibold">Information Providers:</h2>
            <div class="flex flex-col gap-4">
                <a
                    v-for="link in healthData.links"
                    :key="link.identifier"
                    :href="link.link"
                    class="text-lg px-4 py-2 rounded-2xl bg-[#21252b] hover:bg-[#282C34] border-2 border-transparent hover:border-slate-400 flex flex-row gap-4 items-center"
                >
                    <span class="w-12 justify-center flex">
                        <Icon
                            :name="Mapper.getHealthProviderIcon(link.provider)"
                            size="32px"
                            class="translate-y-0.5"
                        />
                    </span>
                    {{ link.display }}
                </a>
            </div>
        </div>
    </div>
</template>
