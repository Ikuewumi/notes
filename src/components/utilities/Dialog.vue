<template>
    <div data-c-dialog :class="d ? 'active' : ''" @click.self="emit('no')">
        <dialog class="bg-[#fd79a8] w-[min(350px,98vw)] px-4 py-3 rounded-md shadow-lg shadow-[#fd79a870] text-[13px] md:text-[1rem] fixed inset-auto bottom-[20px] grid items-center align-center gap-3 left-[min(20px,5vw)] z-50 text-white">
            <p>{{ text }}</p>
            <div class="justify-self-end flex gap-2">
                <button class="px-5 py-1 rounded-md bg-[#636e72] hover:bg-[#7c9199]" @click="emit('yes')">Yes</button>
                <button class="px-5 py-1 rounded-md bg-[#00000010] hover:bg-[#00000020]" @click="emit('no')">No</button>
            </div>
        </dialog>
    </div>
</template>

<script setup lang="ts">
defineProps({ 
    d: {
        type: Boolean,
        default: true
    },
    text: {
        type: String,
        default: 'Go into the unknown'
    }
})

const emit = defineEmits<{
    (event: 'yes'): void
    (event: 'no'): void
}>()
</script>

<style lang="scss">
[data-c-dialog] {
    & {
        display: none;
    }

    &.active {
        display: flex;
    }


    &.active::before {
        position: fixed;
        content: '';
        z-index: 49;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: #00000020;
        backdrop-filter: blur(10px);
    }
}

</style>