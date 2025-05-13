import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

interface MenuItem {
   path: string;
   label: string;
}

@Component({
    selector: 'app-menu',
    imports: [MatListModule, RouterModule],
    template: `
   @for (item of menuItems; track item.path) {
        <a mat-list-item [routerLink]="item.path">{{item.label}}</a>
      }
  `,
    styles: ``
})
export class MenuComponent {
  menuItems: Array<MenuItem> = [
    {
      path: '',
      label: 'Home'
    },
    {
      path: 'categories',
      label: 'Categories'
    },
    {
      path: 'suppliers',
      label: 'Suppliers'
    },
    {
      path: 'checkout',
      label: 'Checkout'
    }
  ]
}
