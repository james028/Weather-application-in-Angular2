import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';

import { Weather } from './weather';

@Injectable()
export class WeatherService {

  //CurrentWeather: Weather = new Weather('City', '', '', '', '', '', '', '', '', '', '', '');

  //WeatherNow() {
    //return this.CurrentWeather;
  //}

  constructor(private _http: Http) { }

  locationWeather() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?appid=78bf6de67a4aafd47624d7c71140bc85&lat=51.151&lon=21.970&units=metric')
                .map((response: Response) => response.json());
  }


  nextCityWeather(city: string) {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=78bf6de67a4aafd47624d7c71140bc85&units=metric')
                .map((response: Response) => response.json());
  }

}
