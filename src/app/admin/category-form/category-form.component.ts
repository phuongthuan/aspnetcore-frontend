import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
    ) {


    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
      this.categoryService.readOne(this.id)
        .take(1)
        .subscribe(c => this.category = c);
    }
  }

  save(category) {

    if (this.id) this.categoryService.update(this.id, category).subscribe(product => this.category = category);
      else this.categoryService.create(category).subscribe(category => this.category = category);
      console.log(category);
    this.router.navigate(['/admin/categories']);
  }


  delete() {
    if (!confirm('Are you sure want delete this Category?')) return;
    this.categoryService.delete(this.id)
      .subscribe(categoryId => this.id = categoryId);
    this.router.navigate(['/admin/categories']);
  }

  ngOnInit() {

  }

}
