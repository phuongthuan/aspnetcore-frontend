import { ProductMnComponent } from './admin/product-mn/product-mn.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { OrderMnComponent } from './admin/order-mn/order-mn.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMnComponent } from './admin/category-mn/category-mn.component';
import { UserMnComponent } from './admin/user-mn/user-mn.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { UserFormComponent } from './admin/user-form/user-form.component';


import { AuthGuard } from './services/auth-guard.service';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';


const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'my/orders', component: OrderMnComponent, canActivate: [AuthGuard] },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/categories/new', component: CategoryFormComponent, canActivate: [AuthGuard] },

      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/categories/:id', component: CategoryFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/orders/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
      
      { path: 'admin/products', component: ProductMnComponent, canActivate: [AuthGuard] },
      { path: 'admin/orders', component: OrderMnComponent, canActivate: [AuthGuard] },
      { path: 'admin/categories', component: CategoryMnComponent, canActivate: [AuthGuard] },
      { path: 'admin/users', component: UserMnComponent, canActivate: [AuthGuard] },
      { path: 'admin/users/new', component: UserFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/users/:id', component: UserFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
