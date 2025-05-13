import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Product } from '../product.dto';
import { CartItem } from '../../cart.dto';
import { CartService } from '../../cart.service';

@Component({
    selector: 'app-products-card',
    imports: [CommonModule, MaterialModule],
    templateUrl: './products-card.component.html',
    styles: ``
})
export class ProductsCardComponent {

  constructor(private cartService: CartService) {}

  @Input() product: Product;

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
