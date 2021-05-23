import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';


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

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`;


const InnerWrapper = styled.div`
    margin-top:10px;
    margin-bottom:5px;
    display: grid;
    grid-template-columns: 80px 1fr;

    .leftImg{
        width:80px;
    }

    .rightSide{
        margin-left:10px;
    }

    h1{
        ::first-letter {
                text-transform: uppercase;
            }
        word-spacing: 5px;
        margin-top: 10px;
    }

    .bottom{
        display: grid;
        grid-template-columns: 75px 1fr 1fr;
        width:35%;
        align-items: center;
        margin-top:18px;
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
        <Wrapper>

            {usersPost.map((x:any) =>{
                return(
                    <InnerWrapper>
                    <img className="leftImg" src={usersPhoto[x.userId]?.url} alt="Post img"/>
                    <div className="rightSide">
                        <h1>{x?.title}</h1>
                        <div className="bottom">
                            <span className="date">7 jan. 2020</span>
                            <img className="portrairImg" src={usersPhoto[x.userId]?.url} alt="Portrair img"/>
                            <span className="name">{usersList[x.userId]?.name}</span>
                        </div>
                    </div>
                    </InnerWrapper>
                )
            })}

        </Wrapper>


    );
};