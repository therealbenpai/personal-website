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

const { data: friends } = await useFetch(`/api/friend/getAll`);

const old_friends = [
    {
        name: 'Isa', 
        description: [
            'Isa, who I met through Oli, was a great friend of mine. She is a chill and kind',
            'person, and used to be one of my closest friends I have. She helped me through',
            'so many things involving my mental health and issues with my ex.',
        ].join(' '),
        startDate: '10/01/2024',
        endDate: '06/02/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Chrisi', 
        description: [
            'Chrisi, similar to Isa, was a great friend of mine. She is a chill and kind',
            'person, and used to be one of my closest friends I have. She helped me through',
            'so many things involving my mental health and issues with my ex.',
        ].join(' '),
        startDate: '04/01/2025',
        endDate: '06/02/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Horuseus', 
        description: [
            'Horuseus, who I met through Shiroo as he was her boyfriend for a period of time,',
            'is a good friend of mine. He is a chill and kind person. I enjoy spending time',
            'with him and talking to him. He is just a great person.',
        ].join(' '),
        startDate: '11/01/2024',
        aliases: [],
        status: 'current',
    },
    {
        name: 'Oli', 
        description: [
            'Oli is a friend who I met through Kyli. We all met in Avery\'s server that I, at the time,',
            'co-owned. She is a chill and kind person. I enjoy spending time with her and talking to',
            'her, even though we don\'t talk as much anymore. She is just a great person.',
        ].join(' '),
        startDate: '09/01/2024',
        aliases: [],
        status: 'current',
    },
    {
        name: 'Toasty',
        description: [
            'Toasty, who I more commonly refer to as moop, is a friend that I met in',
            'E-Girl world. She was chill and kind. She also was my server canon mother.'
        ].join(' '),
        startDate: '05/01/2023',
        endDate: '01/01/2025',
        aliases: ['Moop', 'Flori'],
        status: 'former',
    },
    {
        name: 'Etsu',
        description: [
            'Etsu, who I knew better as Sem was a close friend and one of my former girlfriends',
            'from Sanrio Cottage. I had known her for a long while in Sanrio.'
        ].join(' '),
        startDate: '05/01/2023',
        endDate: '07/10/2024',
        aliases: ['Sem', 'Selene', 'Toona'],
        status: 'former',
    },
    {
        name: 'Sawyer', 
        description: [
            'Sawyer, who I knew under many, and I mean many names, was a great friend and one of',
            'my closest confidants. She took great care of me and helped me through so many',
            'difficulties.'
        ].join(' '),
        startDate: '05/01/2023',
        endDate: '05/01/2025',
        aliases: ['Angel', 'others (there are so many i cant remember all of them)'],
        status: 'former',
    },
    {
        name: 'Evie', 
        description: [
            'Evie, who I primarily knew as Alex, was arguably my closest friend ever. She knew',
            'me in and out entirely. I trusted her with everything, and still more or less do.',
            'She is a large reason that I am still surviving today.'
        ].join(' '),
        startDate: '10/24/2022',
        endDate: '05/01/2025',
        aliases: ['Alex', 'Auxiliaryfrfr'],
        status: 'former',
    },
    {
        name: 'Nezha', 
        description: [
            'Nezha, who I knew initially as Rust, was probably my second closest friends ever. He,',
            'along with Evie and Saywer, helped me through each and every one of my break-ups that I',
            'went through.'
        ].join(' '),
        startDate: '02/01/2023',
        endDate: '05/01/2025',
        aliases: ['AcidToast', 'rust'],
        status: 'former',
    },
    {
        name: 'Nights', 
        description: [
            'Nights was Nezha\'s girlfriend. I knew her a decent bit, but not as well as I knew',
            'Nezha. She was a great person and I am glad I got to know her.',
        ].join(' '),
        startDate: '02/01/2025',
        endDate: '05/01/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Clara', 
        description: [
            'Clara was Gabe\'s girlfriend. I knew her a decent bit.',
        ].join(' '),
        startDate: '02/01/2025',
        endDate: '05/01/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Gabe', 
        description: [
            'Gabe was a friend that I met through Evie. He was a chill person and I enjoyed',
            'hanging out with him.',
        ].join(' '),
        startDate: '02/01/2025',
        endDate: '05/01/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Aurelia', 
        description: [
            'Aurelia, who I knew as Lani, was a friend that I met through a server Kyli',
            'invited me to. She was a really good friend and one of my former girlfriends.',
            'I enjoyed spending time with her as she was a great person.',
        ].join(' '),
        startDate: '02/16/2025',
        endDate: '05/11/2025',
        aliases: ['Lani', 'Lannah', 'Nanners'],
        status: 'former',
    },
    {
        name: 'Roxan', 
        description: [
            'Roxan was a friend that I met through Aurelia. She was a pretty good friend.',
            'I enjoyed spending time with her as she was a great person.',
        ].join(' '),
        startDate: '02/16/2025',
        endDate: '04/01/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Mina', 
        description: [
            'Mina was a friend that I met through Aurelia. She was a pretty good friend.',
            'I enjoyed spending time with her as she was a great person.',
        ].join(' '),
        startDate: '02/17/2025',
        endDate: '04/01/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Jassy', 
        description: [
            'Jassy was a friend that I met through Aurelia. She was a pretty good friend.',
            'I enjoyed spending time with her as she was a great person.',
        ].join(' '),
        startDate: '02/17/2025',
        endDate: '04/01/2025',
        aliases: [],
        status: 'former',
    },
    {
        name: 'Golden', 
        description: [
            'Golden was a very close friend of mine. I met him in Sanrio as he was a member of the',
            'support team in the server. He helped me through many difficult times and was a',
            'great person to talk to.',
        ].join(' '),
        startDate: '05/01/2023',
        endDate: '03/01/2025',
        aliases: ['Goldie'],
        status: 'former',
    },
    {
        name: 'Kyli', 
        description: [
            'Kyli, who I met in Avery\'s server, used to be one of my closest friends.',
            'She was a chill and kind person, but we have since drifted apart. I still',
            'consider her a good friend, but we don\'t talk as much anymore.',
        ].join(' '),
        startDate: '09/01/2024',
        endDate: '03/01/2025',
        aliases: [],
        status: 'former',
    },
];
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Friends</h1>
        <p class="text-lg">
            Here is a list of all of my friends (both past and present). I am trying my best to
            compile a full list of everyone that I can. I apologize if you aren't listed here. If you
            would like to be added or have incorrect/missing information, please let me know. Also,
            most of these dates are rough estimations as I am unable to get complete data on all of this.
        </p>
        <div class="grid grid-cols-1 gap-4">
            <div
                v-for="friend in friends"
                :key="friend.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a class="no-underline" :href="`/friends/${friend.name}`">
                    <div class="flex flex-col gap-2">
                    <h2 class="text-2xl font-semibold">
                        {{ friend.name }}
                    </h2>
                    <p class="text-md text-stone-300" v-if="friend.description">
                        <span class="text-2xl font-extrabold">" </span>
                        <span class="italic underline text-justify">{{ friend.description.slice(0, 50) }}...</span>
                        <span class="text-2xl font-extrabold"> "</span>
                    </p>
                </div>
                </a>
            </div>
        </div>
    </div>
</template>
