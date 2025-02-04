<script setup lang="ts">
useHead({
    title: 'Home',
})

useSeoMeta({
    description: 'Welcome to my website!',
    ogTitle: 'Home',
    ogDescription: 'Welcome to my website!',
    ogUrl: 'https://benshawmean.com/',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: 'Benpai\'s Website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Home',
    twitterDescription: 'Welcome to my website!',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
})
</script>

<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 p-4 gap-2">
                <h1 class="text-4xl font-bold">Welcome to my website!</h1>
                <p class="text-lg">
                    Hello! My name is Ben! I am a full stack developer who works on many applications. I am the owner of The FemDevs, a community of developers who are passionate about technology.
                </p>
            </div>
        </div>
    </div>
    <MobileWarning />
</template>
