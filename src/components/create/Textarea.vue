<template>
	<textarea name="note" class="h-[80vh] resize-y px-3 py-2 rounded-sm text-[1.3rem]"
		placeholder="Write your note in here... - markdown supported">{{ storeNotes.text }}</textarea>
</template>

<script setup lang="ts">
import { useNotes } from '../../stores/note';

const storeNotes = useNotes()
</script>

<style scoped>

</style>