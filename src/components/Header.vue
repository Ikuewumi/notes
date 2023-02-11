<template>
	<header class="shadow-sm shadow-gray-50 bg-white subgrid cols">

		<div>

			<div class="mx-auto grid grid-cols-2 md:grid-cols-3 w-full justify-between  place-items-center pr-1 py-2">



				<!-- Logo -->
				<span class="flex flex-row place-items-center gap-x-2 justify-self-start">
					<svg class="w-[45px] md:w-[65px] aspect-square fill-[#718093]" view-box="0 0 30 30">
						<use href="#outlines"></use>
					</svg>

					<strong class="font-header font-semibold text-3xl md:text-4xl">notes</strong>
				</span>



				<div class="md:flex flex-row place-content-center gap-x-5 lowercase text-3xl font-[300] font-header hidden">
					<RouterLink to="/" class="link-underline">home</RouterLink>
					<RouterLink to="/index" class="link-underline">index</RouterLink>
				</div>




				<button @click="logIn" v-if="!user?.user?.uid"
					class="justify-self-end ml-auto font-header px-5 md:px-8 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-sm">Log
					In</button>




				<!-- TODO Enter the  "user?.user?.photoURL!" in the src -->
				<RouterLink v-else to="/you" class="justify-self-end"><img src="../assets/ig/003.jpg"
						class="w-[40px] object-cover aspect-square  font-header  text-white rounded-sm outline-slate-200 -outline-offset-4 outline-4">
				</RouterLink>


			</div>
		</div>


	</header>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { logIn } from "../composables/auth";
import { useUser } from "../stores/user";

const user = useUser()
</script>

<style scoped>

</style>