import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/api/products');
  }

  create(product) : any {
    return this.http.post('http://localhost:5000/api/products', product);
  }

  readOneProduct(product_id) : Observable<Product> {
    return this.http.get<Product>('http://localhost:5000/api/products/' + product_id);
  }

  delete(product_id){
    return this.http.delete('http://localhost:5000/api/products/' + product_id);
  }
  
  update(product_id, product) {
    return this.http.put('http://localhost:5000/api/products/' + product_id, product);
  }

}
