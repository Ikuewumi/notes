<template>
	<main class="page-grid">
		<h1 class="font-header text-3xl font-semibold text-center hidden">You Page</h1>
		<Profile v-if="user?.user?.uid" />
	</main>
</template>

<script setup lang="ts">
import { useUser } from "../../stores/user";
import Profile from "../../components/user/Profile.vue";

const user = useUser()

</script>

<style scoped>

</style>