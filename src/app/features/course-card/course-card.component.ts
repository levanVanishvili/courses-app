import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseCard } from './course-card';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {  
  @Input() public courseCards?: CourseCard[];
  @Output() public deleteCard = new EventEmitter<string>();
  @Output() public editCard = new EventEmitter<string>();
  public isCourseCardEditable = false;  
  faTrash = faTrash;
  faPen = faPen

  constructor() { }

  ngOnInit(): void {
  }

  public transDurationToHours(number: number) {
    const hoursValue = Math.floor(number / 60);
    const minutes = Math.floor(number % 60);
    const hours = hoursValue < 10? '0' + hoursValue : hoursValue;
    return  hours + ':' + minutes + ' hours';
  }

  public onDelete(id: string) {
    this.deleteCard.emit(id)
  }

  public onEdit(id: string) {
    this.editCard.emit(id)
  }
}
