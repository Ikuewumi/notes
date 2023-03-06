<template>
	<textarea name="note" ref="el" class="h-[250px] resize-y px-3 py-2 rounded-sm text-[1.3rem]" v-model="storeNotes.currentNote.content"
		placeholder="Write your note in here... - markdown supported"></textarea>
	
		<button @click="emit('to-preview')" class="mt-5 btn-right">Preview</button>
</template>

<script setup lang="ts">
import { useNotes } from '../../stores/note';
const emit = defineEmits<{
	(event: 'to-preview'): void
}>()
const storeNotes = useNotes()
const el = $ref(null as unknown as HTMLTextAreaElement)
// const writeText = (t: string) => storeNotes.changeText(t)
</script>

<style scoped>

</style>