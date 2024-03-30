import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar />
  <main class="pt-20">
  <router-outlet> </router-outlet>
  </main>
  `
})
export class AppComponent {
  title = 'BiblioTech';

  ngOnInit(): void {
    initFlowbite();
  }
}
