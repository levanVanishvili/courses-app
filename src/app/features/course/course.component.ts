import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public form!: FormGroup;
  public course!: CourseCard;
  public isAddMode: boolean = true;
  public submitted = false;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesStoreService, 
    private formBuilder: FormBuilder,
    private coursesStateFacade: CoursesStateFacade) {    
    }

  public get title() {
    return this.form.get('title');
  }

  public get authorName() {
    return this.form.get('authorName');
  }

  public get description() {
    return this.form.get('description');
  }

  public get duration() {
    return this.form.get('duration');
  }

  get authors() : FormArray {
    return this.form.get("authors") as FormArray
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    /* this.coursesService.getCourse(id!).subscribe(
      val => {this.course = val}
    ) */
    this.course = this.coursesStateFacade.getSingleCourse(id!) as unknown as CourseCard

    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group ({
      title: [this.course?.title, Validators.required],
      authorName: [this.course?.authors, Validators.pattern('^[a-zA-Z0-9]*$')],
      description: [this.course?.description, Validators.required],
      duration: [this.course?.duration, Validators.required, Validators.minLength(0)],
      authors: this.formBuilder.array([this.course?.authors]) ,
    })

  }

  public onSubmit(){
    if(this.form.invalid){
      return;
    }
    
    this.course = {
      title: this.title,
      authors: this.authors,
      duration: this.duration,
      authorName: this.authorName,
      descritpion: this.description
    } as unknown as CourseCard

    //this.coursesService.createCourse(this.course).subscribe();
    this.coursesStateFacade.createCourse(this.course);
  }
}
