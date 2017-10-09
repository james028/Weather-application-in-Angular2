import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/item-weather/weather-item.component';

import { WeatherService } from './weather/weather.service';
import { WeatherLocationComponent } from './weather/location-weather/weather-location.component';

import { WeatherRouting } from './weather.routing';
import { ForecastWeatherComponent } from './weather/forecast-weather/forecast-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherLocationComponent,
    ForecastWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WeatherRouting,
    ReactiveFormsModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
