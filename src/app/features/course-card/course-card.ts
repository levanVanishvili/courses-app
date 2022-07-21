export interface CourseCard {
    id: string,
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    authors: string[]
    isEditable: boolean
}
