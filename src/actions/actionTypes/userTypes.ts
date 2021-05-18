import { ISingleUser } from '../../entities/users';
import { ISinglePhoto } from '../../entities/photos';

export const GET_USERS = 'GET_USERS';
export const GET_PHOTOS = 'GET_PHOTOS';
//export const PUSH_DATA = 'PUSH_DATA';

export interface IUserTypes{
    GET_USERS: {
        usersList: ISingleUser[];
    };
    GET_PHOTOS: {
        usersPhoto: ISinglePhoto[];
    }

    // PUSH_DATA:{
    //     someData:string;
    // }
}