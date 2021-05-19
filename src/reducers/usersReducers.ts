import { ISingleUser } from '../entities/users';
import { ISinglePhoto } from '../entities/photos';
import { ISinglePost } from '../entities/posts';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUsersReducer{
    usersList: ISingleUser[];
    usersPhoto: ISinglePhoto[];
    usersPost: ISinglePost[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    usersPhoto: [],
    usersPost: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: data.usersList
            }
        }

        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IUserTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                usersPhoto: data.usersPhoto
            }
        }

        case actionTypes.GET_POSTS: {
            const data: actionTypes.IUserTypes['GET_POSTS'] = action;
            return {
                ...state,
                usersPost: data.usersPost
            }
        }
        // case actionTypes.PUSH_DATA: {
        //     const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
        //     return {
        //         ...state,
        //         someData: data.someData
        //     }
        // }

        default: {
            return state
        }
    }
}