import { addDoc, collection, doc, Timestamp, setDoc } from "firebase/firestore";
import { DbNote, Note } from "./types";
import { zDbNote, zNote } from "./z";
import { initDb } from "../firebase";
import { useUser } from "../stores/user";


export const genRandomString = (length = 7) => Array.from({length}).map(_ => Math.random().toString(36).slice(2, -1).at(0)).join("");
export const removeSpaces = (x: {[index: string]: any}) => {
    const newObj:{[index: string]: any} = {}
    Object.keys(x).forEach(key => { newObj[key] = (typeof(x[key]) === 'string') ? x[key].trim() : x[key] })
    return newObj
}

const sleep = (ms = 5000) => {
    return new Promise((res, rej) => { setTimeout(res, ms) })
}




const createError = async (func: () => Promise<any>, time=5000) => {
    let t = 0
    let result;
    sleep(5000).then()
    // func().then(result = )
    return result
}








const firestore = await initDb();
export const saveNote = async (m: any) => {
    const req = zNote.strip().safeParse(removeSpaces(m))
    if (!req.success) {throw Error('data is invalid')}

    const code = genRandomString()
    const user = useUser().user
    
    const note = zDbNote.safeParse({ 
        ...req.data, code, uid: user.uid,
        createdAt: Date.now(), updatedAt: Date.now(),
        author: user.displayName, authorImage: user.photoURL
    })
    if(!note.success) throw Error('data is invalid')


    const docRef = doc(collection(firestore, 'notes'))
    const result = await setDoc(docRef, note.data).catch(err => {throw Error('could not save note!')})
    console.log(result)
    return result
}









