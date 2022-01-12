import { AuthState, initialState } from './auth.state';
import { Action, createReducer } from '@ngrx/store';


const _authReducer = createReducer(initialState)

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action)
}