import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { initAuth } from '../firebase'
import { useUser } from '../stores/user'

export const logIn = async () => {

	const auth = await initAuth()
	const provider = new GoogleAuthProvider()
	return signInWithPopup(auth, provider)
	

}

export const logOut = async () => {
	
	const auth = await initAuth()
	return signOut(auth)
	


}

export const checkUser = async () => {

	const auth = await initAuth()
	onAuthStateChanged(auth, (user) => {
		if (!user) {
			return useUser().removeUser()
		}
		
		useUser().changeUser(user);

	})

}