import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseCard } from './course-card';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {  
  @Input() public courseCards: CourseCard[] = [];
  @Output() public deleteCard = new EventEmitter<string>();
  @Output() public editCard = new EventEmitter<string>();
  public isCourseCardEditable = false;  
  faTrash = faTrash;
  faPen = faPen

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onDelete(id: string) {
    this.deleteCard.emit(id)
  }

  public onEdit(id: string) {
    this.editCard.emit(id)
  }

  public onButtonClick() {
    //this.router.navigateByUrl('/courses/course-card')

  }
}
