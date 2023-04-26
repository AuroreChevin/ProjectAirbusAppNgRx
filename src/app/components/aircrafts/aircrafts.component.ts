import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit{
  //aircrafts: Aircraft[] | null = null;
  aircraftsState$: Observable<AircraftsState> | null = null;
  readonly aircraftStateEnum = AircraftsStateEnum;
  constructor(private store: Store<any>){}
  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state)=> state.airbusState)
    );
  }
  
  
  
}
