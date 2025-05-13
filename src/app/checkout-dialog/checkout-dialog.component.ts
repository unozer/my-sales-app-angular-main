import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-checkout-dialog',
  imports: [MatDialogModule, MatButton],
  templateUrl: './checkout-dialog.component.html',
  styles: ``
})
export class CheckoutDialogComponent {
  dialogRef = inject(DialogRef<boolean>);
  data = inject(MAT_DIALOG_DATA);
}
