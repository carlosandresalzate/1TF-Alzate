import { Component, Inject, inject } from '@angular/core';
import { Student } from './models/student';

import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

// material
import { MatDialog } from '@angular/material/dialog';
import { SnackBarNotificationComponent } from './components/snack-bar-notification/snack-bar-notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students',
  standalone: false,

  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students: Student[] = [
    {
      id: '1',
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    },
    {
      id: '2',
      name: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '123-555-7890',
    },
    {
      id: '3',
      name: 'Alice',
      lastName: 'Brown',
      email: 'alice.brown@example.com',
      phoneNumber: '123-456-8888',
    },
    {
      id: '4',
      name: 'Bob',
      lastName: 'Davis',
      email: 'bob.davis@example.com',
      phoneNumber: '123-456-1234',
    },
    {
      id: '5',
      name: 'Charlie',
      lastName: 'Evans',
      email: 'charlie.evans@example.com',
      phoneNumber: '555-456-7890',
    },
    {
      id: '6',
      name: 'Diana',
      lastName: 'Garcia',
      email: 'diana.garcia@example.com',
      phoneNumber: '123-999-7890',
    },
    {
      id: '7',
      name: 'Edward',
      lastName: 'Hill',
      email: 'edward.hill@example.com',
      phoneNumber: '456-123-7890',
    },
    {
      id: '8',
      name: 'Fiona',
      lastName: 'Johnson',
      email: 'fiona.johnson@example.com',
      phoneNumber: '987-456-7890',
    },
    {
      id: '9',
      name: 'George',
      lastName: 'King',
      email: 'george.king@example.com',
      phoneNumber: '123-456-0000',
    },
    {
      id: '10',
      name: 'Hannah',
      lastName: 'Lee',
      email: 'hannah.lee@example.com',
      phoneNumber: '123-333-7890',
    },
  ];

  displayedColumns: string[] = [
    'edit',
    'id',
    'name',
    'lastName',
    'email',
    'phoneNumber',
    'delete',
  ];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  // metodos
  /**
   * @description : este metodo abre una ventana de confirmacion al borrar un estudiante y pregunta al usuario si esta seguro, para proceder con la eliminacion.
   * @param element : el estudiante que se va a borrar
   */
  onDelete(element: Student) {
    const id: string = element.id;

    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: { name: element.name, lastName: element.lastName },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.students = this.students.filter((el) => el.id != id);
        // mostrar snack bar
        setTimeout(() => {
          this.snackBar.openFromComponent(SnackBarNotificationComponent, {
            data: { message: `${element.name} ${element.lastName}` },
            duration: 1500,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        }, 300);
      }
    });
  }
}
