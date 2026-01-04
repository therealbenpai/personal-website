<script setup lang="ts">
withDefaults(
    defineProps<{
        userName?: string;
        image?: string;
        description?: string;
    }>(),
    {
        userName: 'userName',
        image: 'image',
        description: 'description',
    }
);
</script>

<template>
    <div
        class="flex flex-row self-center items-center justify-center size-full gap-24 bg-stone-300"
    >
        <img class="rounded-full size-72" :src="image" />
        <div class="flex flex-col items-center self-center justify-center size-[50%]">
            <h1 class="text-6xl font-black underline">{{ userName }}</h1>
            <p class="text-2xl text-center font-bold text-wrap">
                {{ description }}
            </p>
        </div>
    </div>
</template>
