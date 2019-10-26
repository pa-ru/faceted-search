import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  public isSearchOptionsCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSearchOptionsPanel(){
    this.isSearchOptionsCollapsed = !this.isSearchOptionsCollapsed;
  }

}
