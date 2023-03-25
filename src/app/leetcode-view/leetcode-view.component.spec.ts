import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeViewComponent } from './leetcode-view.component';

describe('LeetcodeViewComponent', () => {
  let component: LeetcodeViewComponent;
  let fixture: ComponentFixture<LeetcodeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeetcodeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeetcodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
