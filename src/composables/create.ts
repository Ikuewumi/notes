import { zMetadata } from "./z";


export const checkMetadata = async (input:any) => {
	const metadata = zMetadata.parse(input)
	return metadata
}



