<script setup lang="ts">
useHead({
    title: 'Homepage',
});

useSeoMeta({
    description: 'About me',
    ogTitle: 'Friends',
    ogDescription: 'About me',
    ogUrl: 'https://benshawmean.com/',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Homepage',
    twitterDescription: 'About me',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
});

interface Section {
    header: string;
    description: string[];
}

const sections: Section[] = [
    {
        header: 'Upbringing',
        description: [
            'I am a completely self-taught full stack developer. Ever sense I was a child, I have had a passion for technology. I have always been interested in how things work and how to make them better.',
            'At Age 5, I was using a computer at a proficient level.',
            'At Age 7, I was fixing technical issues with TVs and more.',
            'At Age 10, I was programming in HTML, CSS, and Javascript.',
            'That was my first real introduction to the world of software and web development. From there, I have honed my skills in Javascript/Typescript, both client-side and server-side.'
        ],
    },
    {
        header: 'Experience',
        description: [
            'Outside of web development, I have experience in Python, Java, C++, Rust, and much, much more. For databases, I have experience with MySQL, PostgreSQL, and SQLite.'
        ]
    },
    {
        header: 'Open Source',
        description: [
            'I believe in the importance of having code bases be open source, so almost every project I work on is open source and accessible to the public on GitHub.'
        ]
    }
]
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold"></h1>
        <p class="text-lg">
            Hello! My name is Ben! I am a full stack developer who works on many
            applications. I am the owner of The FemDevs, a community of
            developers who are passionate about technology.
        </p>
        <div v-for="sect in sections">
            <h2 class="text-2xl font-semibold">{{ sect.header }}</h2>
            <p class="text-lg" v-for="desc in sect.description">{{ desc }}</p>
        </div>
    </div>
</template>
