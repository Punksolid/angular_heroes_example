import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import {Hero} from "../hero";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
