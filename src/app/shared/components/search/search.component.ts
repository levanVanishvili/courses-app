import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchField: string = ''

  constructor() { }

  public onSubmit() {
    console.log(this.searchField);
  }

}
