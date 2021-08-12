import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrctcFeedbackComponent } from './irctc-feedback.component';

describe('IrctcFeedbackComponent', () => {
  let component: IrctcFeedbackComponent;
  let fixture: ComponentFixture<IrctcFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrctcFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrctcFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
