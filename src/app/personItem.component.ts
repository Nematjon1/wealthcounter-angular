import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from './data/entities';

export type personSelection = {
  person: Person
}

@Component({
  selector: 'person-item',
  templateUrl: './personItem.component.html'
})
export class PersonItem {

  @Input()
  person: Person;

}
