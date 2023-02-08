<template>
	<section
		class="bg-transparent grid overflow-hidden gap-5 md:grid-flow-col md:grid-cols-2 md:max-h-[350px] font-['DM_Sans']"
		data-c-featured>
		<img class="object-cover object-top h-[min(400px,40vh)] md:h-[100%] flex-grow w-full" src="../../assets/ig/pk.png"
			alt="Feautured Article">
		<article
			class="bg-white text-base grid place-content-center gap-y-[0.3rem] md:max-h-[350px] px-7 py-9 md:py-0 overflow-hidden">
			<h2 class="font-header font-normal text-3xl md:-mt-9">Lorem, ipsum. lorji</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, distinctio magnam! Iste deleniti impedit
				officiis?</p>
			<span class="flex flex-row gap-x-2 text-[1.1rem] font-bold text-[#636e72] mt-2">
				<svg viewBox="0 0 30 30" class="w-[16px] fill-[#636e72]">
					<use href="#author"></use>
				</svg>

				<cite>By <span class="font-header not-italic">Charlie Puth</span></cite>
			</span>
			<span class="flex flex-row gap-x-2 text-[1.1rem] font-bold text-[#636e72]">
				<svg viewBox="0 0 30 30" class="w-[16px] fill-[#636e72]">
					<use href="#time"></use>
				</svg>

				<time>11/20/23</time>
			</span>
		</article>
	</section>
</template>

<script setup lang="ts">

</script>

<style>
[data-c-featured] {
	/* grid-template-columns: repeat(2, 1fr); */
	/* max-height: 300px; */

}
</style>