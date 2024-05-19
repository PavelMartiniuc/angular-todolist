import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  faCoffee = faCoffee;

  constructor()
  {
    
  }
}
