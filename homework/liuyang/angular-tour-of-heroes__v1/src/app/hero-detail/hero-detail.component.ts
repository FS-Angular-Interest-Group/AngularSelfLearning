import { Component, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common"
import { Hero } from "../hero";
import { HeroesComponent } from "../heroes/heroes.component";
import { HeroService } from "../hero.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: "hero-detail",
  templateUrl: './hero-detail.component.html',
  styleUrls: ["./hero-detail.component.css"]
})

export class HeroDetailComponent implements OnInit{
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  hero: Hero;
}
