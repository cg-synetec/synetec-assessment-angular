import { ICity } from "./../../models/city.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CitiesMockService {
  getAll(): Observable<ICity[]> {
    return new Observable(null);
  }

  getCity(id: number): Observable<ICity> {
    return new Observable(null);
  }

  deleteCity(id: number): Observable<void> {
    return new Observable(null);
  }
}
