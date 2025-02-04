<script setup lang="ts">
useHead({
    title: 'Projects',
})

useSeoMeta({
    ogTitle: 'Projects',
    ogDescription: 'A list of all of my projects.',
    ogUrl: 'https://benshawmean.com/projects',
    ogImage: 'https://thefemdevs.com/assets/images/grav/329f481757ca49ce98d31d9041285a11',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Projects',
    twitterDescription: 'A list of all of my projects.',
    twitterImage: 'https://thefemdevs.com/assets/images/grav/329f481757ca49ce98d31d9041285a11',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
})

interface Project {
    name: string;
    description: string;
    link: string;
    public: boolean;
    status: 'in progress' | 'beta' | 'released';
}
const projects: Project[] = [
    {
        name: 'Personal Portfolio',
        description:
            'My personal portfolio is a website that showcases my work. It is built with Nuxt and Vue 3.',
        link: 'https://benshawmean.com',
        public: true,
        status: 'released',
    },
    {
        name: 'FemDevs Website',
        description:
            'The FemDevs website is a website for the FemDevs community. It is built with Nuxt and Vue 3.',
        link: 'https://thefemdevs.com',
        public: true,
        status: 'released',
    },
    {
        name: 'Fembot',
        description:
            'Fembot is a Discord bot that is used in the FemDevs Discord server. It is built with Discord.js and TypeScript.',
        link: 'https://github.com/femdevs/fembot',
        public: true,
        status: 'released',
    },
    {
        name: 'FemDevs API',
        description:
            'The FemDevs API is an API that is used in the FemDevs website. It is built with Express and TypeScript.',
        link: 'https://docs.api.thefemdevs.com',
        public: true,
        status: 'released',
    },
    {
        name: 'Bot Client',
        description:
            'A Discord.js framework for creating Discord bots. It is built with Discord.js and TypeScript.',
        link: 'https://github.com/therealbenpai/BotClient',
        public: true,
        status: 'released',
    },
    {
        name: 'Bot Builder',
        description:
            'A CLI tool for creating Discord bots. It is built with Node.js and TypeScript.',
        link: 'https://github.com/therealbenpai/DBB',
        public: true,
        status: 'beta',
    },
    {
        name: 'WebUtils',
        description:
            'A collection of utilities for web development. It is built with Node.js and TypeScript.',
        link: 'https://github.com/therealbenpai/WebUtils',
        public: true,
        status: 'beta',
    },
    {
        name: 'zdcors',
        description:
            'A zero-dependency CORS header middleware for Express. It is built with Node.js and TypeScript.',
        link: 'https://github.com/therealbenpai/zdcors',
        public: true,
        status: 'released',
    },
    {
        name: 'BananaBot',
        description:
            'A Discord bot that is used in the BananaBots Discord server. It is built with Discord.js and TypeScript.',
        link: 'https://github.com/femdevs/bananabot',
        public: false,
        status: 'released',
    },
];
</script>

<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 p-4 gap-4 overflow-auto">
                <h1 class="text-4xl font-bold">Projects</h1>
                <p class="text-lg">
                    The following are some of the projects I have worked on.
                </p>
                <div class="grid grid-cols-1 gap-4 overflow-y-auto">
                    <div
                        v-for="project in projects"
                        :key="project.name"
                        class="bg-[#21252b] p-4 rounded-2xl"
                    >
                        <a :href="project.link">
                            <div class="flex flex-col gap-2">
                                <h2 class="text-2xl font-semibold">
                                    {{ project.name }}
                                </h2>
                                <p class="text-lg">{{ project.description }}</p>
                                <div class="flex flex-row gap-4 my-2">
                                    <span
                                        :class="{
                                            'bg-green-500': project.public,
                                            'bg-red-500': !project.public,
                                        }"
                                        class="text-md px-4 py-1 rounded-2xl"
                                        >{{
                                            project.public
                                                ? 'open source'
                                                : 'closed source'
                                        }}</span
                                    >
                                    <span
                                        :class="{
                                            'bg-green-500':
                                                project.status === 'released',
                                            'bg-yellow-500':
                                                project.status === 'beta',
                                            'bg-orange-500':
                                                project.status ===
                                                'in progress',
                                        }"
                                        class="text-md px-4 py-1 rounded-2xl"
                                        >{{ project.status }}</span
                                    >
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MobileWarning />
</template>
