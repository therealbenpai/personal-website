<script setup lang="ts">
const route = useRoute();
const { social } = route.params;
const { data: socialData } = await useFetch(`/api/social/${social}`);
</script>

<template>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-if="!socialData"
    >
        <h1 class="text-4xl font-bold">No Social Found Here</h1>
        <p class="text-lg">
            We were unable to find a social by this name. Could you have typed it in wrong?
        </p>
    </div>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-else-if="!Array.isArray(socialData)"
    >
        <h1 class="flex flex-row gap-6 text-4xl font-semibold">In Development</h1>
    </div>
</template>
