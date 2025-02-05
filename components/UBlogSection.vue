<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">
            <slot name="title" />
        </h2>
        <slot name="description" mdc-unwrap="p" />
    </div>
</template>
