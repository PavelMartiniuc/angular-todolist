import { Component } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from '../../model/product.model';
import { ProductRestRepository } from '../../model/repositories/product.rest.Repositiry';


@Component({
  templateUrl: 'productEditor.component.html',
})
export class ProductEditorComponent {
  
  public editing: boolean = false;
  public product: Product = new Product();
  
  constructor(
    private repository: ProductRestRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    
    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params['id'])
      );
    }
  }
  
  public save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
