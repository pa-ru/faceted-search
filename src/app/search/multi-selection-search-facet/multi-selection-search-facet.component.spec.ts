import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectionSearchFacetComponent } from './multi-selection-search-facet.component';

describe('MultiSelectionSearchFacetComponent', () => {
  let component: MultiSelectionSearchFacetComponent;
  let fixture: ComponentFixture<MultiSelectionSearchFacetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectionSearchFacetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectionSearchFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
