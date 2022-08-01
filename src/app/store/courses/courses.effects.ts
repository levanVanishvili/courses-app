import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, from, map, of, switchMap,tap } from "rxjs";
import { CoursesService } from "src/app/services/courses.service";
import { AuthorsStateFacade } from "../authors/authors.facade";
import {
    requestAllCourses,
    requestAllCoursesSuccess,
    requestAllCoursesFail,
    requestDeleteCourse,
    requestDeleteCourseFail,
    requestEditCourse,
    requestEditCourseSuccess,
    requestEditCourseFail,
    requestCreateCourse,
    requestCreateCourseSuccess,
    requestCreateCourseFail,
    requestSingleCourseFail

} from "./courses.actions";

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private authorsStateFacade: AuthorsStateFacade,
        private router: Router


    ) { }

    getAll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestAllCourses),
            switchMap(() =>
                from(this.coursesService.getAll().pipe(
                    tap((courses) => this.authorsStateFacade.authors$.subscribe(
                        val => {
                            courses = courses.filter(c => c.authors == val)
                        }
                    )),
                    map((courses) => requestAllCoursesSuccess({courses})),
                    catchError((error) => of(requestAllCoursesFail({ error })))
                )))
        );
    });

    deleteCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestDeleteCourse),
            switchMap((course) =>
                from(this.coursesService.deleteCourse(course.id).pipe(
                    map(() => requestAllCourses()),
                    catchError((error) => of(requestDeleteCourseFail({ error })))
                )))
        );
    })

    editCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestEditCourse),
            switchMap((course) =>
                from(this.coursesService.editCourse(course.id, course.body).pipe(
                    map(() => requestEditCourseSuccess()),
                    catchError((error) => of(requestEditCourseFail({ error })))
                )))
        );
    })

    createCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestCreateCourse),
            switchMap((course) =>
                from(this.coursesService.createCourse(course.course).pipe(
                    map(() => requestCreateCourseSuccess()),
                    catchError((error) => of(requestCreateCourseFail({ error })))
                )))
        );
    })

    //could not make it work 
    redirectToTheCoursesPage$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestCreateCourseSuccess, requestEditCourseSuccess, requestSingleCourseFail),
            switchMap(() => 
                tap((action) => {return this.router.navigate(action);})
                )
        )
        
    },{ dispatch: false})
}
