import { Component } from '@angular/core';
import {FormBuilder, FormsModule, Validators} from "@angular/forms";
import {DatService} from "../dat.service";

@Component({
  selector: 'app-enter-user-report-driver-stepper',
  templateUrl: './enter-user-report-driver-stepper.component.html',
  styleUrls: ['./enter-user-report-driver-stepper.component.css'],
})
export class EnterUserReportDriverStepperComponent {
  constructor(private _formBuilder: FormBuilder) {}
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
