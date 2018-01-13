import { Category } from './../../models/category';
import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Product } from '../../models/product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories: Category[] = [];
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
    ) {

    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);

    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
      this.productService.readOneProduct(this.id)
        .take(1)
        .subscribe(p => this.product = p);
    }
  }

  save(product) {

    if (this.id) this.productService.update(this.id, product).subscribe(product => this.product = product);
      else this.productService.create(product).subscribe(product => this.product = product);
      console.log(product);
    this.router.navigate(['/admin/products']);
  }


  delete() {
    if (!confirm('Are you sure want delete this product?')) return;
    this.productService.delete(this.id)
      .subscribe(productId => this.id = productId);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {

  }


}
