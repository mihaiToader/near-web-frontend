import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthPageRoutingModule } from './auth-routing.module';
import { ChatDistanceComponent } from './chat-components/chat-distance/chat-distance.component';
import { ChatMainComponent } from './chat-components/chat-main/chat-main.component';
import { ChatMessageComponent } from './chat-components/chat-message/chat-message.component';
import { ChatChooseDistanceComponent } from './chat-components/chat-choose-distance/chat-choose-distance.component';
import { AuthComponent } from './auth/auth.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { HomeBottomMenuComponent } from './home/home-layout/home-bottom-menu/home-bottom-menu.component';
import { HomeService } from './home/home.service';
import { ChatStackComponent } from './chat-components/chat-stack/chat-stack.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthPageRoutingModule,
  ],
  declarations: [
    HomeComponent,
    LayoutComponent,
    ChatDistanceComponent,
    ChatMainComponent,
    ChatMessageComponent,
    ChatChooseDistanceComponent,
    AuthComponent,
    HomeLayoutComponent,
    HomeBottomMenuComponent,
    ChatStackComponent,
  ],
  providers: [
    HomeService,
  ]
})
export class AuthModule {
}
