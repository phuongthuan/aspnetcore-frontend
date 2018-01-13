import { Category } from './../models/category';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Product } from '../models/product';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  product: Product;
  products: Product[] = [];
  filteredProducts: any = [];
  categories: Category[] = [];

  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService,
    private route: ActivatedRoute
    ) {
      // this.productService.getProducts().subscribe(products => { this.products = products; });
      this.categoryService.getCategories().subscribe(categories => { 
        this.categories = categories;
      } );
      
      this.route.queryParams.subscribe(params => {
        this.getProducts(Number(params['category']));
      });

      

  }

  private getProducts(categoryId?: number) : void {
    if(categoryId) {
      this.productService.getProducts().subscribe(products => {this.products = products.filter(product => product.categoryId === categoryId);
       });
    } else {
      this.productService.getProducts().subscribe(products => this.products = products);
    }
  }

}
