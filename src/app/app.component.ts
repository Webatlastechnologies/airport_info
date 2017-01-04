import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: 'main.html',
  styleUrls:['../assets/css/style.css']
})
export class AppComponent implements OnInit { 
   ngOnInit() {
   }
}

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {
}

@Component({
  selector: 'airport_authority',
  templateUrl: 'airport_authority.html'
})
export class AirportAuthority {
}

@Component({
  selector: 'passengers',
  templateUrl: 'passengers.html'
})
export class Passengers {
}

@Component({
  selector: 'sjd_airport_map',
  templateUrl: 'sjd_airport_map.html'
})
export class SDJAirportMap {
}


@Component({
  selector: 'sjd_airport_services',
  templateUrl: 'sjd_airport_services.html'
})
export class SDJAirportServices {
}

  
@Component({
  selector: 'sjd_condition1',
  templateUrl: 'sjd_condition1.html'
})
export class SDJCondition1 {
}

@Component({
  selector: 'sjd_condition2',
  templateUrl: 'sjd_condition2.html'
})
export class SDJCondition2 {
}

@Component({
  selector: 'sjd_condition3',
  templateUrl: 'sjd_condition3.html'
})
export class SDJCondition3 {
}

@Component({
  selector: 'sjd_customs',
  templateUrl: 'sjd_customs.html'
})
export class SDJCustoms {
}

@Component({
  selector: 'sjd_flights',
  templateUrl: 'sjd_flights.html'
})
export class SDJFlights {
}

@Component({
  selector: 'sjd_luggage',
  templateUrl: 'sjd_luggage.html'
})
export class SDJLuggage {
}