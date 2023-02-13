<script setup lang="ts">
import Header from './components/Header.vue';
import Vectors from './components/Vectors.vue';
import Toast from './components/utilities/Toast.vue';
import { checkUser } from './composables/auth';

// Helps to track whether user is logged in or not
checkUser()
</script>

<template>
	<div class="w-full min-h-[100vh] body-gradient font-sans">
		<Header />

		<RouterView />

		<Vectors />

		<Teleport to="#app">
			<Toast />
		</Teleport>

	</div>
</template>

<style>

</style>
