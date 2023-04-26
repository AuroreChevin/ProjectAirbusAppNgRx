import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { GetAllAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent  implements OnInit {
 // aircrafts$: Observable<Aircraft[]> | null = null;
  constructor(private store:Store<any>){}
ngOnInit(): void {
  
}
  getAllAircrafts(){
    /*this.aircraftService.getAircrafts().subscribe({
      next : (data) => this.aircrafts = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })*/
    //this.aircrafts$ = this.aircraftService.getAircrafts();
    this.store.dispatch(new GetAllAircraftsAction({}));
  }
  getAircraftsByDesign(){
    /*this.aircraftService.getDesignedAircrafts().subscribe({
      next : (data) => this.aircrafts = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })*/
    //this.aircrafts$ = this.aircraftService.getDesignedAircrafts();
    
  }
  getAircraftsByDevelopment(){
    /*this.aircraftService.getDevelopmentAircrafts().subscribe({
      next : (data) => this.aircrafts = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })*/
    //this.aircrafts$ = this.aircraftService.getDevelopmentAircrafts();
  }
}
