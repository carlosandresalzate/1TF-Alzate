import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [StudentsComponent],
  imports: [CommonModule, StudentsRoutingModule, MatFormFieldModule],
  exports: [],
})
export class StudentsModule {}
