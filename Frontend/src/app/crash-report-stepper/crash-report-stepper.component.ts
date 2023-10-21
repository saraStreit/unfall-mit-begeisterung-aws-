import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DatService} from "../dat.service";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Coordinates } from '../models/coordinates';
import {AppModule} from "../app.module";
import {
    EnterLocationCoordinateDataComponent
} from "../enter-location-coordinate-data/enter-location-coordinate-data.component";

@Component({
  selector: 'app-crash-report-stepper',
  templateUrl: './crash-report-stepper.component.html',
  styleUrls: ['./crash-report-stepper.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    AppModule
  ],
})
export class CrashReportStepperComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  isLinear = true;
  data: any;
 coordinates: Coordinates = {latitude: null, longitude: null};
  useCoordinates : boolean = false;
  street: string = '';
  city: string = '';
  country: string = '';

  constructor(private _formBuilder: FormBuilder, private datService: DatService) {}

  ngOnInit(): void {
    this.datService.getData().subscribe((result) => {
      this.data = result;
    });
  }

  getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.coordinates = position.coords;
        this.useCoordinates = !this.useCoordinates;
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
}
