import {Observable} from 'rxjs';
import { Injectable} from '@angular/core';
import { Person } from './entities';

export type PersonProp = keyof Person;

export abstract class DataSourceImpl {
  abstract loadPeople(): Observable<Person[]>;
}

@Injectable()
export class DataSource {
  private people: Person[];
  private types: Set<string>;

  constructor(private impl: DataSourceImpl) {
    this.people = [];
    this.types = new Set<string>();
    this.getData();
  }

  getPeople(sortProp: PersonProp = '_id', type?: string): Person[] {
    return this.selectPeople(this.people, sortProp, type);
  }

  protected getData(): void {
    this.people = [];
    this.types.clear();
    this.impl.loadPeople().subscribe(rawData => {
      rawData.forEach(p => {
        this.people.push(p);
        this.types.add(p.type);
      });
    });
  }

  protected selectPeople(people: Person[], sortProp: PersonProp, type?: string): Person[] {
    return people
      .filter(p => type === undefined || p.type === type)
      .sort((p1, p2) => p1[sortProp] < p2[sortProp]
        ? -1 : p1[sortProp] > p2[sortProp] ? 1 : 0);
  }

  getTypes(): string[] {
    return [...this.types.values()];
  }
}
