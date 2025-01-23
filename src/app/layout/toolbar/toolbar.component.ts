import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,

  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  // comunicacion con sidenav
  @Output() drawerToggler = new EventEmitter();

  // opciones de slideTogle
  isChecked: boolean = true;
}
