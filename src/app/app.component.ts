import { Component, Inject } from '@angular/core';
import template from './app.component.html?raw';
import style from './app.component.css?raw';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: template,
  styles: [style],
  providers: [AppService],
})
export class AppComponent {
  constructor(private appService: AppService) {
    console.log(appService.getHello());
  }
}
