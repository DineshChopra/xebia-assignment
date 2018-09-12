import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[];
  styleObj = {
    'font-size': '20px'
  };
  constructor(private planetService: PlanetService) {}

  ngOnInit() {
    this.getPlanets();

    this.planetService.searchPlanetEvent.subscribe(data => {
      this.planets = data;
    });
  }
  private getPlanets() {
    this.planetService.getPlanets().subscribe((response: Planet[]) => {
      this.planets = response;
      // this.planets.sort((a, b) => {
      //   return +a.population > +b.population ? 1 : -1;
      // });
      this.planetService.planets = this.planets;
    });
  }
  getFontSize(population) {
    let fontSize;
    population = +population;
    if (population <= 1000) {
      fontSize = 10;
    } else if (population <= 10000) {
      fontSize = 12;
    } else if (population <= 100000) {
      fontSize = 14;
    } else if (population <= 1000000) {
      fontSize = 16;
    } else if (population <= 10000000) {
      fontSize = 18;
    } else if (population <= 100000000) {
      fontSize = 20;
    } else if (population <= 1000000000) {
      fontSize = 22;
    } else if (population <= 10000000000) {
      fontSize = 24;
    } else if (population <= 100000000000) {
      fontSize = 26;
    } else if (population <= 1000000000000) {
      fontSize = 28;
    } else if (population <= 10000000000000) {
      fontSize = 30;
    }
    return fontSize + 'px';
  }
}
