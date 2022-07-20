import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public form!: FormGroup;
  public isAddMode: boolean = true;
  public submitted = false;

  constructor(private formBuilder: FormBuilder,) {    
    this.form = this.formBuilder.group ({
      title: ['', Validators.required],
      authorName: ['', Validators.pattern('^[a-zA-Z0-9]*$')],
      description: ['', Validators.required],
      duration: ['', Validators.required, Validators.minLength(0)],
      authors: this.formBuilder.array([]) ,
    })
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
  }

  public onSubmit(){
    this.submitted = true;
    console.log('submitted');
  }

}
