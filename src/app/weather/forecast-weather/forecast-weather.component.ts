import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import 'rxjs/Rx';

import { Forecast } from './forecast';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent implements OnInit {

  constructor(private WService: WeatherService) { }

  foreForm: FormGroup;
  ForecastArr: Forecast[] = [];
  myWeather: Weather;

  ngOnInit() {
    this.foreForm = new FormGroup({
        foreCity: new FormControl(''),
        foreDays: new FormControl('')

    });
  }
 

  onSubmitFore() {


    
    //console.log(this.foreForm);
        this.WService.forecastWeather(this.foreForm.value.foreCity, this.foreForm.value.foreDays).subscribe(
            data => { 
              console.log(data);
              for(let i=1; i < data.list.length; i++) {
                    var foreWeatherArr = new Forecast(
                                          data.cnt,
                                          data.list[i].dt,
                                          data.city.country,
                                          data.list[i].weather[0].icon,
                                          data.city.name,
                                          data.list[i].temp.max,
                                          data.list[i].temp.night,
                                          data.list[i].weather[0].description,
                                          data.list[i].speed               
                    );
                    console.log(foreWeatherArr);
                    this.ForecastArr.push(foreWeatherArr);
              }
              console.log(this.ForecastArr);
              return this.ForecastArr;
            }
        )
       
        console.log(NgForm);
        this.WService.nextCityWeather(this.foreForm.value.foreCity).subscribe(
          (data) => {
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
                        data.clouds.all,
                        data.sys.sunrise,
                        data.sys.sunset,
                        data.dt);
          }
        )
        //this..patchValue(null);
  }
  
}
