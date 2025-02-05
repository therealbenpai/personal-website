<script setup lang="ts">
useHead({
    title: 'Social Accounts',
})

useSeoMeta({
    description: 'A list of all of my social media accounts.',
    ogTitle: 'Social Accounts',
    ogDescription: 'A list of all of my social media accounts.',
    ogUrl: 'https://benshawmean.com/social',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: 'Benpai\'s Website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Social Accounts',
    twitterDescription: 'A list of all of my social media accounts.',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
})

interface SocialMediaAccount {
    username: string;
    identifier: string;
    link: string;
    platform: string;
    icon: string;
}

const socialMediaAccounts: SocialMediaAccount[] = [
    {
        username: 'benpai',
        identifier: '1158220643616182445',
        link: 'https://discord.com/users/1158220643616182445',
        platform: 'Discord',
        icon: 'fa-brands:discord'
    },
    {
        username: 'therealbenpai',
        identifier: 'therealbenpai',
        link: 'https://github/therealbenpai',
        platform: 'GitHub',
        icon: 'fa-brands:github'
    },
    {
        username: 'benpai',
        identifier: 'mbvcmhkmq3rwhhrotcllhsk0q',
        link: 'https://open.spotify.com/user/mbvcmhkmq3rwhhrotcllhsk0q',
        platform: 'Spotify',
        icon: 'fa-brands:spotify',
    },
    {
        username: 'therealbenpai',
        identifier: 'therealbenpai',
        link: 'https://en.pronouns.page/@therealbenpai',
        platform: 'Pronouns.Page',
        icon: 'simple-icons:pronounsdotpage',
    },
    {
        username: 'benshawmean',
        identifier: 'benshawmean',
        link: 'https://youtube.com/@benshawmean',
        platform: 'YouTube',
        icon: 'fa-brands:youtube',
    },
    {
        username: 'therealbenpai',
        identifier: 'therealbenpai',
        link: 'https://www.last.fm/user/therealbenpai',
        platform: 'Last.fm',
        icon: 'fa-brands:lastfm',
    },
    {
        username: 'Benpai',
        identifier: 'aspe:keyoxide.org:JI3O6H2RNBQYQGJCSZRZYMF7NU',
        link: 'https://keyoxide.org/aspe:keyoxide.org:JI3O6H2RNBQYQGJCSZRZYMF7NU',
        platform: 'Keyoxide',
        icon: 'material-symbols:passkey-rounded',
    }
]
</script>

<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12 ">
            <NavBar />
            <div class="flex flex-col mt-8 p-4 gap-4 overflow-auto">
                <h1 class="text-4xl font-bold">Social Accounts</h1>
                <p class="text-lg">
                    You can find me on the following platforms:
                </p>
                <div class="grid grid-col-1 gap-4">
                    <div
                        v-for="account in socialMediaAccounts"
                        :key="account.platform"
                        class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
                    >
                        <a :href="account.link">
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-row gap-6">
                                    <h2 class="text-2xl font-semibold">
                                    {{ account.platform }}
                                </h2>
                                <Icon :name="account.icon" size="24px" />
                                </div>
                                <p class="text-lg">{{ account.username }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MobileWarning />
</template>
