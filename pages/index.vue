<script setup lang="ts">
useHead({
    title: 'Friends',
});

useSeoMeta({
    description: 'A list of all my friends (current and former).',
    ogTitle: 'Friends',
    ogDescription: 'A list of all my friends (current and former).',
    ogUrl: 'https://benshawmean.com/friends',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Friends',
    twitterDescription: 'A list of all my friends (current and former).',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
});
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold"></h1>
        <p class="text-lg">
            Hello! My name is Ben! I am a full stack developer who works on many
            applications. I am the owner of The FemDevs, a community of
            developers who are passionate about technology.
        </p>
        <h2 class="text-2xl font-semibold">Upbringing</h2>
        <p class="text-lg">
            I am a completely self-taught full stack developer. Ever sense I was
            a child, I have had a passion for technology. I have always been
            interested in how things work and how to make them better.
        </p>
        <p class="text-lg">
            At Age 5, I was using a computer at a proficient level.
        </p>
        <p class="text-lg">
            At Age 7, I was fixing technical issues with TVs and more.
        </p>
        <p class="text-lg">
            At Age 10, I was programming in HTML, CSS, and Javascript.
        </p>
        <p class="text-lg">
            That was my first real introduction to the world of software and web
            development. From there, I have honed my skills in
            Javascript/Typescript, both client-side and server-side.
        </p>
        <h2 class="text-2xl font-semibold">Experience</h2>
        <p class="text-lg">
            Outside of web development, I have experience in Python, Java, C++,
            Rust, and much, much more. For databases, I have experience with
            MySQL, PostgreSQL, and SQLite.
        </p>
        <h2 class="text-2xl font-semibold">Open Source</h2>
        <p class="text-lg">
            I believe in the importance of having code bases be open source, so
            almost every project I work on is open source and accessible to the
            public on GitHub.
        </p>
    </div>
</template>
