import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-mn',
  templateUrl: './category-mn.component.html',
  styleUrls: ['./category-mn.component.css']
})
export class CategoryMnComponent {

  categories: Category[] = [];

  constructor(private categoryServices: CategoryService, private router: Router) { 
    this.categoryServices.getCategories()
    .subscribe(categories => this.categories = categories, err => {
      this.router.navigate(["/login"]);
    });
  }
  

}
