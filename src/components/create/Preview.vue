<template>
	<section class="article-page" v-html="previewMd"></section>
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