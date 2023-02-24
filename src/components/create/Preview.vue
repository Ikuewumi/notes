<template>
	<div v-if="storeNotes.text" class="contents">
		<section class="article-page" v-html="previewMd"></section>
		<button class="mt-5 btn-right" @click="emit('to-confirm')">Save</button>
	
	</div>
	<svg v-else viewBox="0 0 550.71039 567.98584" class="mx-auto w-[min(300px,70vw)]">
		<use href="#blank"></use>
	</svg>



</template>

<script setup lang="ts">
import { useNotes } from '../../stores/note';
import { converter } from '../../composables/md';

const storeNotes = useNotes()

const emit = defineEmits<{
	(event: 'to-confirm'): void
}>()
const previewMd = $computed(() => {
	return converter.makeHtml(storeNotes.text)
})
</script>

<style>

</style>