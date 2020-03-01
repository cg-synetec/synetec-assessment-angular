import { CitiesMockService } from "./../../services/cities/cities.mock.service";
import { CitiesService } from "./../../services/cities/cities.service";
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "../../app.component";
import { CitiesListComponent } from "./cities-list.component";
import { ToastrService } from "ngx-toastr";

describe("CitiesListComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CitiesListComponent],
      providers: [
        { provide: CitiesService, useClass: CitiesMockService },
        { provide: ToastrService }
      ]
    }).compileComponents();
  }));

  it("should create the cities list component", async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    expect(citiesList).toBeTruthy();
  }));
});
