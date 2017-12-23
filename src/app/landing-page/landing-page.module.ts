import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    LandingPageComponent,
    IntroductionComponent,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    LandingPageComponent,
  ],
})
export class LandingPageModule {
}
