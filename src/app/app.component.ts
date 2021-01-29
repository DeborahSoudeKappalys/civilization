import { Component } from '@angular/core';
import { JeuService } from './jeu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'civilization';
  launched: Boolean = this.jeuService.getLaunched();

  constructor(private jeuService: JeuService) {}
}
