import { TestBed } from '@angular/core/testing';

import { ValorantAgentsService } from './valorant-agents.service';

describe('ValorantAgentsService', () => {
  let service: ValorantAgentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantAgentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
