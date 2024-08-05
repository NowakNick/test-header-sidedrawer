import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidedrawer',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './sidedrawer.component.html',
  styleUrl: './sidedrawer.component.scss',
})
export class SidedrawerComponent {
  toggleSideDrawer = signal(false);
}
