import { User, UserCredential } from "firebase/auth"
import { defineStore } from "pinia"


export const useUser = defineStore('useUser', {
	state: () => {
		return {
			user: null as unknown as User
		}
	},


	actions: {

		changeUser(user: User) {
			this.$state.user = user
		},


		removeUser() {
			this.$state.user = null as unknown as User
		}

	}
}) 