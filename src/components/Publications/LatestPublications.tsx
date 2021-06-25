import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';

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
    margin-top:8px;
    margin-bottom:5px;
    display: grid;
    grid-template-columns: 80px 1fr;
    position: relative;

    a{
        text-decoration:none;
        color: ${Colors.black};
    }

    .leftImg{
        max-width:80px;
        max-height:80px;
    }

    .rightSide{
        margin-left:10px;
        max-height:80px;
    }

    h1{
        ::first-letter {
            text-transform: uppercase;
            }
        word-spacing: 5px;
        margin-top: 10px;
    }

    .bottom{
        display: flex;
        align-items: center;
        font-size: ${fontSize[14]};
        position: absolute;
        bottom: 0;
        left: 90;
    }

    .date{
        white-space: nowrap;
        color: ${Colors.lightgrayOriginal};
    }

    .portrairImg{
        width:20px;
        border-radius: 50%;
        margin:0 10px;

    }

    .name{
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

            {usersPost.slice(0,3).map((x:any) =>{
                return(
                    <InnerWrapper>
                        <Link to="/mock"><img className="leftImg" src={usersPhoto[x.userId]?.url} alt="Post img"/></Link>
                        <div className="rightSide">
                            <h1><Link to="/mock">{x?.title}</Link></h1>
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