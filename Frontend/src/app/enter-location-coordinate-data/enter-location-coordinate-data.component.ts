import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, Validators} from "@angular/forms";
import {DatService} from "../dat.service";
import {Coordinates} from "../models/coordinates";

@Component({
  selector: 'app-enter-location-coordinate-data',
  templateUrl: './enter-location-coordinate-data.component.html',
  styleUrls: ['./enter-location-coordinate-data.component.css'],
})
export class EnterLocationCoordinateDataComponent {
  constructor(private _formBuilder: FormBuilder, private datService: DatService) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  street: string = '';
  city: string = '';
  country: string = '';
  useCoordinates : boolean = false;
  coordinates: Coordinates = {latitude: null, longitude: null};
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
