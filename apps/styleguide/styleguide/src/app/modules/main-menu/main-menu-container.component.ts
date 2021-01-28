import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainMenuItemInterface } from './entities/main-menu-item.interface';

@Component({
  selector: 'app-main-menu-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <app-main-menu [items]="items"></app-main-menu> `,
})
export class MainMenuContainerComponent {
  items: MainMenuItemInterface[] = [
    {
      icon: 'folder',
      name: 'Icons',
      url: '/icons',
    },
    {
      icon: 'folder',
      name: 'Colors',
      url: '/colors',
    },
  ];
}
