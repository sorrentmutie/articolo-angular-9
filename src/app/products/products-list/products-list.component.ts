import { Component, OnInit} from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {

  public products: Product[] = [];
  public selectedProduct: Product = undefined;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.loadProducts();
  }

  showDetails(product: Product) {
    this.selectedProduct = product;
  }

  hideDetails(message: string) {
    this.selectedProduct = undefined;
  }

  private loadProducts(): Product[] {
    return [
      {id : 1, name: "tv color 42", description: "nice hd screen", category: "tv", price: 1000},
      {id : 2, name: "microwave oven", description: "exceptional", category: "kitchen", price: 700},
      {id : 3, name: "xbox", description: "microsoft", category: "games", price: 350}
    ];
  }


}
