import { Action } from "@ngrx/store";
import { Aircraft } from "../models/aircraft.model";

export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",    
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",

    GET_AIRCRAFTS_BY_DESIGN = "[Aircrafts] Get Aircrafts By Design",
    GET_AIRCRAFTS_BY_DESIGN_SUCCESS = "[Aircrafts] Get Aircrafts By Design Success",
    GET_AIRCRAFTS_BY_DESIGN_ERROR = "[Aircrafts] Get Aircrafts By Design Error",

    GET_AIRCRAFTS_BY_DEVELOPMENT = "[Aircrafts] Get Aircrafts By Development",
    GET_AIRCRAFTS_BY_DEVELOPMENT_SUCCESS = "[Aircrafts] Get Aircrafts By Development Success",
    GET_AIRCRAFTS_BY_DEVELOPMENT_ERROR = "[Aircrafts] Get Aircrafts By Development Error",
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

export class GetAircraftsByDesignAction implements Action{
    constructor(public payload:any){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFTS_BY_DESIGN;
}
export class GetAircraftsByDesignActionSuccess implements Action{
    constructor(public payload:Aircraft[]){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFTS_BY_DESIGN_SUCCESS;
}
export class GetAircraftsByDesignActionError implements Action{
    constructor(public payload:string){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFTS_BY_DESIGN_SUCCESS;
}

export class GetAircraftsByDevelopmentAction implements Action{
    constructor(public payload:any){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFTS_BY_DEVELOPMENT;
}
export class GetAircraftsByDevelopmentActionSuccess implements Action{
    constructor(public payload:Aircraft[]){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFTS_BY_DEVELOPMENT_SUCCESS;
}
export class GetAircraftsByDevelopmentActionError implements Action{
    constructor(public payload:string){}
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFTS_BY_DEVELOPMENT_SUCCESS;
}
export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | GetAircraftsByDesignAction |
GetAircraftsByDesignActionSuccess | GetAircraftsByDesignActionError | GetAircraftsByDevelopmentAction | GetAircraftsByDevelopmentActionSuccess |
GetAircraftsByDevelopmentActionError;