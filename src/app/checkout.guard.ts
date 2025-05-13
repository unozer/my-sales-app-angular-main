import { CanDeactivateFn } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './cart.service';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from './checkout-dialog/checkout-dialog.component';

export const checkoutGuard: CanDeactivateFn<CheckoutComponent> = (component) => {
  const cartService = inject(CartService);
  const dialog = inject(MatDialog);
  
  if (cartService.itensInCart > 0) {
    return dialog.open(
      CheckoutDialogComponent,
      { data: cartService.itensInCart, disableClose: true }
    ).afterClosed();
  }
  
  return true;
};
