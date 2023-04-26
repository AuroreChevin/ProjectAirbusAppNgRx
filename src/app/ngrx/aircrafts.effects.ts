import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Action } from "@ngrx/store";
import { AircraftsActionsTypes, GetAircraftsByDevelopmentActionError, GetAircraftsByDesignActionSuccess, GetAircraftsByDevelopmentAction, GetAircraftsByDevelopmentActionSuccess, GetAllAircraftsActionError, GetAllAircraftsActionSuccess } from "./aircrafts.actions";

@Injectable ()
export class AircraftsEffects{
    constructor(private aircraftService: AircraftService, private effectActions : Actions){

    }
    getAllAircraftsEffect:Observable<Action> = createEffect(
        ()=> this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action)=>{
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts)=> new GetAllAircraftsActionSuccess(aircrafts)),
                    catchError((err)=>of(new GetAllAircraftsActionError(err.message)))
                )
            }
            )
        )
    )
    getAircraftsByDesignEffect: Observable<Action>= createEffect (
        ()=> this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_AIRCRAFTS_BY_DESIGN),
            mergeMap((action)=>{
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts)=> new GetAircraftsByDesignActionSuccess(aircrafts)),
                    catchError((err)=>of(new GetAircraftsByDesignActionSuccess(err.message)))
                )
            }
            )
        )
    )
    getAircraftsByDevelopmentEffect: Observable<Action> = createEffect (
        ()=> this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_AIRCRAFTS_BY_DEVELOPMENT),
            mergeMap((action)=>{
                return this.aircraftService.getDevelopmentAircrafts().pipe(
                    map((aircrafts)=>new GetAircraftsByDevelopmentActionSuccess(aircrafts)),
                    catchError((err)=>of(new GetAircraftsByDevelopmentActionError(err.message)))
                )
            }

            )
        )
    )
 }