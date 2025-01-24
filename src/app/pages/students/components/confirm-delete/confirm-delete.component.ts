import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  standalone: false,

  template: `
    <h2 mat-dialog-title>Borrar Estudiante</h2>
    <mat-dialog-content>
      ¿Estás seguro de que deseas borrar al estudiante
      <strong>{{ data.name }} {{ data.lastName }}</strong>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-flat-button [mat-dialog-close]="true">Borrar</button>
      <!-- <button mat-flat-button [mat-dialog-close]>Borrar</button> -->
    </mat-dialog-actions>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `,
})
export class ConfirmDeleteComponent {
  data = inject(MAT_DIALOG_DATA);
}
