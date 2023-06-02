import { TestBed } from '@angular/core/testing';

import { PreloadAgentAssetsService } from './preload-agent-assets.service';

describe('PreloadAgentAssetsService', () => {
  let service: PreloadAgentAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadAgentAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
