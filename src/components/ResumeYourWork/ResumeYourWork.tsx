import {FC, useEffect, ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
// import {Wrapper} from '../../styledHelpers/Components';
import useDropdown from 'react-dropdown-hook';
import {FollowedExpandedMenu} from './FollowedExpandedMenu';
import {boxShadow} from '../../styledHelpers/Components';

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
    margin-top:10px;
    max-width:940px;


    #content{
        margin:10px 0px;
        padding-top:10px;
        padding-bottom: 10px;
        padding-left:20px;
        padding-right: 20px;
        background: ${Colors.white};
        border-radius: 2%;
        ${boxShadow()};

        h1{
        font-size:${fontSize[20]};
        color:${Colors.purple};
        margin-bottom:10px;
        ::first-letter {
            text-transform: uppercase;
        }}

        p{
        font-size:${fontSize[18]};
        ::first-letter {
            text-transform: uppercase;
        }}
    }

    .pagination {
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin:15px 0;
        color: ${Colors.purple};
        border: none;
        outline: none;
        user-select: none; /* no background on double click */

        .previous{
            margin-right:10px;
        }
        .active {
            color:${Colors.black};
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

const TopSide = styled.div`
    display:flex;
    align-items:center;
    margin:0 0 0 10px;

    .title{
        font-size: ${fontSize[20]};
        margin-right: 38%;
    }

`;

const InputFilter = styled.div`
    background: ${Colors.white};
    padding:7px;
    margin-right: 40px;
    display: flex;
    align-items: center;

    input{
        border:none;
        &:outline{
            outline:none;
        }
        &:focus{
            outline:none;
        }
        font-size: ${fontSize[16]};
    }
`;

const MenuWrapper = styled.div`
    cursor:pointer;
    display:flex;
    align-items: center;
    column-gap: 12px;
    user-select: none; /* no background on double click */
    font-size: ${fontSize[18]};
    font-weight: bold;
    color:${Colors.purple};


`;

const Bottom = styled.div`
    margin:10px 0px;
    display: flex;
    align-items: center;
    column-gap: 8px;
    img{
        width:20px;
    }
`;
//#endregion

export const ResumeYourWork: FC = () => {
    //#region dropDownMenu
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };
    //#endregion


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

    //#region search function

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text= e.target.value;
        setInputText(text);
    }
    //#endregion

    return (
        <InnerWrapper>
            <TopSide>
                    <span className="title">Resume your work</span>

                    <InputFilter>
                        <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter by title..."/>
                        <img src="./media/icons/search.png" id="search" alt=""/>
                    </InputFilter>

                    <MenuWrapper ref={wrapperRef} onClick={menuHandler}>
                        <img src="./media/icons/people.png" alt=""/>
                        <span>Followed</span>
                        <img src="./media/icons/arrow-down.png" alt=""/>

                        {dropdownOpen &&
                        <FollowedExpandedMenu/>
                    }
                    </MenuWrapper>
            </TopSide>

            {usersComment.slice(currentPage, currentPage + 10).map((x:any) => {
                return(
                ((x.name).toLowerCase().includes(inputText.toLowerCase())) &&
                    <div id="content" key={x.id}>
                    <h1>{x?.name}</h1>
                    <p>{x?.body}</p>
                    <Bottom>
                        <img src="./media/imgs/logo.png" alt="Logo img"/>
                        <span> {usersList[x.id]?.company.name} </span>
                        <span>&bull; </span>
                        <img src="./media/imgs/write.png" alt="Icon img"/>
                        <span>Corporate</span>
                        <span>&bull; </span>
                        <span>Updated 3 days ago by {usersList[x.id]?.name}</span>
                    </Bottom>
                    </div>
                )

            })}
        <ReactPaginate
                previousLabel={'PREVIOUS'}
                nextLabel={'NEXT'}
                breakLabel={'...'}


                pageCount={Math.ceil(usersComment.length/10)}
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