import { TestBed } from '@angular/core/testing';

import { CommentsStateService } from './comments-state.service';

describe('CommentsStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentsStateService = TestBed.get(CommentsStateService);
    expect(service).toBeTruthy();
  });
});
