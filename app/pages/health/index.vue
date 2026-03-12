<script setup lang="ts">
import _ from 'lodash';

useHead({
    title: 'Health',
});

useSeoMeta(
    Utilities.generateSEOMeta(
        'Health',
        'Information about my health and wellness.',
        '/health'
    )
);

const { data: health } = await useFetch(`/api/health/all`);
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-auto">
        <h1 class="text-4xl font-bold">Health Conditions</h1>
        <p class="text-lg">
            I suffer from multiple health conditions. Click on any of the
            conditions below to learn more about them.
        </p>
        <div class="grid grid-col-1 gap-4">
            <div
                v-for="condition in health"
                :key="condition.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="`/health/${condition.name}`">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-2xl font-semibold">
                            {{ condition.fullname }}
                        </h2>
                        <p
                            v-if="condition.aka"
                            class="align-middle text-md font-medium text-stone-300"
                        >
                            Also known as:
                            <span class="italic font-light pl-1">{{ condition.aka }}</span>
                        </p>
                        <p class="text-md text-stone-300 italic">
                            {{ condition.description.split('\n')[0] }}
                        </p>
                        <div class="flex flex-row gap-4 my-2">
                            <span
                                :class="Mapper.getHealthColor(condition.type)"
                                class="text-md px-4 py-1 rounded-2xl"
                            >
                                <Icon
                                    :name="Mapper.getHealthIcon(condition.type)"
                                    size="16px"
                                    class="translate-y-0.5"
                                />
                                {{ _.capitalize(condition.type) }}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
