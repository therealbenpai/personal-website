<script setup lang="ts">
useHead({
    title: 'Contact',
});

useSeoMeta(
    Utilities.generateSEOMeta(
        'Contact',
        'A list of all of the ways you can contact me.',
        '/contacts',
    ),
);

const { data: contacts } = await useFetch(`/api/contact/all`);
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Contact</h1>
        <p class="text-lg">You can contact me through the following methods:</p>
        <div class="grid grid-col-1 gap-4">
            <div
                v-for="method in contacts"
                :key="method.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="method.link">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-6">
                            <Icon :name="method.icon" size="24px" />
                            <h2 class="text-2xl font-semibold">
                                {{ method.name }}
                            </h2>
                        </div>
                        <p class="text-lg">{{ method.identifier }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
