import { Component } from '@angular/core';
import { Student } from './models/student';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Student[] = [
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

@Component({
  selector: 'app-students',
  standalone: false,

  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  displayedColumns: string[] = [
    'edit',
    'id',
    'name',
    'lastName',
    'email',
    'phoneNumber',
    'delete',
  ];
  dataSource = ELEMENT_DATA;
}
