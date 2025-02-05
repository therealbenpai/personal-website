<script setup lang="ts">
useHead({
    title: 'About Me',
})

useSeoMeta({
    description: 'A little bit about me.',
    ogTitle: 'About Me',
    ogDescription: 'A little bit about me.',
    ogUrl: 'https://benshawmean.com/about',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: 'Benpai\'s Website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'About Me',
    twitterDescription: 'A little bit about me.',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
})

const { data: posts } = await useAsyncData(`blog-posts`, () => queryCollection('blog').all());
console.dir(posts.value);
const formattedPosts = posts.value
</script>

<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
                <h1 class="text-4xl font-bold">Blog Posts</h1>
                <p class="text-lg">
                    Here are some of my blog posts. I write about a variety of topics, so feel free to
                    check them out!
                </p>
                <div class="grid grid-cols-1 gap-4 overflow-y-auto">
                    <div
                        v-for="post in posts"
                        :key="post.id"
                        class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
                    >
                        <a :href="post.path">
                            <div class="flex flex-col gap-2">
                                <h2 class="text-2xl font-semibold">
                                    {{ post.title }}
                                    <span class="ml-2 text-sm text-slate-400"
                                        >{{ formatDate(new Date(post.date)) }}</span
                                    >
                                </h2>
                                <p class="text-lg">{{ post.description }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MobileWarning />
</template>
