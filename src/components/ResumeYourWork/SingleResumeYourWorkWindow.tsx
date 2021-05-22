import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
// import {Wrapper} from '../../styledHelpers/Components';

//#region import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos, getComments } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetComments = ReturnType<typeof getComments>
//#endregion

//#region styles
const InnerWrapper = styled.div`
    background: ${Colors.white};
    margin-top:30px;
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
    h1{
        font-size:${fontSize[20]};
        color:${Colors.purple};
        margin-bottom:10px;
        ::first-letter {
                text-transform: uppercase;
        }
    }

    p{
        font-size:${fontSize[18]};
        ::first-letter {
                text-transform: uppercase;
        }
    }
`;

const Bottom = styled.div`
    margin:10px 0px;
    padding-bottom:20px;
    img{
        width:20px;
    }
    span{
        margin:0 10px;
    }
`;
//#endregion

export const SingleResumeYourWorkWindow: FC = () => {

    const { usersList, usersPhoto, usersComment } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetComments>(getComments());
    }, [dispatch]);

    return (
        <InnerWrapper>
            {usersComment.map(item => (


            <h1>{item.name}</h1>
            ))}
            <p>{usersComment[0]?.body}</p>
            <Bottom>
                <img src="./media/logo.png" alt="Logo img"/>
                <span>Subsid. corp. </span>
                &#9679;
                <img src="./imgs/write.png" alt="Icon img"/>
                <span>Corporate</span>
                &#9679;
                Updated 3 days ago by John Doe
            </Bottom>

        </InnerWrapper>
    );
};