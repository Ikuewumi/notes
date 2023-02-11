import {defineStore} from 'pinia';


export const useNotes = defineStore('useNotes', {

	state: () => {
		return {
			dropping: false,
			text: ''
		}
	},


	actions: {
		changeText(t: string) {
			this.text = t
		}
	},


	getters: {
		
	}


})