import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatToolbarModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from '../landing-page/authentification.service';
import { AuthGuard } from '../guards/auth.guard';

const sharedModules = [
  HttpClientModule,
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatGridListModule,
  MatCardModule,
  CommonModule,
  MatIconModule,
  MatSliderModule,
  MatSelectModule,
  MatDialogModule,
];
const sharedComponents = [];
const sharedProviders = [
  AuthentificationService,
  AuthGuard,
];
@NgModule({
  imports: [...sharedModules, BrowserAnimationsModule],
  exports: [...sharedModules, ...sharedComponents],
  declarations: [...sharedComponents],
  providers: [...sharedProviders],
})
export class SharedModule {

}
