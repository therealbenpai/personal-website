<script setup lang="ts">
useHead({
    title: 'Friends',
});

useSeoMeta(
    Utilities.generateSEOMeta(
        'Friends',
        'A list of all of my friends (current and former).',
        '/friends',
    ),
);

const { data: friends } = await useFetch(`/api/friend/all`);
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Friends</h1>
        <p class="text-lg">
            Here is a list of all of my friends (both past and present). I am trying my best to
            compile a full list of everyone that I can. I apologize if you aren't listed here. If you
            would like to be added or have incorrect/missing information, please let me know. Also,
            most of these dates are rough estimations as I am unable to get complete data on all of this.
        </p>
        <div class="grid grid-cols-1 gap-4">
            <div
                v-for="friend in friends"
                :key="friend.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a class="no-underline" :href="`/friends/${friend.name}`">
                    <div class="flex flex-col gap-2">
                    <h2 class="text-2xl font-semibold">
                        {{ friend.name }}
                    </h2>
                    <p class="text-md text-stone-300" v-if="friend.description">
                        <span class="text-2xl font-extrabold">" </span>
                        <span class="italic underline text-justify">{{ friend.description.slice(0, 50) }}...</span>
                        <span class="text-2xl font-extrabold"> "</span>
                    </p>
                </div>
                </a>
            </div>
        </div>
    </div>
</template>
