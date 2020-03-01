import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesService {
  constructor(private readonly _citiesEndpoint: CitiesEndpoint) {}

  getCities(): Observable<ICity[]> {
    return this._citiesEndpoint.getCities();
  }

  getCity(id: number): Observable<ICity> {
    return this._citiesEndpoint.getCity(id);
  }

  /**
   *
   *
   * Note - Remove `ToList()` from api `Delete` method to actually delete the record
   * public void Delete(City cityToDelete)
        {
            CityInfoContext.Cities. >>> ToList() <<<  .Remove(cityToDelete);
        }
   */
  deleteCity(id: number): Observable<void> {
    return this._citiesEndpoint.deleteCity(id);
  }
}
