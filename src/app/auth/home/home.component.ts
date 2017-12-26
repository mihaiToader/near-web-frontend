import { Component, EventEmitter, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'near-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isDragDisabled = false;
  chats = [];

  @Output() minimise = new EventEmitter<any>();

  constructor(
    private dragulaService: DragulaService,
  ) {
    dragulaService.setOptions('sixth-bag', {
      moves: function (el, container, handle) {
        return handle.classList.contains('handle');
      }
    });
    dragulaService.drag.subscribe(() => {
      this.onDrag();
    });
    dragulaService.drop.subscribe(() => {
      this.onDrop();
    });
    dragulaService.cancel.subscribe(() => {
      this.onDrop();
    });
  }

  private onDrag() {
    this.isDragDisabled = true;
  }

  private onDrop() {
    this.isDragDisabled = false;
  }

  onAddColumn() {
    this.chats.push([]);
  }

  onAddChat(chat) {
    if (this.chats.length === 0) {
      this.onAddColumn();
    }

    this.chats[0].unshift(chat);
  }

  onMinimise($event) {
    this.minimise.emit($event);
  }
}
