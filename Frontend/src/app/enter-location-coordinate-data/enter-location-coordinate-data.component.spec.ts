import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { EnterLocationCoordinateDataComponent } from './enter-location-coordinate-data.component';

describe('EnterLocationCoordinateDataComponent', () => {
  let component: EnterLocationCoordinateDataComponent;
  let fixture: ComponentFixture<EnterLocationCoordinateDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterLocationCoordinateDataComponent]
    });
    fixture = TestBed.createComponent(EnterLocationCoordinateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
