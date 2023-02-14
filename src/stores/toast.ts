import { defineStore } from "pinia";

export const useToast = defineStore('useToast', {

	state: () => {
		return {
			msg: '',
			int: 0,
			loading: false
		}
	},

	actions: {
		changeMsg(t:string) {
			this.msg = t
		},

		message(t: string, time = 1000) {
			clearInterval(this.int)
			this.changeMsg(t)
			this.int = setTimeout(() => { this.msg = '' }, time)
		},

		startLoad() {this.loading = true},
		stopLoad() {this.loading = false},
	}

}) 