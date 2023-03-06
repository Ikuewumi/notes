<template>
	<div id="toast"
		class="bg-[#fd79a8] w-[min(300px,90vw)] px-4 py-3 rounded-md shadow-lg shadow-[#fd79a870] text-[13px] md:text-[1rem] fixed inset-auto bottom-[20px] left-[min(20px,5vw)] text-white"
		:class="toast.msg ? 'active' : ''" role="alert">
		<span class="break-words text-[1.35rem]">
			{{ toast.msg }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { useToast } from '../../stores/toast';

const toast = useToast()
</script>

<style lang="scss" >
#toast {
	// transition: 1s;
	transform-origin: left;
	transform: translateX(-120%);


	&.active {
		transform: translateX(0%);
	}




}
</style>