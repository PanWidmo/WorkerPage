import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
//import users2, { IUsers2Reducer } from './user2Reducers';

export default combineReducers({
    users,
//    users2

})

export interface IState {
    users: IUsersReducer,
//    users2: IUsers2Reducer
}