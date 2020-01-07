import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'type-list',
  templateUrl: './typeList.component.html'
})
export class TypeList {

  @Input()
  selected: string;

  @Input()
  types: string[];

  @Output()
  selectType = new EventEmitter<string>();

  getBtnClass(type: string): string {
    return 'btn btn-block ' +
      (type === this.selected ? 'btn-primary' : 'btn-secondary');
  }
}
