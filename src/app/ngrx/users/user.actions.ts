import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export enum UserActionsTypes{
    LOGIN ='[User] User login',
    LOGIN_SUCCESS = '[User] User login success',
    LOGIN_ERROR = '[User] User login error',
}
export class LoginAction implements Action {
    constructor(public payload:any){}
    type: UserActionsTypes = UserActionsTypes.LOGIN;   
}
export class LoginActionSuccess implements Action {
    constructor(public payload:User){}
    type: UserActionsTypes = UserActionsTypes.LOGIN_SUCCESS;   
}
export class LoginActionError implements Action {
    constructor(public payload:string){}
    type: UserActionsTypes = UserActionsTypes.LOGIN_ERROR;   
}
export type UserActions = LoginAction | LoginActionSuccess | LoginActionError;