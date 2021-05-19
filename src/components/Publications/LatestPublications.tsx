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
    margin-top:25px;
    margin-bottom:15px;

`;

const LeftSide = styled.div`

    img{
        width:90px;
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
                <LeftSide>
                    <img src={usersPhoto[1]?.url} alt="Post img"/>
                </LeftSide>
                <RightSide>
                <p>{usersPost[0]?.title}</p>
                    <BottomSide>
                        <span className="left">7 jan. 2020</span>
                        <img className="middle" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <span className="right">{usersList[0]?.name}</span>
                    </BottomSide>
                </RightSide>

            </InnerWrapper>
    );
};