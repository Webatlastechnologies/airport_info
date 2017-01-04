import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent,Home,AirportAuthority,Passengers,SDJAirportMap,SDJAirportServices,SDJCondition1,SDJCondition2,SDJCondition3,SDJCustoms,SDJFlights,SDJLuggage}  from './app.component';

const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'airport_authority', component: AirportAuthority },
  { path: 'passengers', component: Passengers },
  { path: 'sjd_airport_map', component: SDJAirportMap },
  { path: 'sjd_airport_services', component: SDJAirportServices },
  { path: 'sjd_condition1', component: SDJCondition1 },
  { path: 'sjd_condition2', component: SDJCondition2 },
  { path: 'sjd_condition3', component: SDJCondition3 },
  { path: 'sjd_customs', component: SDJCustoms },
  { path: 'sjd_flights', component: SDJFlights },
  { path: 'sjd_luggage', component: SDJLuggage }
];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule ],
  declarations: [ AppComponent,Home,AirportAuthority,Passengers,SDJAirportMap,SDJAirportServices,SDJCondition1,SDJCondition2,SDJCondition3,SDJCustoms,SDJFlights,SDJLuggage],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
