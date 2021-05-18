import {Dispatch} from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/users';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((usersList: ISingleUser[]) => {
        dispatch({
            type: actionTypes.GET_USERS,
            usersList
        })
    })
}) as any;

// export const getPhotos = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {

//     return fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(())
// }) as any;

// export const getSomeData = (someData: string):Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

//     dispatch({
//         type: actionTypes.PUSH_DATA,
//         someData
//     })

// }) as any;