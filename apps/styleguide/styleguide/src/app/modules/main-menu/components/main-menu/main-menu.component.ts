import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MainMenuItemInterface } from '../../entities/main-menu-item.interface';

@Component({
  selector: 'app-main-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {
  @Input() items: MainMenuItemInterface[] = [];

  trackByFn(_index: number, item: MainMenuItemInterface): string {
    return item.url;
  }
}
