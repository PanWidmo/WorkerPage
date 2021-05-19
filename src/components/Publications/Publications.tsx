import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';

import {LatestPublications} from './LatestPublications';

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

        #personInfo{
            margin-top:15px;
            font-size:${fontSize[14]};
            display:grid;
            grid-template-columns:80px 1fr 140px;
            align-items:center;
            .left{
                grid-column:1;
            }
            .middle{
                grid-column:2;
                border-radius:50%;
                width:30px;
            }
            .right{
                grid-column:3;
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
    return (
        <InnerWrapper>
            <LeftSide>
                <div id="divBottom">
                    <p>
                    Lorem ipsum dolor sit amet,
                    consecteur adipisiscing elit... and
                    one more line for the demo
                    </p>

                    <div id="personInfo">
                        <span className="left">7 jan. 2020</span>
                        <img className="middle" src="./imgs/portrair1.jpg"/>
                        <span className="right">Jan Ser</span>
                    </div>

                </div>
            </LeftSide>
            <RightSide>
                <span id="title">Latest publications</span>

                <LatestPublications></LatestPublications>
                <LatestPublications></LatestPublications>
                <LatestPublications></LatestPublications>

                <button type="button" className="btn">See more publications</button>

            </RightSide>
        </InnerWrapper>
    );
};