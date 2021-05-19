import {FC,useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

import {LeftNav} from './LeftNav';

//#region import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
//#endregion

//#region styles
const Wrapper3 = styled.div`
    max-width:220px;
    margin:0 40px 0 0;
`;

const InnerWrapper = styled.div`
    border-radius: 10px;
    width: 220px;
    text-align: center;
    background: ${Colors.white};

`;

const PersonInfo=styled.div`
    display:grid;
    grid-template-columns: 1fr;
    align-items:center;

    a{
        text-decoration:none;
        color:${Colors.purple};
    }

    #foto{
    padding-top:14px;
    padding-bottom:14px;
    width:100px;
    border-radius: 50%;
    margin:0 auto;
    }

    #name{
    margin-top:10px;
    margin-bottom:10px;
    color:${Colors.purple};
    font-weight:bold;
    font-size: ${fontSize[18]};
    }

    #job{
    color:${Colors.lightgrayOriginal};
    padding-bottom:20px;
    border-bottom:1px solid ${Colors.lightgray};
    font-size: ${fontSize[16]};
    }
`;

const PersonDetails=styled.div`
    margin-top:10px;
    padding-bottom:10px;
    display:grid;
    grid-template-columns:20% 4fr 1fr;
    align-items:center;
    .leftImgs{
        grid-column:1;
        width:20px;
        margin-left:14px;
        margin-top:5px;
        margin-bottom:5px;
    }
    .middle{
        grid-column:2;
        text-align:left;
        margin-top:5px;
        margin-bottom:5px;
        font-size: ${fontSize[16]};
        cursor:pointer;
        font-weight: bold;
    }
    .rightImgs{
        grid-column:3;
        border:1px solid ${Colors.black};
        padding-top:4px;
        padding-right:6px;
        padding-bottom:4px;
        padding-left:6px;
        border-radius:6px;
        margin-top:5px;
        margin-bottom:5px;
        cursor:pointer;
    }

`;
//#endregion

export const LeftMenu: FC = () => {

    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Wrapper3>
            <InnerWrapper>
                <PersonInfo>
                    <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                    <span id="name"><Link to="/profile">{usersList[0]?.name}</Link></span>
                    <span id="job">{usersList[0]?.company.name}</span>
                </PersonInfo>
                <PersonDetails>
                    <img className="leftImgs" src="./icons/people.png" alt="Network icon"/>
                    <span className="middle">Your network</span>
                    <img className="rightImgs" src="./icons/user-plus.png" alt="User+ icon"/>

                    <img className="leftImgs" src="./media/icons/publications.png" alt="Publications icon"/>
                    <span className="middle">Your Publications</span>
                    <img className="rightImgs" src="./media/icons/plus.png" alt="Plus icon"/>
                </PersonDetails>
            </InnerWrapper>
            <LeftNav>

            </LeftNav>
        </Wrapper3>
    );
};