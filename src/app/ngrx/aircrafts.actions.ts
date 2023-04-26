import { Action } from "@ngrx/store";
import { Aircraft } from "../models/aircraft.model";

export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",
}
export class GetAllAircraftsAction implements Action{
    constructor(public payload:any){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
}
export class GetAllAircraftsActionSuccess implements Action{
    constructor(public payload:Aircraft[]){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
}
export class GetAllAircraftsActionError implements Action{
    constructor(public payload:string){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
}
export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError;