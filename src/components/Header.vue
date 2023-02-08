<template>
	<header class="shadow-sm shadow-gray-50 bg-white subgrid cols">

		<div>

			<div class="mx-auto grid grid-cols-3 w-full justify-between place-content-center place-items-center pr-1 py-2">



				<!-- Logo -->
				<span class="flex flex-row place-items-center gap-x-2 justify-self-start">
					<svg class="w-[65px] aspect-square fill-[#718093]" view-box="0 0 30 30">
						<use href="#outlines"></use>
					</svg>

					<strong class="font-header font-semibold text-4xl">notes</strong>
				</span>



				<div class="flex flex-row place-content-center gap-x-5 lowercase text-3xl font-[300] font-header">
					<RouterLink to="/" class="link-underline">home</RouterLink>
					<RouterLink to="/index" class="link-underline">index</RouterLink>
				</div>




				<button
					class="justify-self-end font-header px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-sm">Sign
					Up</button>


			</div>
		</div>


	</header>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>

</style>