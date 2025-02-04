<script setup lang="ts">
useHead({
    title: 'Contact',
})

useSeoMeta({
    description: 'You can contact me through the following methods.',
    ogTitle: 'Contact',
    ogDescription: 'You can contact me through the following methods.',
    ogUrl: 'https://benshawmean.com/contact',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: 'Benpai\'s Website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact',
    twitterDescription: 'You can contact me through the following methods.',
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
            <div class="flex flex-col mt-8 p-4 gap-4">
                <h1 class="text-4xl font-bold">Contact</h1>
                <p class="text-lg">
                    You can contact me through the following methods:
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        Email:
                        <a href="mailto:benpai@thefemdevs.com"
                            >benpai@thefemdevs.com</a
                        >
                    </li>
                    <li>
                        Discord:
                        <a href="https://discord.com/users/1158220643616182445"
                            >@therealbenpai</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <MobileWarning />
</template>
