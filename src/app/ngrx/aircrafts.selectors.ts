import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AircraftsState } from "./aircrafts.state";
import { Aircraft } from "../models/aircraft.model";
const featureSelector = createFeatureSelector<AircraftsState>('airbusState');
export const selectCountAlertAircrafts = createSelector(
    featureSelector,
    (state : AircraftsState)=>{
        let total: number = 0;
        state.aircrafts.forEach(a => {
            if(a.development == true && a.design == true) total++;
        })
        return total ;
    }
);

export const selectAlertAircrafts = createSelector(
    featureSelector,
    (state : AircraftsState)=> {
      return state.aircrafts.filter(a => (a.development == true && a.design == true)
        );
    }
);
