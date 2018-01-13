import { Router } from '@angular/router';
import { Order } from '../../models/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-mn',
  templateUrl: './order-mn.component.html',
  styleUrls: ['./order-mn.component.css']
})
export class OrderMnComponent {

  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) { 
    this.orderService.getOrders()
    .subscribe(orders => this.orders = orders, err => {
      this.router.navigate(["/login"]);
    });
  }

}
