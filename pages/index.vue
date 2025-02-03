<script setup lang="ts"></script>

<template>
    <div class="flex flex-row px-32 py-16 padding-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0">
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 padding-4 gap-2">
                <h1 class="text-4xl font-bold">Welcome to my website!</h1>
                <p class="text-lg">
                    This is a simple website built with Vite and Vue 3.
                </p>
            </div>
        </div>
    </div>
</template>
