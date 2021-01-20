import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ds-button.component.html',
})
export class DsButtonComponent {}
