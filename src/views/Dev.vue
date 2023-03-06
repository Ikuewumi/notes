<template>
	<div class="page-grid">
		<h1 class="font-header text-center text-3xl font-semibold uppercase underline hidden">Playground</h1>
		<Metadata />
		<section class="article-page" v-html="converter.makeHtml(sampleMd)"></section>
		<Preview />
	</div>
</template>

<script setup lang="ts">
import Metadata from '../components/utilities/Metadata.vue';
import Preview from '../components/create/Preview.vue';
import { converter, sampleMd } from '../composables/md';
import { useToast } from '../stores/toast';

const toast = useToast()

toast.message('good grieef!')
</script>

<style scoped>

</style>