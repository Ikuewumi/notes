import { defineStore } from "pinia";

export const useToast = defineStore('useToast', {

	state: () => {
		return {
			msg: '',
			int: 0
		}
	},

	actions: {
		changeMsg(t:string) {
			this.msg = t
		},

		message(t: string, time = 400) {
			clearInterval(this.int)
			this.changeMsg(t)
			this.int = setTimeout(() => { this.msg = '' }, time)
		}
		
	}

}) 