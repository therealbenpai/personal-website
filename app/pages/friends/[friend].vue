<script setup lang="ts">
const route = useRoute();
const { friend } = route.params;
const { data: friendData } = await useFetch(`/api/friend/${(friend as string).toLowerCase()}`);
</script>

<template>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-if="!friendData"
    >
        <h1 class="text-4xl font-bold">No Friend Found Here</h1>
        <p class="text-lg">
            We were unable to find a friend by this name. Could you have typed it in wrong?
        </p>
    </div>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-else-if="!Array.isArray(friendData)"
    >
        <h1 class="flex flex-row gap-6 text-4xl font-semibold">
            <img
                class="rounded-full size-8 self-center"
                :src="friendData.image"
            />
            {{ friendData.name }}
        </h1>
        <p class="text-md text-stone-300" v-if="friendData.description">
            <span class="text-2xl font-extrabold">" </span>
            <span class="italic underline text-justify">{{
                friendData.description
            }}</span>
            <span class="text-2xl font-extrabold"> "</span>
        </p>
        <p class="text-md text-stone-500">
            {{ Formatter.processTime(friendData.start) }} to
            {{ friendData.end ? Formatter.processTime(friendData.end) : 'Present' }}
        </p>
        <p
            class="text-md text-stone-500"
            v-if="friendData.aliases && friendData.aliases.length > 0"
        >
            Former Names:
            {{ Formatter.listAnd(friendData.aliases.split(',')) }}
        </p>
        <div class="flex flex-row gap-4 my-2">
            <span
                :class="{
                    'bg-green-500': friendData.active,
                    'bg-gray-500': !friendData.active,
                }"
                class="text-md px-4 py-1 rounded-2xl text-center items-center"
            >
                <Icon
                    :name="
                        (() =>
                            !friendData.active
                                ? 'mdi:clock-outline'
                                : 'material-symbols:person-rounded')()
                    "
                    size="16px"
                    class="translate-y-0.5"
                />
                {{ friendData.active ? 'Current' : 'Former' }}
            </span>
            <span
                :class="{ [tag.color]: true }"
                class="text-md px-4 py-1 rounded-2xl text-center items-center"
                v-if="
                    friendData.custom_tags && friendData.custom_tags.length > 0
                "
                v-for="tag in friendData.custom_tags"
            >
                <Icon :name="tag.icon" size="16px" class="translate-y-0.5" />
                {{ tag.text }}
            </span>
        </div>
    </div>
</template>
