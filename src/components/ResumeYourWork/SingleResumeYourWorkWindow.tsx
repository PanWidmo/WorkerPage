import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
// import {Wrapper} from '../../styledHelpers/Components';

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

    .pagination {
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 20px;
        .previous{
            margin-right:10px;
        }
        .active {
            color:${Colors.purple};
        }
        .break-me{
        }
        .page{
            margin: 0 10px;
        }
        .next{
            margin-left:10px;
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

    const { usersList, usersComment } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const handlePageClick = (data:any) => {
        const selected = data.selected;
        setCurrentPage(selected);

    }

    return (
        <InnerWrapper>

            {usersComment.slice(currentPage, currentPage + 5).map((x:any) => {
                return(

                <div id="content">
                <h1>{x?.name}</h1>
                <p>{x?.body}</p>
                <Bottom>
                    <img src="./media/logo.png" alt="Logo img"/>
                    <span>Subsid. corp. </span>
                    &#9679;
                    <img src="./imgs/write.png" alt="Icon img"/>
                    <span>Corporate</span>
                    &#9679;
                    Updated 3 days ago by {usersList[x.id]?.name}
                </Bottom>

                </div>
            )

        })}
        <ReactPaginate
                previousLabel={'PREV'}
                nextLabel={'NEXT'}
                breakLabel={'...'}


                pageCount={Math.ceil(usersComment.length/5)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}

                containerClassName={'pagination'}
                previousClassName={'previous'}
                pageClassName={'page'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                nextClassName={'next'}
            />

        </InnerWrapper>
    );
};