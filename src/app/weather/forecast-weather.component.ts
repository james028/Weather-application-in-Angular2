import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Forecast } from './forecast';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent implements OnInit {

  constructor(private WService: WeatherService) { }

  ngOnInit() {
  }
 

  addForeWeather(cit, day) {
        this.WService.forecastWeather(cit, day).subscribe(
            
        );
  }
}
