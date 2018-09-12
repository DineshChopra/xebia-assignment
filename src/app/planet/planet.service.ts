import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Planet } from './planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  readonly url = 'https://swapi.co/api/planets/';
  planets: Planet[];
  searchPlanetEvent: EventEmitter<Planet[]> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.url)
      .pipe(
        map(response => response['results'])
      );
  }

  searchPlanet(term: string): Observable<Planet[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // this.getPlanets().subscribe(
      //   planets => {
      //     this.planets = planets;
      //     this.searchPlanetEvent.emit(planets);
      //   }
      // );
      console.log('term -- ', term);
      console.log(this.planets);
      this.searchPlanetEvent.emit(this.planets);
      return of(this.planets);
    }
    const planetList = this.planets.filter(planet => {
      if (planet.name.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
        return planet;
      }
    });
    console.log('this.planets -- ', this.planets);
    console.log('planetList -- ', planetList);
    this.searchPlanetEvent.emit(planetList);
    return of(planetList);
  }
}
