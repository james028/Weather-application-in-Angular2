import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeatherComponent } from './forecast-weather.component';

describe('ForecastWeatherComponent', () => {
  let component: ForecastWeatherComponent;
  let fixture: ComponentFixture<ForecastWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
