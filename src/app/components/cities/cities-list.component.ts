import { Observable } from "rxjs/Observable";
import { take } from "rxjs/operators";
import { CitiesService } from "./../../services/cities/cities.service";
import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "cities-list",
  templateUrl: "./cities-list.component.html",
  styleUrls: ["./cities-list.component.css"]
})
export class CitiesListComponent implements OnInit {
  cities$: Observable<ICity[]>;
  city$: Observable<ICity>;

  constructor(
    private _citiesService: CitiesService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cities$ = this._citiesService.getAll();
  }

  onDeleteConfirm(id: number) {
    this._citiesService
      .deleteCity(id)
      .pipe(take(1))
      .subscribe(() => {
        this.getCities();
        this._toastr.success("City deleted", "Success!");
      });
  }

  onDeleteCity(id: number) {
    this.city$ = this._citiesService.getCity(id);
  }
}
