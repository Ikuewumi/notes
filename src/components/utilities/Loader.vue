<template>
	<div id="loader"
		class="bg-[#fd79a8] w-[min(300px,90vw)] px-4 py-3 rounded-md shadow-lg shadow-[#fd79a870] text-[13px] md:text-[1rem] fixed inset-auto bottom-[20px] flex flex-row flex-wrap items-center align-center gap-3 left-[min(20px,5vw)] z-50 text-white"
		:class="toast.loading ? 'active' : ''" role="alert">
		<svg class="w-[50px] fill-none stroke-[10px]" viewBox="-10 -10 160 160">
			<circle data-transparent cx="70" cy="70" r="70" class="stroke-[#00000040] shadow-lg shadow-[#fd79a8]"></circle>
			<circle data-loader cx="70" cy="70" r="70" class="stroke-[#55efc4]"></circle>
		</svg>

		<span class="">
			Loading...
		</span>
	</div>
</template>

<script setup lang="ts">
import { useToast } from '../../stores/toast';

const toast = useToast()
</script>

<style lang="scss" >
#loader {
	transition: 1s;
	transform-origin: left;
	transform: translateX(-120%);


	&.active {
		transform: translateX(0%);
		svg {
			animation: load .5s infinite;
			circle[data-loader] { --percent: -30; }
		}
	}


	@keyframes load {
		to {
			transform: rotate(360deg);
		}
	}


	svg {
		circle[data-loader] {
			--full-offset: 440px;
			--percent: 70;
			stroke-width: 10px;
			stroke-linecap: round;
			//440px is the full length offset and array
			stroke-dasharray: var(--full-offset);
			stroke-dashoffset: calc(var(--full-offset) - (var(--full-offset) * var(--percent)) / 100);
			transition: all 1.5s ease;
		}
	}




}
</style>