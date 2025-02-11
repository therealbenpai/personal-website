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

const isMobile = ref(false);

onMounted(() => {
    isMobile.value = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth <= 768;
    });
});
</script>

<template>
    <nav
        class="flex flex-row bg-navbar rounded-2xl space-x-6 px-6 w-full justify-evenly py-4"
    >
        <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            class="text-lg font-semibold text-white"
        >
            <span class="flex flex-col place-items-center gap-1">
                <Icon :name="link.icon" size="24px" v-if="isMobile" />
            <span class="hidden md:inline">{{ link.name }}</span>
            </span>
        </a>
    </nav>
</template>
