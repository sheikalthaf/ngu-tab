import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bodyTabs } from './tab.animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngu-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  animations: [bodyTabs]
})
export class TabContentComponent implements OnInit {
  private _hide = false;

  id: number;

  activeTab: number;

  private _title: any;

  secondEmit = -1;

  @Output() titleChanged = new EventEmitter();

  @Output() dataChanged = new EventEmitter();

  @Input('hide')
  set hide(value: boolean) {
    this._hide = value;
    this.emitData();
  }

  // tslint:disable-next-line:no-input-rename
  @Input('tabName')
  set title(text) {
    this.secondEmit++;
    this._title = text;
    this.secondEmit && this.emitData();
  }

  get title() {
    return this._title;
  }

  get hide() {
    return this._hide;
  }

  // aniTab = ['expanded', 'collapsed'];
  constructor() {}

  ngOnInit() {}

  emitData() {
    this.dataChanged.emit({
      title: this.title,
      id: this.id,
      hide: this.hide
    });
  }
}
