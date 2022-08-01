
import { createReducer, on } from "@ngrx/store";
import { CourseCard } from "src/app/features/course-card/course-card";
import { requestAllCourses, 
         requestAllCoursesSuccess, 
         requestAllCoursesFail, 
         requestSingleCourse, 
         requestSingleCourseSuccess, 
         requestSingleCourseFail,
         requestFilteredCourses,
         requestFilteredCoursesSuccess,
         requestDeleteCourse,
         requestDeleteCourseFail,
         requestEditCourse,
         requestEditCourseSuccess,
         requestEditCourseFail,
         requestCreateCourse,
         requestCreateCourseSuccess,
         requestCreateCourseFail
        } from "./courses.actions";

export const coursesFeatureKey = 'coursesFeatureKey';

export interface CoursesState {
    allCourses: CourseCard[],
    courses: CourseCard[],
    course: CourseCard,
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage?: string,
};

export const initialState: CoursesState = {
    allCourses: [],
    courses: [],
    course: {} as CourseCard,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
};

export const coursesReducer = createReducer(
    initialState,
    on(requestAllCourses, (state) => ({
        ...state,
    })),

    on(requestAllCoursesSuccess, (state) => ({
        ...state,
    })),

    on(requestAllCoursesFail, (state, err) => ({
        ...state,
        errorMessage: err.error
    })),

    on(requestSingleCourse, (state) => ({
        ...state,
    })),

    on(requestSingleCourseSuccess, (state) => ({
        ...state,
    })),

    on(requestSingleCourseFail, (state, err) => ({
        ...state,
        errorMessage: err.error
    })),

    on(requestFilteredCourses, (state, course) => ({
        ...state,
        id: course.id
    })),

    on(requestFilteredCoursesSuccess, (state) => ({
        ...state,
    })),

    on(requestDeleteCourse, (state, course) => ({
        ...state,
        id: course.id
    })),

    on(requestDeleteCourseFail, (state, err) => ({
        ...state,
        errorMessage: err.error
    })),

    on(requestEditCourse, (state, course) => ({
        ...state,
        id: course.id
    })),

    on(requestEditCourseSuccess, (state) => ({
        ...state,
    })),

    on(requestEditCourseFail, (state, err) => ({
        ...state,
        errorMessage: err.error
    })),

    on(requestCreateCourse, (state, course) => ({
        ...state,
        course: course.course
    })),

    on(requestCreateCourseSuccess, (state) => ({
        ...state,
    })),

    on(requestCreateCourseFail, (state, err) => ({
        ...state,
        errorMessage: err.error
    })),
)

