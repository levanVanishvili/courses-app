import { CourseCard } from "../course-card/course-card";

export const mockedCourseList: CourseCard[] = [
  {
    id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
    title: "JavaScript",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
    creationDate: new Date(),
    duration: 160,
    authors: ["Vasiliy Dobkin", "Nicolas Kim"],
  },
  {
    id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
    title: "Angular",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: new Date(),
    duration: 210,
    authors: ["Anna Sidorenko", "Valentina Larina"],
  },
  {
    id: "de5aaa59-90f5-4dbc-b629-aaf205c551ba",
    title: ".Net",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
    creationDate: new Date(),
    duration: 1024,
    authors: [ "Nicolas Kim kardash"],
  },
  {
    id: "de5aaa59-90f5-4dbc-b8a9-aaf205c571ba",
    title: "Java",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
    creationDate: new Date(),
    duration: 520,
    authors: ["Vasiliy Dob"],
  }
];
