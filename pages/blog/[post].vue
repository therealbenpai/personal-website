<script setup lang="ts">
const route = useRoute();
const slug = route.params.post;
console.log(slug);
const { data: posts } = await useAsyncData(`blog-${slug}`, () =>
    queryCollection('blog').path(`/blog/${slug}`).first()
);
const post = posts.value;
const postDate = post ? new Date(post.date) : null;
</script>

<template>
    <div v-if="post" class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">
            {{ post.title }}
        </h1>
        <span class="text-gray-500 text-lg">{{
            formatDate(postDate!) + ' at ' + formatTime(postDate!)
        }}</span>
        <hr />
        <div class="flex flex-col gap-2 mt-4">
            <ContentRenderer :value="post" prose />
        </div>
    </div>
    <div v-else class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Post Not Found</h1>
        <p class="text-lg">The post you are looking for does not exist.</p>
    </div>
</template>
