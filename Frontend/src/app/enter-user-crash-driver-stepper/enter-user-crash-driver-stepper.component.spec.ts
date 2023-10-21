import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterUserCrashDriverStepperComponent } from './enter-user-crash-driver-stepper.component';

describe('EnterUserCrashDriverStepperComponent', () => {
  let component: EnterUserCrashDriverStepperComponent;
  let fixture: ComponentFixture<EnterUserCrashDriverStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterUserCrashDriverStepperComponent]
    });
    fixture = TestBed.createComponent(EnterUserCrashDriverStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
