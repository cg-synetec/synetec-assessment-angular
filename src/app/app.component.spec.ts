import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CitiesEndpoint } from "./services/cities/cities-endpoint.service";
import { CitiesService } from "./services/cities/cities.service";
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CitiesListComponent } from "./components/cities/cities-list.component";
import { ToastrService, ToastrModule } from "ngx-toastr";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CitiesListComponent],
      providers: [CitiesService, CitiesEndpoint, ToastrService],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()]
    }).compileComponents();
  }));

  it("should create the app component", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Synetec'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Synetec");
  }));

  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to Synetec!"
    );
  }));
});
