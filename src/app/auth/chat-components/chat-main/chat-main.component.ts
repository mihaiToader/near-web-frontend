import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'near-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {
  active = true;
  @Input() distance;
  @Output() minimise = new EventEmitter<any>();

    constructor() { }

  ngOnInit() {
  }

  onMinimise($event) {
      this.minimise.emit($event);
  }

}
