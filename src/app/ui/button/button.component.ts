import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-full',
  template: `
  <button class="btn-base btn-full" type="{{type}}">
    <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonFullComponent {
  @Input() type: string = 'button';
}

@Component({
  selector: 'app-button-ghost',
  template: `
  <button class="btn-base btn-ghost" type="{{type}}">
    <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonGhostComponent {
  @Input() type: string = 'button';
}
