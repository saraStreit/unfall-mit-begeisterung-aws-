import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCarDataStepperComponent } from './enter-car-data-stepper.component';

describe('EnterCarDataStepperComponent', () => {
  let component: EnterCarDataStepperComponent;
  let fixture: ComponentFixture<EnterCarDataStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterCarDataStepperComponent]
    });
    fixture = TestBed.createComponent(EnterCarDataStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
