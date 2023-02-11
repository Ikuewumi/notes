<template>
	<main class="page-grid">
		<Featured class="" />
		<div class="grid gap-y-3 mt-5">
			<h2 class="font-header font-semibold text-3xl">Common Heaptic Artery</h2>
			<p class="text-[1.4rem] font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam,
				molestias
				exercitationem!</p>
		</div>
		<div class="grid-container">
			<Card class="" />
			<Card class="" />

		</div>
		<IndexCard class="mt-5" />

	</main>
</template>

<script setup lang="ts">
import Featured from '../../components/cards/Featured.vue';
import Card from '../../components/cards/Card.vue';
import IndexCard from '../../components/cards/IndexCard.vue';
</script>

<style>

</style>