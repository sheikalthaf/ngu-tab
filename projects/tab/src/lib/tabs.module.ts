import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NguTabContentDirective } from './tab-content.directive';
import { TabContentComponent } from './tab-content.component';
import { NguTabGroupDirective } from './tab-group.directive';
import { TabGroupComponent } from './tab-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TabGroupComponent,
    TabContentComponent,
    NguTabContentDirective,
    NguTabGroupDirective
  ],
  exports: [
    TabGroupComponent,
    TabContentComponent,
    NguTabContentDirective,
    NguTabGroupDirective
  ]
})
export class NguTabModule {}
