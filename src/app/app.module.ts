import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './shopping-cart/filters/filters.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


