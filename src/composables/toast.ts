import { useToast } from "../stores/toast"
// const store = useToast()

export const asyncLoad = async(func: () => Promise<any>, msg: string = "Loading") => {

	try {
		useToast().startLoad()
		return func()
	} catch(e) {
		console.error('An error occurred')
		useToast().changeMsg(String(e))
	} finally {
		useToast().stopLoad()
	}

} 