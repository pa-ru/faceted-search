import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOptionsPanelComponent } from './search-options-panel/search-options-panel.component';
import { MultiSelectionSearchFacetComponent } from './multi-selection-search-facet/multi-selection-search-facet.component';
import { SingleSelectionSearchFacetComponent } from './single-selection-search-facet/single-selection-search-facet.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CollapseModule} from 'ngx-bootstrap';



@NgModule({
  declarations: [
    SearchOptionsPanelComponent,
    MultiSelectionSearchFacetComponent,
    SingleSelectionSearchFacetComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot()
  ],
  exports: [
    SearchOptionsPanelComponent,
    MultiSelectionSearchFacetComponent,
    SearchInputComponent
  ]
})
export class SearchModule { }
