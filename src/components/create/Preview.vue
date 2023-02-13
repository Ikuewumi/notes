<template>
	<section v-if="storeNotes.text" class="article-page" v-html="previewMd"></section>
	<svg v-else viewBox="0 0 550.71039 567.98584" class="mx-auto w-[min(300px,70vw)]">
		<use href="#blank"></use>
	</svg>
</template>

<script setup lang="ts">
import { useNotes } from '../../stores/note';
import { converter } from '../../composables/md';

const storeNotes = useNotes()


const previewMd = $computed(() => {
	return converter.makeHtml(storeNotes.text)
})
</script>

<style>

</style>