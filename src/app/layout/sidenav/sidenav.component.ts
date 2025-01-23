import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: false,

  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  showFiller = false;

  opened: boolean = true;

  menuItem = [{ path: '/students', label: 'Estudiantes' }];
}
