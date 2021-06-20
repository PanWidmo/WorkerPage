import {FC, useEffect, ChangeEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';
import {AllExpandedMenu} from './AllExpandedMenu';
import {boxShadow} from '../../styledHelpers/Components';

//#region import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getComments } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
//#endregion

const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;

`;

const Top = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 10px;
`;

const LeftTop = styled.div`
    grid-column: 1;
    display: flex;
    align-items: center;
    column-gap: 20px;

    img{
        width:15px;
    }

    h1{
        font-size: ${fontSize[18]};
        font-weight: bold;
    }

`;

const RightTop = styled.div`
    grid-column: 2;
    display: flex;
    align-items: center;
    margin-left: auto;
    column-gap: 20px;

    .rightButtonsTop{
        display:flex;
        align-items: center;
        column-gap: 10px;
    }

    img{
        width:20px;
    }

`;

const LeftDown = styled.div`
    grid-column: 1;
    grid-row: 2;
    display:flex;
    align-items: center;
    column-gap: 10px;

    .iconsSizes{
        width:15px;
    }

    .menuInline{
    display:flex;
    align-items: center;
    column-gap: 7px;

    }
`;

const MenuWrapper = styled.div`
    cursor:pointer;
    display:flex;
    align-items: center;
    column-gap: 12px;
    user-select: none; /* no background on double click */
    font-weight: bold;
    color:${Colors.purple};

    #circle {
        width:15px;
    }


`;

const RightDown = styled.div`
    grid-column: 2;
    grid-row: 2;
    display: flex;
    align-items: center;
    margin-left: auto;

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

export const Entities: FC = () => {

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
        <Wrapper>
            <Top>
                <LeftTop>
                    <h1>Entities</h1>
                    <img src="./media/icons/settingsIcon.png" alt="Settings icon" />
                </LeftTop>

                <RightTop>
                    <div id="mosaic" className="rightButtonsTop">
                        <img src="./media/icons/mosaic.png" alt="Mosaic icon"/>
                        <p>Mosaic</p>
                    </div>

                    <div id="nonMosaic" className="rightButtonsTop">
                        <img src="./media/icons/nonMosaic.png" alt="Non mosaic icon"/>
                    </div>

                </RightTop>

                <LeftDown>
                    <MenuWrapper ref={wrapperRef} onClick={menuHandler}>
                            <img id="circle" src="./media/icons/circleDot.png" alt=""/>
                            <p>All</p>
                            <img src="./media/icons/arrow-down.png" alt=""/>

                            {dropdownOpen &&
                            <AllExpandedMenu/>
                        }
                    </MenuWrapper>
                    <div id="rightBorder">
                        <img className="iconsSizes" src="./media/icons/threeDots.png" alt="Three Dots icon"/>
                    </div>
                    <div className="menuInline">
                        <img className="iconsSizes" src="./media/icons/arrowsUpDown.png" alt="Arrows icon"/>
                        <p>Sort</p>
                    </div>
                    <div>
                        <p>Filters</p>
                    </div>
                    <div>
                        <p>/</p>
                    </div>
                    <div>
                        <p>Share</p>
                    </div>

                </LeftDown>

                <RightDown>
                    <InputFilter>
                        <input type="text" value={inputText} onChange={inputHandler} placeholder="Search..."/>
                        <img src="./media/icons/search.png" id="search" alt=""/>
                    </InputFilter>

                    <h1>Followed</h1>
                </RightDown>
            </Top>
        </Wrapper>
    );
};