import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.css']
})
export class WeatherLocationComponent {

  myWeather: Weather;
  location;

  constructor(private WService: WeatherService) { }

  ClickBtn() {
    //this.myWeather = this.WService.WeatherNow();
    navigator.geolocation.getCurrentPosition(pos => {
        this.location = pos.coords;

        console.log(this.location);

        const latt = this.location.latitude;
        const lonn = this.location.longitude; 

        this.WService.locationWeather(latt, lonn).subscribe(
          data => {
            console.log(data);
            this.myWeather = new Weather(
                  data.name,
                  data.sys.country,
                  data.weather[0].icon,
                  data.main.temp,
                  data.weather[0].description,
                  data.main.humidity,
                  data.main.pressure,
                  data.wind.speed,
                  data.main.temp_min,
                  data.main.temp_max,
                  data.clouds.all)
          }
        );
    });
  }

}
