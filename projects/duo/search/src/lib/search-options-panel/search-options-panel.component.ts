import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../model';

@Component({
  selector: 'app-search-options-panel',
  templateUrl: './search-options-panel.component.html',
  styleUrls: ['./search-options-panel.component.scss']
})
export class SearchOptionsPanelComponent implements OnInit {

  showRawData: boolean = false;

  $searchResponse: Observable<SearchResponse>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.$searchResponse = this.http.get<SearchResponse>('/search/');
  } 

  onShowRawData(){
    this.showRawData = !this.showRawData;
  }

}
