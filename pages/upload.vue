<script setup lang="ts">
const file = ref<File | null>(null);
const fileUpload = ref<string>('Upload File');
const link = ref<string>('');

function onFileChange(e: Event) {
    link.value = '';
    const target = e.target as HTMLInputElement;
    const file2 = target.files?.item(0);
    if (!file2) {
        file.value = null;
        fileUpload.value = 'Upload File';
        return
    }
    file.value = file2;
    fileUpload.value = file.value?.name!
}

const toBase64 = () => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.value!);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

async function upload() {
    const res = await $fetch('/api/uploadFile', {
        method: 'POST',
        body: {
            filename: file.value!.name,
            data: await toBase64(),
        }
    });
    if (Object.hasOwn(res, 'key')) {
        link.value = (res as Record<string, string>).key
    }
}
</script>

<template>
    <div class="w-screen h-screen bg-[#282C34] place-items-center absolute top-0">
        <form @submit.prevent="upload" class="flex flex-col gap-8 text-center bg-[#21252b] my-24 p-16 rounded-2xl">
            <h1 class="text-4xl mb-16">Upload a File</h1>
            <label id="upload" for="uploads" class="border border-[#ccc] inline-block px-2 py-4 cursor-pointer">{{ fileUpload }}</label>
            <input type="file" @change="onFileChange" class="hidden" id="uploads" name="uploads"/>
            <button type="submit" class="px-8 py-4 bg-slate-400 rounded-xl">Upload</button>
            <div v-if="link">
                <p>File Uploaded Successfully</p>
                <a :href="`https://cdn.benshawmean.com/${link}`" target="_blank">Link to file</a>
            </div>
        </form>
    </div>
</template>