import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.css']
})
export class PlanetSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.planetService.searchPlanet(term)),
    ).subscribe(data => console.log(data));
  }

  search(planetName: string) {
    this.searchTerms.next(planetName);
  }

}
