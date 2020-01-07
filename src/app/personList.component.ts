import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { DataSource } from './data/dataSource';
import { Person } from './data/entities';

@Component({
  selector: 'person-list',
  templateUrl: './personList.component.html'
})
export class PersonList {
  selectedType = 'income';
  typesArray = [];
  urlType = '';

  constructor(
    public dataSource: DataSource,
    private router: Router,
  ) {}

  get people(): Person[] {
    return this.dataSource.getPeople('_id',
      this.selectedType === 'income' ? 'income' : this.selectedType);
  }

  get types(): string[] {
    this.typesArray = this.dataSource.getTypes();
    return [...this.typesArray];
  }

  handleTypeSelect(type: string) {
    this.selectedType = type;
    this.router.navigateByUrl(`/navigator/${this.typesArray.indexOf(this.selectedType)}`);
  }
  handleSubmit() {
    console.log('SUBMIT');
  }
}
