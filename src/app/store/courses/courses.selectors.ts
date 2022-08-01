import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from './courses.reducer'

const coursesFeatureState = createFeatureSelector<CoursesState>('coursesFeatureKey');

const isAllCoursesLoadingSelector = createSelector(coursesFeatureState, (state: CoursesState) => state.isAllCoursesLoading);
const isSearchingStateSelector = createSelector(coursesFeatureState, (state: CoursesState) => state.isSearchState);
const isSingleCourseLoadingSelector = createSelector(coursesFeatureState, (state: CoursesState) => state.isSingleCourseLoading);
const getCourses = createSelector(coursesFeatureState, (state: CoursesState) => state.courses);
const getAllCourses = createSelector(coursesFeatureState, (state: CoursesState) => state.allCourses);
const getCourse = createSelector(coursesFeatureState, (state: CoursesState) => state.course);
const getErrorMessage = createSelector(coursesFeatureState, (state: CoursesState) => state.errorMessage);

export const selectAuthorsState = {
    coursesFeatureState,
    isAllCoursesLoadingSelector,
    isSearchingStateSelector,
    isSingleCourseLoadingSelector,
    getCourses,
    getAllCourses,
    getCourse,
    getErrorMessage
};