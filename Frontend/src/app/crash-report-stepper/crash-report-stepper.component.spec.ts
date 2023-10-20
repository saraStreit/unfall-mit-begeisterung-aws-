import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashReportStepperComponent } from './crash-report-stepper.component';

describe('CrashReportStepperComponent', () => {
  let component: CrashReportStepperComponent;
  let fixture: ComponentFixture<CrashReportStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrashReportStepperComponent]
    });
    fixture = TestBed.createComponent(CrashReportStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
