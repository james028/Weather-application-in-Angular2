import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WeatherItemComponent } from './weather/item-weather/weather-item.component';
import { WeatherLocationComponent } from './weather/location-weather/weather-location.component';
import { ForecastWeatherComponent } from './weather/forecast-weather/forecast-weather.component';

const ROUTER: Routes = [
    {path:'', component: ForecastWeatherComponent},
    {path: 'item-weather', component: WeatherItemComponent},
    {path: 'weather-location', component: WeatherLocationComponent}
];

export const WeatherRouting: ModuleWithProviders = RouterModule.forRoot(ROUTER)