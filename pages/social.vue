<script setup lang="ts">
interface SocialMediaAccount {
    username: string;
    identifier: string;
    link: string;
    platform: string;
}
const socialMediaAccounts: SocialMediaAccount[] = [
    {
        username: 'benpai',
        identifier: '1158220643616182445',
        link: 'https://discord.com/users/1158220643616182445',
        platform: 'Discord',
    },
    {
        username: 'therealbenpai',
        identifier: 'therealbenpai',
        link: 'https://github/therealbenpai',
        platform: 'GitHub',
    },
    {
        username: 'benpai',
        identifier: 'mbvcmhkmq3rwhhrotcllhsk0q',
        link: 'https://open.spotify.com/user/mbvcmhkmq3rwhhrotcllhsk0q',
        platform: 'Spotify',
    },
    {
        username: 'therealbenpai',
        identifier: 'therealbenpai',
        link: 'https://en.pronouns.page/@therealbenpai',
        platform: 'Pronouns.Page',
    },
    {
        username: 'benshawmean',
        identifier: 'benshawmean',
        link: 'https://youtube.com/@benshawmean',
        platform: 'YouTube',
    },
    {
        username: 'therealbenpai',
        identifier: 'therealbenpai',
        link: 'https://www.last.fm/user/therealbenpai',
        platform: 'Last.fm',
    },
    {
        username: 'Benpai',
        identifier: 'aspe:keyoxide.org:JI3O6H2RNBQYQGJCSZRZYMF7NU',
        link: 'https://keyoxide.org/aspe:keyoxide.org:JI3O6H2RNBQYQGJCSZRZYMF7NU',
        platform: 'Keyoxide',
    }
]
</script>

<template>
    <div
        class="flex flex-row px-32 py-16 padding-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 padding-4 gap-4">
                <h1 class="text-4xl font-bold">Social Accounts</h1>
                <p class="text-lg">
                    You can find me on the following platforms:
                </p>
                <ul class="flex flex-col list-disc list-inside gap-4">
                    <li v-for="account in socialMediaAccounts" :key="account.identifier">
                        {{ account.platform }}:
                        <a :href="account.link">{{ account.username }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
