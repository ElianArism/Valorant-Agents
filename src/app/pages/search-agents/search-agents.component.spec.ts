import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAgentsComponent } from './search-agents.component';

describe('SearchAgentsComponent', () => {
  let component: SearchAgentsComponent;
  let fixture: ComponentFixture<SearchAgentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAgentsComponent]
    });
    fixture = TestBed.createComponent(SearchAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
