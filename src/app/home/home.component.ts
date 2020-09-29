import { Component, OnInit } from '@angular/core';
import { HomeForecastService } from '../services/home-forecast.service';
import { AccountService } from '../services/account.service';
import { Principal } from '../models/principal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentWeather: any = <any>{};
  currentWeatherDescription = '';
  currentWeatherIconId = 0;
  thunderstorm = false;
  drizzle = false;
  rain = false;
  snow = false;
  clear = false;
  clouds = false;
  atmosphere = false;

  principal: Principal;

  constructor(private hFService: HomeForecastService, private accountService: AccountService) { 
    this.principal = this.accountService.currentUserValue;
   }

  async ngOnInit() {
    // harcoded zipcode for now, will get from current user
    this.currentWeather = <Object[]> await this.hFService.getForecast('29150');
    this.currentWeatherDescription = this.currentWeather.weather[0].description;
    this.currentWeatherIconId = this.currentWeather.weather[0].id;
    // determine the current condition using: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
    if(this.currentWeatherIconId >= 200 && this.currentWeatherIconId < 300){
      this.thunderstorm = true;
    }
    if(this.currentWeatherIconId >= 300 && this.currentWeatherIconId < 400){
      this.drizzle = true;
    }
    if(this.currentWeatherIconId >= 500 && this.currentWeatherIconId < 600){
      this.rain = true;
    }
    if(this.currentWeatherIconId >= 600 && this.currentWeatherIconId < 700){
      this.snow = true;
    }
    if(this.currentWeatherIconId >= 700 && this.currentWeatherIconId < 800){
      this.atmosphere = true;
    }
    if(this.currentWeatherIconId === 800 ){
      this.clear = true;
    }
    if(this.currentWeatherIconId > 800  && this.currentWeatherIconId < 900 ){
      this.clouds = true;
    }
    console.log(this.currentWeather);
  }

  resultFound() {
    return Object.keys(this.currentWeather).map(key => this.currentWeather[key]);
  }

}
