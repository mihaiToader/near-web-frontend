import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { AuthComponent } from './auth/auth.component';
const authRoutes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeLayoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class AuthPageRoutingModule {
}
