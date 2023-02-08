<script setup lang="ts">
import Header from './components/Header.vue';
import Vectors from './components/Vectors.vue';
</script>

<template>
	<div class="w-full min-h-[100vh] body-gradient">
		<Header />

		<RouterView />

		<Vectors />
	</div>
</template>

<style>

</style>
