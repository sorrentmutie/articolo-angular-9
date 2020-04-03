import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <p>
      first-lazy works! {{message}}
    </p>
  `,
  styles: [
  ],
})
export class FirstLazyComponent implements OnInit {
  constructor() { }
  public message: string;

  ngOnInit(): void {
  }

}


