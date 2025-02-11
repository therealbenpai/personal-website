<script setup lang="ts">
interface Link {
    name: string;
    url: string;
    icon: string;
}

const links: Link[] = [
    {
        name: 'Home',
        url: '/',
        icon: 'mdi:home',
    },
    {
        name: 'Blog',
        url: '/blog',
        icon: 'mdi:fountain-pen-tip',
    },
    {
        name: 'Projects',
        url: '/projects',
        icon: 'mdi:code',
    },
    {
        name: 'Social Media',
        url: '/social',
        icon: 'mdi:internet',
    },
    {
        name: 'Contact',
        url: '/contact',
        icon: 'mdi:email',
    },
];
</script>

<template>
    <nav
        class="flex flex-row gap-8 bg-[#21252b] md:mx-3 rounded-2xl space-x-6 px-3 py-2 md:px-6 md:py-4 w-full"
    >
        <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            class="text-lg font-semibold text-white"
        >
        <Icon :name="link.icon" size="24px" :aria-hidden="false" />
        </a>
    </nav>
</template>
