<template>
    <div
        class="hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-[#282C34] h-screen font-rubik absolute top-0"
    >
        <MainInfo />
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <NavBar />
            <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
                <slot />
            </div>
        </div>
    </div>
    <MobileUI>
        <slot />
    </MobileUI>
</template>
