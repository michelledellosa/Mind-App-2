import { TestBed, async, inject } from '@angular/core/testing';

import { TutorialCompletedGuard } from './tutorial-completed.guard';

describe('TutorialCompletedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorialCompletedGuard]
    });
  });

  it('should ...', inject([TutorialCompletedGuard], (guard: TutorialCompletedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
