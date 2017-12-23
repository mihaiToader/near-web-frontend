import { Component, Input } from '@angular/core';

@Component({
  selector: 'near-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() display = false;
}
