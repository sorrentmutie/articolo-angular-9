import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: '../product-details/product-details.component.html',
  styles: [
  ],
})
export class ProductDetailsComponent {

  @Input() product: Product;
  @Output() emitter: EventEmitter<string>;


  constructor() { 
    this.emitter = new EventEmitter<string>();
  }

  public okButton() {
    this.emitter.emit('hello');
  }

}
