import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAbilityDetailsComponent } from './agent-ability-details.component';

describe('AgentAbilityDetailsComponent', () => {
  let component: AgentAbilityDetailsComponent;
  let fixture: ComponentFixture<AgentAbilityDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentAbilityDetailsComponent]
    });
    fixture = TestBed.createComponent(AgentAbilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
