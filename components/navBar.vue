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
        name: 'Projects',
        url: '/projects',
        icon: 'mdi:code',
    },
    {
        name: 'Socials',
        url: '/social',
        icon: 'mdi:internet',
    },
    {
        name: 'Contact',
        url: '/contact',
        icon: 'mdi:email',
    },
    {
        name: 'Friends',
        url: '/friends',
        icon: 'mdi:account-multiple',
    },
];

const isMobile = ref(false);

onMounted(() => {
    isMobile.value = window.innerWidth < 1024;
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth < 1024;
    });
});
</script>

<template>
    <nav class="flex flex-row bg-navbar rounded-2xl space-x-6 px-6 w-full justify-evenly py-4">
        <a v-for="link in links" :key="link.name" :href="link.url" class="text-lg font-semibold text-white">
            <span class="flex flex-col place-items-center gap-1">
                <Icon :name="link.icon" size="24px" v-if="isMobile" />
            <span class="hidden lg:inline">{{ link.name }}</span>
            </span>
        </a>
    </nav>
</template>
