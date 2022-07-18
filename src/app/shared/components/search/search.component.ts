import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchField: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.searchField);
  }

}
