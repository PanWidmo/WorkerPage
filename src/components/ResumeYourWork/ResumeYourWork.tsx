import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Wrapper} from '../../styledHelpers/Components';
import {SingleResumeYourWorkWindow} from './SingleResumeYourWorkWindow';

//#region import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getComments } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
//#endregion

//#region styles
const InnerWrapper = styled.div`
    max-width:940px;
`;

const Name = styled.div`
    margin-top:20px;
    margin-left:10px;
    font-size:${fontSize[24]};

`;

const RightSide = styled.div`
    float:right;
`;
//#endregion

export const ResumeYourWork: FC = () => {

    const { usersList, usersComment } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
    }, [dispatch]);


    return (
        <InnerWrapper>
            <Name>
                Resume your work
                <RightSide>
                    <input type="text" placeholder="Filter by title..."/>
                    <img src="./media/icons/search.png" id="search" alt=""/>
                    <img src="./media/icons/ecosystem.png" alt=""/>
                    Followed
                    <img src="./media/icons/arrow-down.png" alt=""/>
                </RightSide>

            </Name>

            <SingleResumeYourWorkWindow></SingleResumeYourWorkWindow>

        </InnerWrapper>
    );
};