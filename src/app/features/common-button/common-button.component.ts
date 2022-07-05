import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent implements OnInit {
  @Input() buttonText?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
