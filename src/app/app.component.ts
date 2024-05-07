import { Component } from '@angular/core';
import { ProductStaticRepository } from './model/repositories/product.static.respositiry';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  public categories: (string | undefined)[];

  constructor(private productStaticRepo: ProductStaticRepository)
  {
    this.categories = productStaticRepo.getCategories();
  }
}
