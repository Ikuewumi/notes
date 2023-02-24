import { useNotes } from "../stores/note"

const storeNotes = useNotes()

const checkFile = async (f:File) => {
	if (!f) throw Error('file invalid!')
	if (!f.name.endsWith('.md')) throw Error('not a markdown file')
	if (f.size > 50000) throw Error('file too large')

	return f

}


const getTextFromFile = async (f:File) => {return f.text()}

const dragEnterEvt = (e: DragEvent) => {
	e.preventDefault()
	storeNotes.dropping = true

}


const dragOverEvt = (e: DragEvent) => {
	e.preventDefault()
	storeNotes.dropping = true

}

const dragExitEvt = (e: DragEvent) => {
	e.preventDefault()
	storeNotes.dropping = false


}

const dragEndEvt = (e: DragEvent) => {
	e.preventDefault()

}


const dropEvt = (e: DragEvent, emit: any) => {
	e.preventDefault()
	storeNotes.dropping = false

	if (e.dataTransfer?.items) {
    Array.from(e.dataTransfer.items).forEach(async (item, i) => {
      if (item.kind !== 'file') {
				throw Error('please drop a file');
			}

			if (i !== 0) return


			const file = item.getAsFile();
			const text = await getTextFromFile(await checkFile(file!))

			console.log('changed')

			storeNotes.changeText(text)

			emit('to-preview')



			console.log(`… file[${i}].name = ${file!.name}`);
    });


  }


}




const fileInputEvt = async (e: Event) => {
	const el = e.target as unknown as HTMLInputElement

	if (!el.files?.length) throw Error('no file present')

	const files = Array.from(el.files)
	const file = files[0]
	console.log(file)

	const text = await getTextFromFile(await checkFile(file))

	storeNotes.changeText(text)

	console.log(text)



}



export const evts = {
	dragEndEvt,
	dragEnterEvt,
	dragExitEvt,
	dragOverEvt,
	dropEvt,
	fileInputEvt
}