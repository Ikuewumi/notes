export interface Note {
    title: string,
    image: string,
    tags: string,
    categories: string,
    excerpt: string,
}


export interface DbNote extends Note {
    code: string,
    uid: string,
    createdAt: number,
    updatedAt: number,
    author: string,
    authorImage: string
}