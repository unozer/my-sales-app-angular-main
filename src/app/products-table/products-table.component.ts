import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products/product.dto';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CartItem } from '../cart.dto';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatTableModule, RouterModule, MatIcon],
  templateUrl: './products-table.component.html',
  styles: ``
})
export class ProductsTableComponent {

  @Input() products: Product[] = [];
  columnNames: string[] = ['name', 'unitPrice', 'unitsInStock', 'category', 'discontinued', 'addToCart'];

  constructor(private cartService: CartService) { }

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
