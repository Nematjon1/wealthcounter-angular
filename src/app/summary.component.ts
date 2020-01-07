import { Component } from '@angular/core';
import { DataSource } from './data/dataSource';
import { Person } from './data/entities';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html'
})

export class Summary {
  peopleArr = [];
  constructor(public dataSource: DataSource) {
  }

  get people(): Person[] {
    this.peopleArr = this.dataSource.getPeople('_id', undefined);
    return this.peopleArr;
  }

  get peopleTotal(): number {
    return this.people.length;
  }

  get incomeTotal(): number {
    return this.people.filter(p => p.type === 'income').length;
  }

  get investmentsTotal(): number {
    return this.people.filter(p => p.type === 'investment').length;
  }

  get outcomeTotal(): number {
    return this.people.filter(p => p.type === 'outcome').length;
  }

  get loansTotal(): number {
    return this.people.filter(p => p.type === 'loan').length;
  }
}
