import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'near-chat-distance',
  templateUrl: './chat-distance.component.html',
  styleUrls: ['./chat-distance.component.scss']
})
export class ChatDistanceComponent implements OnInit {
  @Output() onAddLeft;

  constructor() { }

  ngOnInit() {
  }

}
