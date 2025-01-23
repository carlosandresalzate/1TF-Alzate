import { Component } from '@angular/core';
import { Student } from './models/student';
import { generateRandomID } from '../../shared/utils';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: false,

  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  studentForm: FormGroup;

  displayedColumns: string[] = ['edit', 'id', 'name', 'lastName', 'delete'];
  students: Student[] = [
    {
      id: generateRandomID(6),
      name: 'Hola',
      lastName: 'Mundo',
    },
    {
      id: generateRandomID(6),
      name: 'Chris',
      lastName: 'redfield',
    },
    {
      id: generateRandomID(6),
      name: 'Jill',
      lastName: 'Valentine',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.students = [
        ...this.students,
        {
          id: generateRandomID(6),
          ...this.studentForm.value,
        },
      ];

      console.log(this.students);
    }
  }

  onDelete(id: string) {
    if (confirm('Esta seguro')) {
      this.students = this.students.filter((el) => el.id != id);
    }
  }
}
