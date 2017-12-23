import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthPageRoutingModule } from './auth-routing.module';
import { ChatDistanceComponent } from './chat-components/chat-distance/chat-distance.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthPageRoutingModule,
  ],
  declarations: [HomeComponent, LayoutComponent, ChatDistanceComponent]
})
export class AuthModule { }
