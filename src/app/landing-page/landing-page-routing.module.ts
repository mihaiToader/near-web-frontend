import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { LandingPageComponent } from './landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: IntroductionComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'login/:status',
        component: LoginComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class LandingPageRoutingModule {
}
