import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbookingComponent } from './newbooking.component';

describe('NewbookingComponent', () => {
  let component: NewbookingComponent;
  let fixture: ComponentFixture<NewbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
