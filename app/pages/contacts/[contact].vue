<script setup lang="ts">
const route = useRoute();
const { contact } = route.params;
const { data: contactData } = await useFetch(`/api/contact/${contact}`);
</script>

<template>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-if="!contactData"
    >
        <h1 class="text-4xl font-bold">No Friend Found Here</h1>
        <p class="text-lg">
            We were unable to find a friend by this name. Could you have typed it in wrong?
        </p>
    </div>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-else-if="!Array.isArray(contactData)"
    >
        <h1 class="flex flex-row gap-6 text-4xl font-semibold">In Development</h1>
    </div>
</template>
