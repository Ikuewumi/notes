<template>
	<main class="page-grid">
		<h1 class="font-header text-3xl font-semibold text-center hidden">Create A New Note</h1>

		<section class="grid gap-y-6">
			<nav class="flex flex-row w-fit text-[#2d3436] border-b-2 border-solid">
				<span class="cursor-pointer lowercase font-header px-3 py-2 link-form-start"
					:class="booleans.category.metadata ? 'active' : ''" @click="categories.toMetadata">Metadata</span>
				<span class="cursor-pointer lowercase font-header px-3 py-2 link-form-start border-l-2 border-solid"
					:class="booleans.category.content ? 'active' : ''" @click="categories.toContent">Content</span>
			</nav>
		</section>

		<section>
			<article class="grid gap-1" v-if="booleans.category.metadata">

				<h2 class="font-header text-4xl font-normal text-[#636e72]">
					Metadata
				</h2>

				<p class="text-[1.2rem]">Information about your article</p>



			</article>

			<article class="grid gap-1" v-if="booleans.category.content">

				<h2 class="font-header text-4xl font-normal text-[#636e72]">
					Content
				</h2>

				<p class="text-[1.2rem]">Add your content. Write directly, Or upload a markdown file. To write markdown articles, we recommend <a
						href="https://stackedit.io/" class="link-underline" style="--h-line:4px;" target="_blank">StackEdit</a></p>

				<nav class="flex flex-row flex-wrap w-fit mt-3 border-solid border-b-2" v-if="booleans.category.content">
					<span class="w-[50px] aspect-square grid place-content-center link-form-start cursor-pointer"
						@click="booleans.change('text')" :class="booleans.data.text ? 'active' : ''">
						<svg viewBox="0 0 26 26" class="w-[20px] aspect-square fill-[#636e72]">
							<use href="#keyboard"></use>
						</svg>
					</span>

					<span
						class="w-[50px] aspect-square grid place-content-center link-form-start cursor-pointer border-solid border-l-2"
						:class="booleans.data.dropzone ? 'active' : ''" @click="booleans.change('dropzone')">
						<svg viewBox="0 0 26 26" class="w-[20px] aspect-square fill-[#636e72]">
							<use href="#upload"></use>
						</svg>
					</span>

					<span
						class="w-[50px] aspect-square grid place-content-center link-form-start cursor-pointer border-solid border-l-2"
						:class="booleans.data.preview ? 'active' : ''" @click="booleans.change('preview')">
						<svg viewBox="0 0 26 26" class="w-[20px] aspect-square fill-[#636e72]">
							<use href="#analyze"></use>
						</svg>
					</span>
				</nav>

			</article>


		</section>



		<form class="text-[1.3rem] gap-5 grid mt-1" @submit.prevent="categories.toContent"
			v-if="booleans.category.metadata">
			<div class="gap-5 grid-container">

				<input v-model="ime.title" class="px-3 md:px-4 py-3" type="text" name="title" placeholder="*Title of the Note"
					title="Enter the title of the note" required>
				<input v-model="ime.image" class="px-3 md:px-4 py-3" type="text" name="image" placeholder="Featured Image (URL)"
					title="Optional. Add cover image URL here">
				<input v-model="ime.tags" class="px-3 md:px-4 py-3" type="text" name="tags" placeholder="*Tags-comma separated"
					title="Add tags about the article example-(painting,micheangelo)" required>
				<input v-model="ime.categories" class="px-3 md:px-4 py-3" type="text" name="categories"
					placeholder="*Categories-comma separated"
					title="Add the categor(y/ies) of life this article falls under. Usually less specific than tags example-(arts)"
					required>

			</div>


			<textarea v-model="ime.excerpt" name="excerpt" class="resize-y min-h-[150px] px-3 md:px-4 py-3"
				placeholder="*Excerpt" required></textarea>



			<button
				class="btn-right">Next</button>

		</form>


		<section class="grid" v-if="booleans.category.content">

			<Textarea v-if="booleans.data.text" @to-preview="toPreview" />
			<Dropzone v-if="booleans.data.dropzone" @to-preview="toPreview" />
			<Preview v-if="booleans.data.preview" @to-confirm="confirmDialog = true" />
		
		</section>


		<Dialog text="Save this note?" :d="confirmDialog" @no="confirmDialog=false" @yes="" />
	</main>
</template>

<script setup lang="ts">
import Textarea from "../../components/create/Textarea.vue";
import Dropzone from "../../components/create/Dropzone.vue";
import Preview from "../../components/create/Preview.vue";
import Dialog from "../../components/utilities/Dialog.vue";
import { checkMetadata } from "../../composables/create";
import { useNotes } from "../../stores/note";
import { watch } from "vue";
import { asyncLoad } from "../../composables/toast";
import { zMetadata } from "../../composables/z";
const storeNotes = useNotes()
const inputFile = $ref(null as unknown as HTMLInputElement)

const booleans = $ref({
	data: {
		text: false,
		dropzone: false,
		preview: false
	} as { [index: string]: boolean },

	change(key: 'text' | 'dropzone' | 'preview') {
		Array.from(Object.keys(booleans.data)).forEach(k => {
			booleans.data[k] = k === key
		})
	},


	category: {
		metadata: true,
		content: false
	} as { [index: string]: boolean },



	changeCategory(key: 'metadata' | 'content') {
		Array.from(Object.keys(booleans.category)).forEach(k => {
			booleans.category[k] = k === key
		})
	},
})


const toPreview = () => booleans.change('preview');


// IME short of Initial Metadata Elements to get the most updated data from the form
const ime = $ref({
	title: '',
	categories: '',
	excerpt: '',
	image: '',
	tags: ''
})


let confirmDialog = $ref(false)



const categories = {

	toMetadata() {
		booleans.changeCategory('metadata');


	},

	async toContent() {

		await asyncLoad(async () => {
			const metadata = await zMetadata.parseAsync(ime)
			storeNotes.storeMetadata(metadata)
			console.log(metadata)
			booleans.changeCategory('content')
			booleans.change('text')
		})



	},


	confirm() {
		confirmDialog = true
	}


}


// const dialogConfirm

</script>

<style scoped>

</style>