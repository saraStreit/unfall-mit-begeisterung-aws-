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
@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [DatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
