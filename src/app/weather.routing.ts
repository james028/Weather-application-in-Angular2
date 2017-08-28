import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherLocationComponent } from './weather/weather-location.component';

const ROUTER: Routes = [
    {path:'', component: WeatherItemComponent},
    {path: 'weather-location', component: WeatherLocationComponent}
];

export const WeatherRouting: ModuleWithProviders = RouterModule.forRoot(ROUTER)