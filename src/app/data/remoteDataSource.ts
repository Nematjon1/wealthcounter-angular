import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSourceImpl } from './dataSource';
import { Person } from './entities';

const protocol = 'http';
const hostname = 'localhost';
const port = 4600;

const urls = {
  people: `${protocol}://${hostname}:${port}/data`
};

@Injectable()
export class RemoteDataSource extends DataSourceImpl {
  constructor(private http: HttpClient) {
    super();
  }

  loadPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(urls.people);
  }
}
