import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'near-home-bottom-menu',
  templateUrl: './home-bottom-menu.component.html',
  styleUrls: ['./home-bottom-menu.component.scss']
})
export class HomeBottomMenuComponent implements OnInit {
  @Output() createChat = new EventEmitter<number>();
  @Output() addColumn = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onCreateChat(event) {
    this.createChat.emit(event);
  }

  onAddColumn() {
    this.addColumn.emit();
  }
}
