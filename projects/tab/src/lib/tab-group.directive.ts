import {
  AfterContentInit,
  Directive,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[NguTabGroup]' })
export class NguTabGroupDirective implements AfterContentInit {
  firstLoad: boolean;
  // @ContentChildren(NguTabContentDirective)
  // tabContent: QueryList<NguTabContentDirective>;
  activeIndex = 1;
  // tslint:disable-next-line:no-output-rename
  @Output('tabChange') tabChange = new EventEmitter<number>();
  @Input('activeTab')
  set activeTab(id: number) {
    if (this.firstLoad) {
      this.changeActive(id);
    } else {
      this.activeIndex = id;
    }
  }

  mainData: TabData[] = [];
  constructor() {}
  ngAfterContentInit() {
    this.firstLoad = true;
    // this.tabContent.forEach((elem, index) => {
    //   this.mainData.push(<any>{ title: elem.title, id: index + 1 });
    //   elem.id = index + 1;
    //   elem.activeTab = this.activeIndex;
    // });
  }

  changeActive(id) {
    if (id > this.mainData.length || id <= 0) {
      return;
    }
    this.activeIndex = id;
    // this.tabContent.forEach((elem, index) => {
    //   elem.activeTab = this.activeIndex;
    // });
    this.tabChange.emit(this.activeIndex);
  }
}

export interface TabData {
  title: string;
  id: number;
}
