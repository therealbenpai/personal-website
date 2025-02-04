<script setup lang="ts">
useHead({
    title: 'About Me',
})

useSeoMeta({
    ogTitle: 'About Me',
    ogDescription: 'A little bit about me.',
    ogUrl: 'https://benshawmean.com/about',
    ogImage: 'https://thefemdevs.com/assets/images/grav/329f481757ca49ce98d31d9041285a11',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'About Me',
    twitterDescription: 'A little bit about me.',
    twitterImage: 'https://thefemdevs.com/assets/images/grav/329f481757ca49ce98d31d9041285a11',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai',
})
</script>

<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
                <h1 class="text-4xl font-bold">About Me</h1>
                <p class="text-lg">
                    Hello! My name is Ben! I am a full stack developer who works on many applications. I am the owner of The FemDevs, a community of developers who are passionate about technology.
                    </p>
                <h2 class="text-2xl font-semibold">Upbringing</h2>
                <p class="text-lg">
                    I am a completely self-taught full stack developer. Ever sense I was a child, I have had a passion for technology. I have always been interested in how things work and how to make them better.
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
                    That was my first real introduction to the world of software and web development. From there, I have honed my skills in Javascript/Typescript, both client-side and server-side.
                </p>
                <h2 class="text-2xl font-semibold">Experience</h2>
                <p class="text-lg">
                    Outside of web development, I have experience in Python, Java, C++, Rust, and much, much more. For databases, I have experience with MySQL, PostgreSQL, and SQLite.
                </p>
                <h2 class="text-2xl font-semibold">Open Source</h2>
                <p class="text-lg">
                    I believe in the importance of having code bases be open source, so almost every project I work on is open source and accessible to the public on GitHub.
                </p>
            </div>
        </div>
    </div>
    <MobileWarning />
</template>
