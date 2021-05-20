import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';

import {LatestPublications} from './LatestPublications';
import { Link } from 'react-router-dom';

//#region import data from api
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
    max-width:940px;
    display:grid;
    grid-template-columns:300px 1fr;
    align-items:center;
    box-shadow: 1px 2px 10px ${Colors.boxShadow};
`;

const LeftSide = styled.div`
    width:300px;
    height:340px;
    grid-column:1;
    background-image: url("./imgs/city2.png");
    background-position: center;
    background-size: cover;
    color: ${Colors.white};

    #divBottom{
        font-size:${fontSize[18]};
        margin:220px 20px 0px 20px;

        p{
            ::first-letter {
                text-transform: uppercase;
            }
            line-height: 22px;
        }
        #personInfo{
            margin-top:10px;
            font-size:${fontSize[14]};
            display:grid;
            grid-template-columns:80px 1fr 150px;
            align-items:center;
            .left{
                grid-column:1;
                white-space: nowrap;
            }
            .middle{
                grid-column:2;
                border-radius:50%;
                width:20px;
            }
            .right{
                grid-column:3;
                white-space: nowrap;
            }
        }
    }
`;

const RightSide = styled.div`
    grid-column:2;
    margin-top:5px;
    margin-left:20px;
    align-items:Center;

    span#title{
        font-size:${fontSize[24]};
    }

    .btn{
        background:none;
        border:none;
        font-size:${fontSize[18]};
        cursor:pointer;
        color:${Colors.purple};
    }

`;
//#endregion

export const Publications: FC = () => {

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
                <div id="divBottom">
                    <p>{usersPost[0]?.title}</p>

                    <div id="personInfo">
                        <span className="left">7 jan. 2020</span>
                        <img className="middle" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <span className="right">{usersList[0]?.name}</span>
                    </div>

                </div>
            </LeftSide>
            <RightSide>
                <span id="title">Latest publications</span>

                <LatestPublications></LatestPublications>
                {/* <LatestPublications></LatestPublications>
                <LatestPublications></LatestPublications> */}

                <Link to="/mock"><button type="button" className="btn">See more publications</button></Link>

            </RightSide>
        </InnerWrapper>
    );
};