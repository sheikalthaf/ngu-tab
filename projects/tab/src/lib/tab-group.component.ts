import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
import { TabContentComponent } from './tab-content.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngu-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.verticals]': 'vertical'
  }
})
export class TabGroupComponent implements AfterContentInit, OnDestroy {
  _subscribeTabChanges: any[];

  firstLoad: boolean;

  activeIndex = 1;

  @ContentChildren(TabContentComponent)
  tabContent: QueryList<TabContentComponent>;

  @Output() tabChange = new EventEmitter<number>();

  @Input() vertical = false;

  @Input() freezeOnActive = false;

  @Input()
  set activeTab(id: number) {
    this.firstLoad ? this.changeActive(id) : (this.activeIndex = id);
  }

  mainData: TabData[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.firstLoad = true;
    this._subscribeTabChanges = [];
    this.tabContent.forEach((elem, index) => {
      this.mainData.push(<TabData>{
        title: elem.title,
        id: index + 1,
        hide: elem.hide
      });
      elem.id = index + 1;
      elem.activeTab = this.activeIndex;
      const subsc = elem.dataChanged.subscribe((res: TabData) => {
        const ind = this.mainData.findIndex(e => e.id === res.id);
        this.mainData[ind] = res;
        this.checkTheCurrentActiveTab(res);
      });
      this._subscribeTabChanges.push(subsc);
    });
    const data = this.mainData.find(e => e.id === this.activeIndex);
    if (data) {
      this.checkTheCurrentActiveTab(data);
    }
  }

  checkTheCurrentActiveTab(res) {
    if (res.hide && res.id === this.activeIndex) {
      for (const tab of this.mainData) {
        if (!tab.hide) {
          this.changeActive(tab.id);
          return;
        }
      }
    }
    this.cdr.detectChanges();
  }

  checkActiveId(id) {
    const data: any = this.mainData.reduce((acc, curr) => {
      if (!curr.hide) {
        acc.push(curr.id);
      }
      return acc;
    }, []);

    if (data.includes(id)) {
      return id;
    }

    for (let i = id; i <= this.mainData.length; i++) {
      if (data.includes(i)) {
        return i;
      }
    }
    for (let i = id; i <= this.mainData.length; i--) {
      if (data.includes(i)) {
        return i;
      }
    }
  }

  changeActive(id: number, fromDom?: boolean) {
    id = this.checkActiveId(id);
    const isSameTab = id === this.activeIndex;
    const freezeCond =
      fromDom && this.freezeOnActive && id !== this.activeIndex;
    const isValidId = id > this.mainData.length || id <= 0;
    if (freezeCond || isValidId) {
      return;
    }
    this.activeIndex = id;
    this.tabContent.forEach((elem, index) => {
      elem.activeTab = this.activeIndex;
    });
    this.cdr.detectChanges();
    if (!isSameTab) {
      this.tabChange.emit(this.activeIndex);
    }
  }

  unsubscibe() {
    if (this._subscribeTabChanges) {
      this._subscribeTabChanges.forEach(element => {
        element.unsubscribe();
      });
    }
  }

  ngOnDestroy() {
    this.unsubscibe();
  }
}

export interface TabData {
  title: string;
  id: number;
  hide: boolean;
}
