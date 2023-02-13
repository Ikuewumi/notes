<template>
	<div class="page-grid">
		<h1 class="font-header text-center text-3xl font-semibold uppercase underline">Playground</h1>
		<section class="article-page" v-html="converter.makeHtml(sampleMd)"></section>
		<Loader />
	</div>
</template>

<script setup lang="ts">
import Loader from '../components/utilities/Loader.vue';
import { converter, sampleMd } from '../composables/md';
</script>

<style scoped>

</style>