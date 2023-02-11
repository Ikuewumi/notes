<template>
	<section
		class="bg-transparent grid overflow-hidden gap-5 md:grid-flow-col md:grid-cols-2 md:max-h-[350px] font-['DM_Sans'] relative"
		data-c-featured>
		<img class="object-cover object-top h-[min(400px,40vh)] md:h-[100%] flex-grow w-full" src="../../assets/ig/003.jpg"
			alt="user">
		<article
			class="bg-white text-base grid place-content-center gap-y-[0.3rem] md:max-h-[350px] px-7 py-9 md:py-0 overflow-hidden">
			<h2 class="font-header font-normal text-3xl md:-mt-9">{{ user.user.displayName }}</h2>
			<span class="flex flex-row gap-x-2 text-[1.1rem] font-bold text-[#636e72] mt-2">
				<svg viewBox="0 0 32 32" class="w-[16px] fill-[#636e72]">
					<use href="#gmail"></use>
				</svg>

				<span class="not-italic">{{ user.user.email }}</span>
			</span>
		</article>
		<RouterLink to="/create"
			class="font-header px-5 md:px-5 py-2 bg-gray-100 text-[1.1rem] hover:bg-gray-50 text-[#636e72] shadow-sm rounded-sm absolute top-0 right-0 -translate-x-1 translate-y-1">
			New
			Note</RouterLink>
	</section>

</template>

<script setup lang="ts">
import { useUser } from '../../stores/user';

const user = useUser()
</script>

<style scoped>

</style>