import { ISingleUser } from '../../entities/users';

export const GET_USERS = 'GET_USERS';
// export const GET_PHOTOS = 'GET_PHOTOS';
//export const PUSH_DATA = 'PUSH_DATA';

export interface IUserTypes{
    GET_USERS: {
        usersList: ISingleUser[];
    };
    // PUSH_DATA:{
    //     someData:string;
    // }
}