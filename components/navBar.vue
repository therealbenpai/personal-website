<script setup lang="ts">
interface Link {
    name: string;
    url: string;
}

const links: Link[] = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Blog',
        url: '/blog',
    },
    {
        name: 'Projects',
        url: '/projects',
    },
    {
        name: 'Social Media',
        url: '/social',
    },
    {
        name: 'Contact',
        url: '/contact',
    },
];
</script>

<template>
    <div
        class="flex flex-row gap-4 bg-[#21252b] mx-3 p-4 rounded-2xl space-x-6 px-6 py-4 w-full"
    >
        <nav class="flex flex-row gap-8">
            <a
                v-for="link in links"
                :key="link.name"
                :href="link.url"
                class="text-lg font-semibold text-white"
            >
                {{ link.name }}
            </a>
        </nav>
    </div>
</template>
