import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-mn',
  templateUrl: './product-mn.component.html',
  styleUrls: ['./product-mn.component.css']
})
export class ProductMnComponent {

  products : Product[] = [];
  filteredProducts: any = [];
  
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getProducts()
    .subscribe(products => this.filteredProducts = this.products = products, err => {
      this.router.navigate(["/login"]);
    });
   }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

}
