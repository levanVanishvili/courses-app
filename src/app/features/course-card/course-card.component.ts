import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseCard } from './course-card';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/user/user-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {  
  @Input() public courseCards: CourseCard[] = [];
  @Output() public deleteCard = new EventEmitter<string>();
  @Output() public editCard = new EventEmitter<string>();
  public isCourseCardEditable = true;  
  public isUserAdmin = false;
  public deletedCourseId? :string;
  faTrash = faTrash;
  faPen = faPen

  constructor(
    private router: Router, 
    private user: UserStoreService,) { }

  ngOnInit(): void {
    if (this.user.isAdmin$){      
    this.isUserAdmin = true;
    }
  }

  public onDelete(id: string) {
    this.deletedCourseId = id;

    const modal = document.getElementById('id');
    modal!.style.display = 'block';
    
  }

  public onEdit(id: string) {
    this.editCard.emit(id)
  }

  onDeleteCourse(val: any) {
    if (val){      
      this.deleteCard.emit(this.deletedCourseId)
     }
  }

  public onButtonClick(id: string) {
    this.router.navigate(['/courses', id]);
  }
}
