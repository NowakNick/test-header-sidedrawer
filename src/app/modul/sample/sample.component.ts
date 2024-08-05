import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SidedrawerComponent } from '../../components/sidedrawer/sidedrawer.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [
    HeaderComponent,
    SidedrawerComponent,
    BannerComponent,
    DashboardComponent,
  ],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent {}
