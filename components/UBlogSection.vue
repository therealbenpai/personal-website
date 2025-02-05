<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">
            <slot name="title" mdc-unwrap="p h2" />
        </h2>
        <p class="text-lg">
            <slot name="description" mdc-unwrap="p" />
        </p>
    </div>
</template>
