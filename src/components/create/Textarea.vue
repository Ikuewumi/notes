<template>
	<textarea name="note" ref="el" class="h-[250px] resize-y px-3 py-2 rounded-sm text-[1.3rem]"
		@change="storeNotes.changeText(el.value)"
		placeholder="Write your note in here... - markdown supported">{{ storeNotes.text }}</textarea>
</template>

<script setup lang="ts">
import { useNotes } from '../../stores/note';
const storeNotes = useNotes()
const el = $ref(null as unknown as HTMLTextAreaElement)
// const writeText = (t: string) => storeNotes.changeText(t)
</script>

<style scoped>

</style>