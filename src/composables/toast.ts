import { useToast } from "../stores/toast"
// const store = useToast()

export const asyncLoad = async(func: () => Promise<any>, msg = "Loading") => {

	const toast = useToast()

	try {
		toast.startLoad()
		const result = await func()
		return result
	} catch(e) {
		console.log('toasting')
		console.error('An error occurred')
		toast.message(String(e))
	} finally {
		toast.stopLoad()
	}

} 