import {defineStore} from 'pinia';
import {zNote} from "../composables/z";


export const useNotes = defineStore('useNotes', {

	state: () => {
		return {
			dropping: false,
			currentNote: {
				title: '',
				excerpt: '',
				tags: '',
				categories: '',
				image: '',
				content: ''
			}
		}
	},


	actions: {
		changeText(t: string) {
			this.currentNote.content = t
		},

		storeCurrentNote() {
			const m = zNote.parse(this.currentNote)
			this.currentNote = {
				...this.currentNote,
				...m
			}
		}
	},


	getters: {
		
	}


})