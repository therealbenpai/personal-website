<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-background h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <slot />
        </div>
    </div>
    <MobileUI>
        <slot />
    </MobileUI>
</template>
