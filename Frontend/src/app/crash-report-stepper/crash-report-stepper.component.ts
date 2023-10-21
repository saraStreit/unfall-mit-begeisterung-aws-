import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DatService} from "../dat.service";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {UserData} from "../models/userData";
import {CarData} from "../models/carData";

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
    numberCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  isLinear = true;
  data: any;
  longitude: any;
  latitude: any;
  useCoordinates: boolean = false;
  street: string = '';
  city: string = '';
  country: string = '';
numberPlateError: string = '';
fahrzeugdaten: boolean = false;
abschlepp: boolean = false;
vehicleData: any;


  user: UserData = {} as UserData;
  userCrash: UserData = {} as UserData;
  car: CarData = {} as CarData;

  constructor(private _formBuilder: FormBuilder, private datService: DatService) {
  }

  ngOnInit(): void {
    this.datService.getData().subscribe((result) => {
      this.data = result;
    });
  }

  submitPersonalData() {
    if (this.user.firstName) {
      this.datService.submitPersonalData(this.user).subscribe((result) => {
      });
    }
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
  validateNumberPlate() {
    const swissPlateRegex = /^[A-Z]{2}\d{1,8}$/;
    if (!swissPlateRegex.test(this.car.carNumberplate)) {
      this.numberPlateError = 'Invalid Swiss Number Plate';
    } else {
      this.numberPlateError = '';
    }
  }
  getCarInfos(){
    if (this.car.carNumberplate) {
      const firstTwoChars: string = this.car.carNumberplate.slice(0, 2);
      const restOfString: string = this.car.carNumberplate.slice(2);
      const restAsNumber: number = parseInt(restOfString, 10);
      this.fahrzeugdaten = true;
      this.vehicleData = this.datService.getCarData(firstTwoChars, restAsNumber)
      this.datService.getCarData(firstTwoChars, restAsNumber).subscribe((result) => {
        console.log(result);
      });
    }
  }
}
