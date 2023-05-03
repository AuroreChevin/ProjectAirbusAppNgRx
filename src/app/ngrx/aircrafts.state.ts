import { EntityAdapter, EntityState } from "@ngrx/entity";
import { Aircraft } from "../models/aircraft.model";



export enum AircraftsStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}
export interface AircraftsState extends EntityState<Aircraft>  {
    aircrafts : Aircraft[],
    errorMessage: string,
    dataState : AircraftsStateEnum
}
export const initState: AircraftsState = {
    aircrafts : [],
    errorMessage: "",
    dataState : AircraftsStateEnum.INITIAL,
    ids: [],
    entities: {}
}


