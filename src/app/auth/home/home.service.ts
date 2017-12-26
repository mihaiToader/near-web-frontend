import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  chats = [];

  constructor() {
  }

  addColumn() {
    this.chats.push([]);
  }

  addChat(chat) {
    if (this.chats.length === 0) {
      this.addColumn();
    }

    this.chats[0].unshift(chat);
  }

  getChats() {
    return this.chats;
  }
}
