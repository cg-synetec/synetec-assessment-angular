import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _injector: Injector
  ) {
    super(_httpClient, _injector);
  }

  getCities(): Observable<ICity[]> {
    return this._httpClient.get<ICity[]>(`${this.getBaseUrl()}api/cities`);
  }

  deleteCity(id: number): Observable<void> {
    return this._httpClient.delete<void>(
      `${this.getBaseUrl()}api/cities/delete-city/${id}`
    );
  }

  getCity(id: number): Observable<ICity> {
    return this._httpClient.get<ICity>(`${this.getBaseUrl()}api/cities/${id}`);
  }
}
