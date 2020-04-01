import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-products-list></app-products-list>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-first-demo';
}
