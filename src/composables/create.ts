import { zNote } from "./z";


export const checkMetadata = async (input:any) => {
	const metadata = zNote.parse(input)
	return metadata
}



