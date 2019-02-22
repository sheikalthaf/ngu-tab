import { Directive, Input } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[NguTabContent]' })
export class NguTabContentDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('tabName') title: any;
  @Input() by: any;
  id: number;
  activeTab: number;
  // aniTab = ['expanded', 'collapsed'];
}
