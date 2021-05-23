import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Wrapper} from '../../styledHelpers/Components';

import { Link } from 'react-router-dom';

//#endregion import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos, getPosts } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>
//#endregion

//#region styles
const InnerWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
    margin-bottom:5px;

    .leftImg{
        width:80px;
        margin-right: 5px;
    }

    h1{
        ::first-letter {
                text-transform: uppercase;
            }
        word-spacing: 5px;
    }

    .bottom{
        display: grid;
        grid-template-columns: 75px 1fr 1fr;
        width:40%;
        align-items: center;
        margin-top:8px;
        font-size: ${fontSize[14]};
    }

    .date{
        grid-column: 1;
        white-space: nowrap;
        color: ${Colors.lightgrayOriginal};
    }

    .portrairImg{
        grid-column: 2;
        width:20px;
        border-radius: 50%;


    }

    .name{
        grid-column: 3;
        white-space: nowrap;

    }

`;





//#region old
const LeftSide = styled.div`

    img{
        width:80px;
    }
`;

const RightSide = styled.div`
    margin-left:10px;
    margin-right:30px;
    p{
        ::first-letter {
            text-transform: uppercase;
            }
    }
    span{
        font-size:${fontSize[14]};
    }
`;

const BottomSide = styled.div`
    display:grid;
    grid-template-columns:80px 30px 80px;
    align-items:center;
    margin-top:7px;
    .left {

    }
    .middle {
    width:20px;
    border-radius:50%;
    }
    .right{
        white-space: nowrap;
    }

`;
//#endregion
//#endregion

export const LatestPublications: FC = () => {

    const { usersList, usersPhoto, usersPost } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
    }, [dispatch]);

    return (
            <InnerWrapper>
            <img className="leftImg" src={usersPhoto[1]?.url} alt="Post img"/>
            <div className="rightSide">
                <h1>{usersPost[0]?.title}</h1>
                <div className="bottom">
                    <span className="date">7 jan. 2020</span>
                    <img className="portrairImg" src={usersPhoto[0]?.url} alt="Portrair img"/>
                    <span className="name">qwe</span>
                </div>
            </div>

        </InnerWrapper>


    );
};