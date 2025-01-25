import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateRandomID } from '../../../../shared/utils';

@Component({
  selector: 'app-student-form',
  standalone: false,

  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss',
})
export class StudentFormComponent {
  studentForm: FormGroup;

  @Output() addStudent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    // creo el grupo de controles
    this.studentForm = this.fb.group({
      name: ['carlos'],
      lastName: ['alzate'],
      email: ['b2@gmail.com'],
      phoneNumber: ['2598195'],
    });
  }

  // students: Student[] = [];

  onSubmit() {
    this.studentForm.value.id = generateRandomID(6);
    this.addStudent.emit(this.studentForm.value);
    // console.log(this.studentForm.value);

  }
}
