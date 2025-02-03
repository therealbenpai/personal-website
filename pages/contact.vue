<script setup lang="ts"></script>

<template>
    <div
        class="flex flex-row px-32 py-16 padding-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 padding-4 gap-4">
                <h1 class="text-4xl font-bold">Contact</h1>
                <p class="text-lg">
                    You can contact me through the following methods:
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        Email:
                        <a href="mailto:benpai@thefemdevs.com"
                            >benpai@thefemdevs.com</a
                        >
                    </li>
                    <li>
                        Discord:
                        <a href="https://discord.com/users/1158220643616182445"
                            >@therealbenpai</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
