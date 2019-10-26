import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionSearchFacetComponent } from './single-selection-search-facet.component';

describe('SingleSelectionSearchFacetComponent', () => {
  let component: SingleSelectionSearchFacetComponent;
  let fixture: ComponentFixture<SingleSelectionSearchFacetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectionSearchFacetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectionSearchFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
