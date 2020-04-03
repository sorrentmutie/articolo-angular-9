import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, Injector } from '@angular/core';
import { ProductsService } from './products/products.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
        <div>My first lazy component </div>
        <button class="btn btn-info" (click)="showLazy()">Create</button>
        <div class="myBackground">
          <ng-container #myContainer></ng-container>
        </div>

    </div>
  `
})
export class AppComponent {
  title = 'my-first-demo';

  @ViewChild('myContainer', {read: ViewContainerRef}) myContainer: ViewContainerRef;
    
  constructor(private cfr: ComponentFactoryResolver,
              private injector: Injector,
              private myservice: ProductsService) {
  }

  async showLazy(){
    this.myContainer.clear();
    const { FirstLazyComponent } = await import('./first-lazy.component');
    const {instance} = this.myContainer.createComponent(
      this.cfr.resolveComponentFactory(FirstLazyComponent), null, this.injector);
    instance.message = this.myservice.message();
  }
}
