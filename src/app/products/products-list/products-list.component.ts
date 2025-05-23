import { Component, OnInit, inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, lastValueFrom } from 'rxjs';
import { Product } from '../product.dto';
import { ProductService } from '../product.service';
import { MaterialModule } from '../../material.module';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar.component';
import { CartService } from '../../cart.service';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { CartItem } from '../../cart.dto';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { ProductsTableComponent } from "../../products-table/products-table.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: ``,
  imports: [
    MaterialModule,
    AsyncPipe,
    LoadingBarComponent,
    ProductsCardComponent,
    MatButtonToggle,
    MatButtonToggleGroup,
    ProductsTableComponent
],
})
export class ProductsListComponent implements OnInit {
  productService = inject(ProductService);
  fb = inject(FormBuilder);
  cartService = inject(CartService);

  products: Product[];
  productsObservable: Observable<Product[]>;
  searchForm: FormGroup;
  currentViewMode: string = 'card';

  @ViewChild('group') viewToggleGroup: MatButtonToggleGroup;

  async ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
    this.fetchProducts();
  }

  private async fetchProducts(searchTerm?: string) {
    this.productsObservable = this.productService.getAll(searchTerm);
    this.products = await lastValueFrom(this.productsObservable);
  }

  async onSearch() {
    console.log(`Searching in ${this.currentViewMode} view mode`);
    
    await this.fetchProducts(this.searchForm.value.searchTerm);
    
    if (this.viewToggleGroup && this.currentViewMode) {
      this.viewToggleGroup.value = this.currentViewMode;
    }
    
    if (this.currentViewMode === 'table') {
      console.log('Table view search completed');
    } else {
      console.log('Card view search completed');
    }
  }

  onAddToCart(product: Product) {
    const cartItem: CartItem = {
      idProduct: product.id,
      name: product.name,
      quantity: 1,
      unitPrice: product.unitPrice,
    };
    this.cartService.addItem(cartItem);
  }
}
