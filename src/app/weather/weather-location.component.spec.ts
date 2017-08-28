import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocationComponent } from './weather-location.component';

describe('WeatherLocationComponent', () => {
  let component: WeatherLocationComponent;
  let fixture: ComponentFixture<WeatherLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
