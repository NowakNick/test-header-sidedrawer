import { Component } from '@angular/core';
import { SidedrawerComponent } from '../sidedrawer/sidedrawer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidedrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'Header';
}
