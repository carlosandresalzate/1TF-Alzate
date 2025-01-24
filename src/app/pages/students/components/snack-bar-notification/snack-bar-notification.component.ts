import { Component, Inject, inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-notification',
  standalone: false,

  template: `
    <div class="snack-bar-content">
      <span>studiante <strong>{{ data.message }}</strong> BORRADO!</span>
      <button
        mat-icon-button
        matSnackBarAction
        (click)="snackBarRef.dismissWithAction()"
      >
        <mat-icon>delete</mat-icon>
      </button>
    </div>
  `,
  styles: `
   .snack-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
  `,
})
export class SnackBarNotificationComponent {
  // private _snackBar = inject(MatSnackBar);

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<SnackBarNotificationComponent>
  ) {}
}
