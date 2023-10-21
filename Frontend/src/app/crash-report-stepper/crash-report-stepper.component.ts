import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DatService} from "../dat.service";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {User} from "../Model/User";

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
    MatIconModule
  ],
})
export class CrashReportStepperComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  data: any;
  longitude: any;
  latitude: any;
  useCoordinates : boolean = false;
  street: string = '';
  city: string = '';
  country: string = '';

  user: User = {} as User;
  constructor(private _formBuilder: FormBuilder, private datService: DatService) {}

  ngOnInit(): void {
    this.datService.getData().subscribe((result) => {
      this.data = result;
    });
  }

  getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.useCoordinates = !this.useCoordinates;
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
}
