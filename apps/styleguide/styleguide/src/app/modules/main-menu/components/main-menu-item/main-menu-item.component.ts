import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MainMenuItemInterface } from '../../entities/main-menu-item.interface';

@Component({
  selector: 'app-main-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-menu-item.component.html',
})
export class MainMenuItemComponent {
  @Input() item: MainMenuItemInterface | null = null;
  @Input() isActive: boolean = false;
}
