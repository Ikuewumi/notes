import {defineStore} from 'pinia';
import {zMetadata} from "../composables/z";


export const useNotes = defineStore('useNotes', {

	state: () => {
		return {
			dropping: false,
			text: '',
			metadata: {
				title: '',
				excerpt: '',
				tags: '',
				categories: '',
				image: ''
			}
		}
	},


	actions: {
		changeText(t: string) {
			this.text = t
		},

		storeMetadata(obj: any) {
			const m = zMetadata.parse(obj)
			this.metadata = m
		}
	},


	getters: {
		
	}


})