import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero"
import { HeroService } from "../hero.service"
import { HeroesComponent } from "../heroes/heroes.component";

@Component({
  selector: "my-dashboard",
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardCompontent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
