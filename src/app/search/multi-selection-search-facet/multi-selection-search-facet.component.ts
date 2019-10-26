import { Component, OnInit, Input } from '@angular/core';
import { SearchFacet } from 'src/app/model';

@Component({
  selector: 'app-multi-selection-search-facet',
  templateUrl: './multi-selection-search-facet.component.html',
  styleUrls: ['./multi-selection-search-facet.component.scss']
})
export class MultiSelectionSearchFacetComponent implements OnInit {

  @Input()
  facet : SearchFacet

  constructor() { }

  ngOnInit() {
  }

}
