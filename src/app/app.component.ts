import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  addContextUpdateListener,
  addInitListener,
} from '@luigi-project/client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Add Luigi listeners
    addInitListener(() => {});
    addContextUpdateListener(() => {});
  }
}
