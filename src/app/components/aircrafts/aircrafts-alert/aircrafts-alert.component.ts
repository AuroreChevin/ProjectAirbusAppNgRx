import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { selectAlertAircrafts, selectCountAlertAircrafts } from 'src/app/ngrx/aircrafts.selectors';

@Component({
  selector: 'app-aircrafts-alert',
  templateUrl: './aircrafts-alert.component.html',
  styleUrls: ['./aircrafts-alert.component.css']
})
export class AircraftsAlertComponent implements OnInit{
  countAlertAircraft$ : Observable<number> | undefined;
  alertAircrafts$ : Observable<Aircraft[]> | null = null;
  constructor(private store: Store<any>){
    this.countAlertAircraft$ = store.select(selectCountAlertAircrafts);
    this.alertAircrafts$ = store.select(selectAlertAircrafts);
    console.log(store.select(selectAlertAircrafts));
  }
  ngOnInit(): void {
    
  }

}
