import {firebaseApp} from "./main";


export const initDb = async () => {
	const {getFirestore} = await import("firebase/firestore");
	const db = getFirestore(firebaseApp)
	return db
}

export const initAuth = async () => {
	const {getAuth} = await import("firebase/auth");
	const auth = getAuth(firebaseApp)
	return auth
}


