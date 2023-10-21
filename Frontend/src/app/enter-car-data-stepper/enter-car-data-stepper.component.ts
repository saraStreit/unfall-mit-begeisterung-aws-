import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DatService} from "../dat.service";

@Component({
  selector: 'app-enter-car-data-stepper',
  templateUrl: './enter-car-data-stepper.component.html',
  styleUrls: ['./enter-car-data-stepper.component.css']
})
export class EnterCarDataStepperComponent {
  constructor(private _formBuilder: FormBuilder) {}
  secondFormGroup = this._formBuilder.group({
    userCtrl: ['', Validators.required],
  });
}
