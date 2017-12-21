import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from './home/home.component';
const authRoutes: Routes = [
  {
    path: 'auth',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      }
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
