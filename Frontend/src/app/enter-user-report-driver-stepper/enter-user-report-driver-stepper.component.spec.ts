import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterUserReportDriverStepperComponent } from './enter-user-report-driver-stepper.component';

describe('EnterUserReportDriverStepperComponent', () => {
  let component: EnterUserReportDriverStepperComponent;
  let fixture: ComponentFixture<EnterUserReportDriverStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterUserReportDriverStepperComponent]
    });
    fixture = TestBed.createComponent(EnterUserReportDriverStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
