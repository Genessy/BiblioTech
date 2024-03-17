import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar/>
  <main>
  <router-outlet> </router-outlet>
  </main>
  <h1 class="text-3xl text-red-500 font-bold border border-red-300">HOLA AMIGO</h1>
  `
})
export class AppComponent {
  title = 'BiblioTech';

  ngOnInit(): void {
    initFlowbite();
  }
}
