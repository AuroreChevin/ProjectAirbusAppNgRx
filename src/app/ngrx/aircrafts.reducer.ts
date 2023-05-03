import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsActions, AircraftsActionsTypes } from "./aircrafts.actions";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Aircraft } from "src/app/models/aircraft.model";
export const adapter: EntityAdapter<Aircraft> = createEntityAdapter<Aircraft>({

});
export const initialState: AircraftsState = adapter.getInitialState ({
    aircrafts : [],
    errorMessage: "",
    dataState : AircraftsStateEnum.INITIAL,
    ids: [],
    entities: {}
});
export function AircraftsReducer (state : AircraftsState = initialState, action:Action):AircraftsState{
    switch(action.type){
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("loading...");
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions> action).payload}
        case AircraftsActionsTypes.GET_AIRCRAFTS_BY_DESIGN:
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionsTypes.GET_AIRCRAFTS_BY_DESIGN_SUCCESS:
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload} 
        case AircraftsActionsTypes.GET_AIRCRAFTS_BY_DESIGN_ERROR:
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}   
        case AircraftsActionsTypes.GET_AIRCRAFTS_BY_DEVELOPMENT:
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionsTypes.GET_AIRCRAFTS_BY_DEVELOPMENT_SUCCESS:
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload} 
        case AircraftsActionsTypes.GET_AIRCRAFTS_BY_DEVELOPMENT_ERROR:
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}
        case AircraftsActionsTypes.ADD_AIRCRAFT:
            return adapter.addOne((<AircraftsActions> action).payload, state)   
        default :
            return {...state}

    }
}