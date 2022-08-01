import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAuthorsState } from "./courses.selectors";
import { requestAllCourses, 
         requestSingleCourse,
         requestFilteredCourses,
         requestEditCourse,
         requestCreateCourse,
         requestDeleteCourse} from "./courses.actions";
import { CourseCard } from "src/app/features/course-card/course-card";

@Injectable()
export class CoursesStateFacade {
    isAllCoursesLoading$ = this.store.select(selectAuthorsState.isAllCoursesLoadingSelector);
    isSingleCourseLoading$ = this.store.select(selectAuthorsState.isSingleCourseLoadingSelector);
    isSearchingState$ = this.store.select(selectAuthorsState.isSearchingStateSelector);
    courses$ = this.store.select(selectAuthorsState.getCourses);
    allCourses$ = this.store.select(selectAuthorsState.getAllCourses);
    course$ = this.store.select(selectAuthorsState.getCourse);
    errorMessage$ = this.store.select(selectAuthorsState.getErrorMessage);

    constructor(private store: Store) { }

    getAllCourses () {
        this.store.dispatch(requestAllCourses());
    };

    getSingleCourse(id: string) {
        this.store.dispatch(requestSingleCourse({ id }));
    };

    getFilteredCourses(id: string) {
        this.store.dispatch(requestFilteredCourses({ id }));
    };

    editCourse(body: CourseCard, id: string) {
        this.store.dispatch(requestEditCourse({ body, id }));
    };

    createCourse(body: CourseCard) {
        this.store.dispatch(requestCreateCourse({ course: body }));
    };

    deleteCourse(id: string) {
        this.store.dispatch(requestDeleteCourse({ id }));
    };
}