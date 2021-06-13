import {FC,useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

//#region import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
//#endregion

const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;
`;

const TopButtons = styled.div`
    width:100%;
    display: flex;
    justify-content: right;
    justify-items: center;


    .buttonTop{
        margin-left: 30px;
        cursor:pointer;
        align-items: center;

        img {
        width: 20px;

        .text {
            border:2px solid red;
        }
    }}
`;

const PersonImportant = styled.div`
    display:grid;
    align-items: end;
    margin-top:30px;
    grid-template-columns: 20% 40% 40%;

    .left{
        grid-column: 1;
        text-align:center;

        img{
            width:30%;
            border-radius: 50%;
        }
    }

    .middle{
        grid-column: 2;
        line-height: 20px;
    }

    .right{
        text-align: right;
        grid-column: 3;
        line-height: 20px;

        p{
            text-align: left;
        }
        

    }
`;


export const Profile: FC = () => {

    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Wrapper>
            <TopButtons>
                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Message</span>
                    </span>

                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Create a request</span>
                    </span>

                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Add to a cluster</span>
                    </span>

                    <span className="buttonTop">
                        X
                    </span>

            </TopButtons>
            <PersonImportant>
                <div className="left">
                    <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                    <p>See profile</p>
                </div>

                <div className="middle">
                    <p>{usersList[0]?.name}</p> 
                    <p>{usersList[0]?.company.name}</p>
                    <p>{usersList[0]?.address.city}</p>
                </div>

                <div className="right">
                    <img className="imgs" src="./media/icons/ecosystem.png" alt="Ecosystem icon"/>
                    <p>{usersList[0]?.email}</p>
                    <p>{usersList[0]?.phone}</p>
                </div>

            </PersonImportant>

        </Wrapper>
    );
};