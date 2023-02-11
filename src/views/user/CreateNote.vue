<template>
	<main class="page-grid">
		<h1 class="font-header text-3xl font-semibold text-center">Create A New Note</h1>
		<div>

			<nav class="flex flex-row flex-wrap bg-white w-fit">
				<span class="w-[50px] aspect-square grid place-content-center outline outline-1 outline-[#636e72]"
					@click="booleans.change('text')">
					<svg viewBox="0 0 26 26" class="w-[30px] aspect-square fill-[#636e72]">
						<use href="#keyboard"></use>
					</svg>
				</span>

				<span class="w-[50px] aspect-square grid place-content-center outline outline-1 outline-[#636e72]"
					@click="booleans.change('dropzone')">
					<svg viewBox="0 0 26 26" class="w-[30px] aspect-square fill-[#636e72]">
						<use href="#upload"></use>
					</svg>
				</span>

				<span class="w-[50px] aspect-square grid place-content-center outline outline-1 outline-[#636e72]"
					@click="booleans.change('preview')">
					<svg viewBox="0 0 26 26" class="w-[30px] aspect-square fill-[#636e72]">
						<use href="#analyze"></use>
					</svg>
				</span>
			</nav>
		</div>


		<Textarea v-if="booleans.data.text" />
		<Dropzone v-if="booleans.data.dropzone" />
		<Preview v-if="booleans.data.preview" />

	</main>
</template>

<script setup lang="ts">
import Textarea from "../../components/create/Textarea.vue";
import Dropzone from "../../components/create/Dropzone.vue";
import Preview from "../../components/create/Preview.vue";
import { useNotes } from "../../stores/note";
import { watch } from "vue";
const storeNotes = useNotes()
const inputFile = $ref(null as unknown as HTMLInputElement)

const booleans = $ref({
	data: {
		text: true,
		dropzone: false,
		preview: false
	} as { [index: string]: boolean },

	change(key: 'text' | 'dropzone' | 'preview') {
		Array.from(Object.keys(booleans.data)).forEach(k => {
			booleans.data[k] = k === key
		})
	}
})


watch(storeNotes, (n, o) => {

	console.log('changed store')
	console.log(n.text, o.text)

	if (n.text === o.text) return

	booleans.change("text");
})

</script>

<style scoped>

</style>