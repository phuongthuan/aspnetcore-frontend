import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductMnComponent } from './admin/product-mn/product-mn.component';
import { CategoryMnComponent } from './admin/category-mn/category-mn.component';
import { OrderMnComponent } from './admin/order-mn/order-mn.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoryService } from './services/category.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { AuthenticationService } from './services/authentication.service';
import { RegisterComponent } from './register/register.component';
import { UserMnComponent } from './admin/user-mn/user-mn.component';
import { UserFormComponent } from './admin/user-form/user-form.component';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { OrderService } from './services/order.service';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductMnComponent,
    CategoryMnComponent,
    OrderMnComponent,
    LoginComponent,
    ProductFormComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    RegisterComponent,
    UserMnComponent,
    UserFormComponent,
    CategoryFormComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    CustomFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ProductService,
    CategoryService,
    AuthGuard,
    AuthenticationService,
    UserService,
    OrderService

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
