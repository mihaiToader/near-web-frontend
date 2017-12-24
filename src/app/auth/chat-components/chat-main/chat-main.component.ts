import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'near-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {
  active = true;

  constructor() { }

  ngOnInit() {
  }

}
