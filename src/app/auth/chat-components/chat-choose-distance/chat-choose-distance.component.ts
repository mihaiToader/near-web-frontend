import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'near-chat-choose-distance',
  templateUrl: './chat-choose-distance.component.html',
  styleUrls: ['./chat-choose-distance.component.scss']
})
export class ChatChooseDistanceComponent implements OnInit {
  @Output() createChat = new EventEmitter<number>();
  distance: number;

  constructor() { }

  ngOnInit() {
  }

  sendCreateChatEvent() {
    this.createChat.emit(this.distance);
    this.distance = null;
  }
}
