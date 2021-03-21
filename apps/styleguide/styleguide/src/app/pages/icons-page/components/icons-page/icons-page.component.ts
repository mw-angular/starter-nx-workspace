import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DsIconCategory } from '@starter-nx-workspace/frontend/design-system';
import { IconsPageItemInterface } from '../../entities/icons-page-item.interface';

@Component({
  selector: 'app-icons-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icons-page.component.html',
})
export class IconsPageComponent {
  @Input() items: ReadonlyMap<DsIconCategory, IconsPageItemInterface[]> = new Map();

  trackByFn(_index: number, item: IconsPageItemInterface): string {
    return `${item.category}${item.name}`;
  }
}
