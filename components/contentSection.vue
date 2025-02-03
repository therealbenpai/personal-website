<script setup lang="ts">
const props = defineProps<{
    title: string;
    desc: string;
    index: number;
}>();
</script>

<template>
    <div
        class="flex flex-col items-center padding-4 gap-2"
    >
        <h2 class="text-2xl font-bold">{{ props.index + "."}} {{ props.title }}</h2>
        <p class="text-lg">{{ props.desc }}</p>
    </div>  
</template>
