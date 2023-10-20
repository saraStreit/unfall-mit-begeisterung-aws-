import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCrashReportComponent } from './create-crash-report.component';

describe('CreateCrashReportComponent', () => {
  let component: CreateCrashReportComponent;
  let fixture: ComponentFixture<CreateCrashReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCrashReportComponent]
    });
    fixture = TestBed.createComponent(CreateCrashReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
