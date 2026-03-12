<script setup lang="ts">
withDefaults(
    defineProps<{
        icon?: string;
        name?: string;
    }>(),
    {
        icon: 'healthicons:health-outline',
        name: 'name',
    }
);
</script>

<template>
    <div
        class="flex flex-row self-center items-center justify-center size-full gap-24 bg-stone-300"
    >
        <Icon :name="icon" mode="svg" class="size-72" />
        <div
            class="flex flex-col items-center self-center justify-center size-[50%]"
        >
            <h1 class="text-6xl font-black underline">Health Condition:</h1>
            <p class="text-3xl text-center font-bold text-wrap">
                {{ name }}
            </p>
        </div>
    </div>
</template>
