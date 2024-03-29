import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  faXmark = faXmark;
  @Input() modalTitle?: string;
  @Input() modalMessage?: string;
  @Input() okButtonText?: string;
  @Input() cancelButtonText?: string;
  @Output() public deleteCourse = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.modalTitle = 'Delete Course';
    this.modalMessage = 'Are you sure you want to delete your course?'
    this.okButtonText = 'Ok';
    this.cancelButtonText = 'Cancel';
  }
  public onOkButtonClick() {
    this.deleteCourse.emit(true);
  }
}
