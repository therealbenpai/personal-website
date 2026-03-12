<script setup lang="ts">
withDefaults(
    defineProps<{
        icon?: string;
        type?: string;
        identifier?: string;
    }>(),
    {
        icon: 'mdi:globe',
        type: 'type',
        identifier: 'identifier',
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
            <h1 class="text-6xl font-black underline">Social Account</h1>
            <p class="text-2xl text-center font-bold text-wrap">
                {{ type }} - {{ identifier }}
            </p>
        </div>
    </div>
</template>
