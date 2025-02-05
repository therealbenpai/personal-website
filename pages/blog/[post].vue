<script setup lang="ts">
const route = useRoute();
const slug = route.params.post;
console.log(slug);
const { data: posts } = await useAsyncData(`blog-${slug}`, () =>
    queryCollection('blog').path(`/blog/${slug}`).first()
);
const post = posts.value;
</script>

<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div
                v-if="post"
                class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
            >
                <h1 class="text-4xl font-bold">{{ post.title }}</h1>
                <div class="flex flex-col gap-2 ">
                    <ContentRenderer v-if="post" :value="post" :prose="true"/>
                </div>
            </div>
            <div v-else class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
                <h1 class="text-4xl font-bold">Post Not Found</h1>
                <p class="text-lg">
                    The post you are looking for does not exist.
                </p>
            </div>
        </div>
    </div>
</template>
