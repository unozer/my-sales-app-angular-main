import { CanDeactivateFn } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './cart.service';
import { inject } from '@angular/core';

export const checkoutGuard: CanDeactivateFn<CheckoutComponent> = (component) => {
  const cartService = inject(CartService);
  
  if (cartService.itensInCart > 0) {
    return window.confirm('You have pending items in your cart. Do you want to continue?');
  }
  
  return true;
};
