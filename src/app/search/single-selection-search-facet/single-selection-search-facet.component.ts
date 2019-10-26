import { Component, OnInit, Input } from '@angular/core';
import { SearchFacet } from 'src/app/model';

@Component({
  selector: 'app-single-selection-search-facet',
  templateUrl: './single-selection-search-facet.component.html',
  styleUrls: ['./single-selection-search-facet.component.scss']
})
export class SingleSelectionSearchFacetComponent implements OnInit {
  
  @Input()
  facet : SearchFacet

  constructor() { }

  ngOnInit() {
  }

}
