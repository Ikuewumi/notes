<template>

	<div class="h-[300px] outline outline-2 bg-white grid place-content-center text-center rounded-sm gap-y-2 px-3"
		:class="storeNotes.$state.dropping ? '!outline-dashed !outline-[#fd79a8] !outline-5' : ''"
		@dragover="evts.dragOverEvt" @drop="evts.dropEvt($event, emit)" @dragend="evts.dragEndEvt" @dragenter="evts.dragEnterEvt"
		@dragleave="evts.dragExitEvt">
		<h3 class="font-header text-2xl font-semibold text-[#8395a7]">Drop a markdown file here!</h3>
		<p class="font-sans text-[1.2rem]">Or <span class="text-[#fd79a8] cursor-pointer" @click="inputFile.click()">
				browse your files
			</span></p>

		<input type="file" ref="inputFile" accept=".md" class="hidden" @change="evts.fileInputEvt">
	</div>


	<button @click="emit('to-preview')" class="mt-5 btn-right">Preview</button>
</template>


<script setup lang="ts">

import { evts } from '../../composables/drop';
import { useNotes } from "../../stores/note";
const emit = defineEmits<{ 
	(event: 'uploaded'): void
	(event: 'to-preview'): void
 }>()

const storeNotes = useNotes()
const inputFile = $ref(null as unknown as HTMLInputElement)



</script>