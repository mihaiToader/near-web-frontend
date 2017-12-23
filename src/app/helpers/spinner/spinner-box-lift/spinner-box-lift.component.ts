import { Component, Input } from '@angular/core';

@Component({
  selector: 'near-spinner-box-lift',
  templateUrl: './spinner-box-lift.component.html',
  styleUrls: ['./spinner-box-lift.component.scss']
})
export class SpinnerBoxLiftComponent {
  @Input() display = false;
}
