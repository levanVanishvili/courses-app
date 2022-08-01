import { Author } from "src/app/services/author";

export interface CourseCard {
    id: string,
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    authors: Author[]
}
