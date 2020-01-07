import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})

export class Header {

  get headerText(): string {
    return 'People Wealth';
  }
}
