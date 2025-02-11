<template>
    <div
        class="md:hidden flex flex-col md:flex-row px-8 md:px-32 py-4 md:py-16 gap-2 bg-[#282C34] font-rubik absolute top-0"
    >
        <NavBar />
        <MainInfo />
        <div class="flex flex-col gap-2 md:w-1/2 md:pl-12">
            <slot />
        </div>
    </div>
</template>