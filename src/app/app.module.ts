import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/weather-item.component';

import { WeatherService } from './weather/weather.service';
import { WeatherLocationComponent } from './weather/weather-location.component';

import { WeatherRouting } from './weather.routing';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherLocationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WeatherRouting
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
