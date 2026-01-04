<script setup lang="ts">
const route = useRoute();
const { friend } = route.params;
const friendProper = (friend as string).toLowerCase();
const { data: friendData } = await useFetch(`/api/friend/${friendProper}`);

if (friendData.value && !Array.isArray(friendData.value)) {
    defineOgImageComponent(
        'FriendMetaBanner',
        {
            userName: friendData.value.name || 'Unknown',
            image: friendData.value.image, // There will ALWAYS be an image
            description:
                friendData.value.description || 'No description available',
        },
        {
            cacheMaxAgeSeconds: 180,
            alt: `Friend Banner of ${friendData.value.name || 'Unknown'}`
        }
    );

    const pageTitle = `${friendData.value.name} - Benpai's Website`,
        pageDescription =
            friendData.value.description || 'No description available';

    useSeoMeta({
        ogUrl: `https://benshawmean.com/friends/${friendProper}`,
        ogTitle: pageTitle,
        twitterTitle: pageTitle,
        description: pageDescription,
        ogDescription: pageDescription,
        twitterDescription: pageDescription,
        ogImageAlt: 'Profile Picture',
        ogType: 'website',
        ogSiteName: "Benpai's Website",
        twitterCard: 'summary_large_image',
        twitterImageAlt: 'Profile Picture',
        twitterSite: '@therealbenpai',
        twitterCreator: '@therealbenpai',
    });
}
</script>

<template>
    <div
        class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto"
        v-if="!friendData"
    >
        <h1 class="text-4xl font-bold">No Friend Found Here</h1>
        <p class="text-lg">
            We were unable to find a friend by this name. Could you have typed
            it in wrong?
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
            {{
                friendData.end
                    ? Formatter.processTime(friendData.end)
                    : 'Present'
            }}
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
