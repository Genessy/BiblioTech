import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <h1 class="text-3xl text-red-500 font-bold border border-red-300">HOLA AMIGO</h1>
  `
})
export class AppComponent {
  title = 'BiblioTech';

  ngOnInit(): void {
    initFlowbite();
  }
}
