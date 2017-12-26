import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'near-chat-stack',
  templateUrl: './chat-stack.component.html',
  styleUrls: ['./chat-stack.component.scss'],
})
export class ChatStackComponent implements OnInit {

  chats = [];

  constructor() {
  }

  ngOnInit() {
  }

  onAddChat(chat) {
    this.chats.push(chat);
  }

}
