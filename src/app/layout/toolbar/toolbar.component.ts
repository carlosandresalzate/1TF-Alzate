import { Component, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

export interface Tile {
  color: string;
}

@Component({
  selector: 'app-toolbar',
  standalone: false,

  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  // comunicacion con sidenav
  @Output() drawerToggler = new EventEmitter<void>();

  // opciones de slideTogle theme

  isChecked: boolean = false;
  //  opciones theme light-dark
  themeSelected: string = 'Light';

  constructor(private themeService: ThemeService) {
    console.log(this.isChecked);
  }

  toggleTheme(): void {
    const newTheme = this.isChecked ? 'dark-mode' : 'light-mode';
    this.themeSelected = this.isChecked ? 'Dark' : 'Light';
    // themeSelected: string = this.isChecked ? 'Dark' : 'Light';
    this.themeService.setTheme(newTheme);
  }
}
