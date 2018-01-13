import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:5000/api/categories');
  }

  create(product) : any {
    return this.http.post('http://localhost:5000/api/categories', product);
  }

  readOne(category_id) : Observable<Category> {
    return this.http.get<Category>('http://localhost:5000/api/categories/' + category_id);
  }

  delete(category_id){
    return this.http.delete('http://localhost:5000/api/categories/' + category_id);
  }
  
  update(category_id, category) {
    return this.http.put('http://localhost:5000/api/categories/' + category_id, category);
  }
  
}
