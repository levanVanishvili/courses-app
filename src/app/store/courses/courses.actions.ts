import { createAction, props } from "@ngrx/store";
import { CourseCard } from "src/app/features/course-card/course-card";

export const requestAllCourses = createAction(
    '[Courses API] request Authors'
);

export const requestAllCoursesSuccess = createAction(
    '[Courses API] request All Courses Success',
    props<{courses: CourseCard[]}>()
);

export const requestAllCoursesFail = createAction(
    '[Courses API] request All Courses Fail',
    props<{error: string}>()
);

export const requestSingleCourse = createAction(
    '[Courses API] request Single Course',
    props<{id: string}>()
);

export const requestSingleCourseSuccess = createAction(
    '[Courses API] request Add Authors Success'
);

export const requestSingleCourseFail = createAction(
    '[Courses API] request Single Course Fail',
    props<{error: string}>()
);

export const requestFilteredCourses = createAction(
    '[Courses API] request Filtered Courses',
    props<{id: string}>()
);

export const requestFilteredCoursesSuccess = createAction(
    '[Courses API] request Filtered Courses Success',
    props<{courses: CourseCard}>()

);

export const requestDeleteCourse = createAction(
    '[Courses API] request Delete Course',
    props<{id: string}>()
);

export const requestDeleteCourseFail = createAction(
    '[Courses API] request Delete CourseFail',
    props<{error: string}>()
);

export const requestEditCourse = createAction(
    '[Courses API] request Edit Course',
    props<{body: CourseCard, id: string}>()
);

export const requestEditCourseSuccess = createAction(
    '[Courses API] request Edit Course Success'
);

export const requestEditCourseFail = createAction(
    '[Courses API] request Add Authors Fail',
    props<{error: string}>()
);

export const requestCreateCourse = createAction(
    '[Courses API] request Edit Course Fail',
    props<{course: CourseCard}>()
);

export const requestCreateCourseSuccess = createAction(
    '[Courses API] request Create Course Success'
);

export const requestCreateCourseFail = createAction(
    '[Courses API] request Create Course Fail',
    props<{error: string}>()
);