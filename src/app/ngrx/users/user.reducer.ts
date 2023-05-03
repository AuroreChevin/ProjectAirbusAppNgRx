import { Action } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { LoginAction, UserActions, UserActionsTypes } from "./user.actions";

export interface State {
    isAuthenticated: boolean;
    user:User | null;
    errorMessage: string | null;
}
export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: ""
};
export function AuthReducer (state: State = initialState, action: Action): State{
    switch(action.type){
       /* case UserActionsTypes.LOGIN_SUCCESS:
            console.log('ok');*/
        case UserActionsTypes.LOGIN_SUCCESS:
            return {...state, isAuthenticated: true, user : (<UserActions> action).payload}
        case UserActionsTypes.LOGIN_ERROR:
            return {...state, errorMessage: (<UserActions> action).payload}
        default :
            return {...state}    
    }
    
}