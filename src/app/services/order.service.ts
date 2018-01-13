import { Order } from '../models/order';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() : Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:5000/api/orders');
  }

  create(order) : any {
    return this.http.post('http://localhost:5000/api/orders', order);
  }

  readOneProduct(product_id) : Observable<Order> {
    return this.http.get<Order>('http://localhost:5000/api/orders/' + product_id);
  }

  delete(order_id){
    return this.http.delete('http://localhost:5000/api/orders/' + order_id);
  }


}
