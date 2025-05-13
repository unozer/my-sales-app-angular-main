import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products/product.dto';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule],
  templateUrl: './products-table.component.html',
  styles: ``
})
export class ProductsTableComponent {
  @Input() products: Product[] = [];
  columnNames: string[] = ['name', 'unitPrice', 'unitsInStock', 'category', 'discontinued'];
  
  constructor(private cartService: CartService) { }
}
