import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { CrashReportStepperComponent } from './crash-report-stepper/crash-report-stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import { DatService } from './dat.service';
import { EnterCarDataStepperComponent } from './enter-car-data-stepper/enter-car-data-stepper.component';
import { EnterUserReportDriverStepperComponent } from './enter-user-report-driver-stepper/enter-user-report-driver-stepper.component';
import { EnterUserCrashDriverStepperComponent } from './enter-user-crash-driver-stepper/enter-user-crash-driver-stepper.component';
import {MatButtonModule} from "@angular/material/button";
import {
    EnterLocationCoordinateDataComponent
} from "./enter-location-coordinate-data/enter-location-coordinate-data.component";
@NgModule({
    declarations: [
        AppComponent,
        EnterCarDataStepperComponent,
        EnterUserCrashDriverStepperComponent,
        EnterLocationCoordinateDataComponent,
        EnterUserReportDriverStepperComponent,

    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    CrashReportStepperComponent,
    HttpClientModule,
    MatButtonModule,
      CrashReportStepperComponent,

  ],
    providers: [DatService],
  exports: [
    EnterCarDataStepperComponent,
    EnterUserReportDriverStepperComponent,
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
