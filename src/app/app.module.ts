import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataModelModule } from './data/data.module';
import { PersonItem } from './personItem.component';
import { TypeList } from './typeList.component';
import {Header} from './header.component';
import { Summary } from './summary.component';
import { PersonList } from './personList.component';
import { RouterModule } from '@angular/router';

const routes = RouterModule.forRoot([
  { path: 'summary', component: Summary},
  { path: 'navigator/:id', component: PersonList},
  { path: '', redirectTo: '/summary', pathMatch: 'full'}
]);

@NgModule({
  declarations: [
    AppComponent,
    PersonItem,
    TypeList,
    Header,
    PersonList,
    Summary
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModelModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
