import {FC, useEffect, ChangeEvent, useState} from 'react';
// import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';
import {AllExpandedMenu} from './AllExpandedMenu';
import {FollowedExpandedMenu} from './FollowedExpandedMenu';
import {FiltersExpandedMenu} from './FiltersExpandedMenu';
import copy from 'copy-to-clipboard';
import {boxShadow} from '../../styledHelpers/Components';

//#region import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos, getPosts } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>
//#endregion

const Wrapper = styled.div`

    width:940px;
    background: ${Colors.white};
    margin:10px 40px 0 0;
    padding:10px;


    .iconsSizes{
        width:15px;
    }

    .cursorPointer{
        cursor: pointer;
    }


    #singleBox{
        width:280px;
        min-height: 80px;
        padding: 10px;
        display: grid;
        grid-template-columns: 30% 1fr;
        ${boxShadow()};

        #left{
            grid-column:1;
            display: flex;
            align-items: center;
            margin: 0 auto;

            img {
                width: 60px;
            }
        }

        #right{
            grid-column: 2;
            position:relative;

            .title{
                margin-top: 10px;
                font-size: ${fontSize[14]};

                ::first-letter {
                text-transform: uppercase;
                }

            }

            .bottomInfo{
                color:${Colors.lightgrayOriginal};
                font-size: ${fontSize[12]};
                position: absolute;
                bottom: 0;
                left: 90;
            }
        }
    }


    .wider{
        width:100%;
        position: absolute;
        background: ${Colors.white};
        left: 0px;
        top: 0px;
    }


`;

const Top = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 10px;
    margin-bottom: 10px;
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
    border:1px solid ${Colors.lightgrayOriginal};

    #mosaic{
        border-right: 1px solid ${Colors.lightgrayOriginal};
        padding-right: 10px;
        background: ${Colors.lightgray};
        padding:5px;
    }

    #nonMosaic{
        padding:5px;
    }

    .rightButtonsTop{
        display:flex;
        align-items: center;
        column-gap: 10px;
        cursor: pointer;
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
    column-gap: 15px;

    .menuInline{
    display:flex;
    align-items: center;
    column-gap: 5px;
    }

    #sortDiv{
        border-left:2px solid ${Colors.lightgrayOriginal};
        padding-left: 10px;
    }

    #resizeDiv{
        border-left:2px solid ${Colors.lightgrayOriginal};
        border-right:2px solid ${Colors.lightgrayOriginal};
        padding-left: 10px;
        padding-right: 10px;
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
    background: ${Colors.lightgrayOriginal};
    padding:10px;
    border-radius: 8%;

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
    border: 1px solid ${Colors.lightgrayOriginal};
    border-radius: 5%;
    padding:5px;
    display: flex;
    align-items: center;
    margin-right: 20px;

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

const Followed = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding:5px;
    border: solid 2px ${Colors.purple};
    border-radius: 5%;
    color:${Colors.purple};
    column-gap: 15px;
`;

const Content = styled.div`

    .contentClassContainer{
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    }
`


export const Entities: FC = () => {

    const srcImg = [
        "./media/icons/resize.png",
        "./media/icons/resize2.png"
    ]

    const [src1, setSrc1] = useState(srcImg[0]);
    const [size, SetSize] = useState(true);

    //#region dropDownMenu
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [wrapperRef2, dropdownOpen2, toggleDropdown2] = useDropdown();
    const [wrapperRef3, dropdownOpen3, toggleDropdown3] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    const menuHandler2 = () => {
        toggleDropdown2();
    };

    const menuHandler3 = () => {
        toggleDropdown3();
    };
    //#endregion

    const { usersPhoto, usersPost } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
    }, [dispatch]);

    //#region search function

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text= e.target.value;
        setInputText(text);
    }
    //#endregion

    const nonMosaicLook = () => {
        const x = document.getElementById('contentContainer');
        x?.classList.remove('contentClassContainer');

        const y = document.getElementById('nonMosaic');
        y!.style.background = "lightgray";

        const z = document.getElementById('mosaic');
        z!.style.background = "white";
    }

    const mosaicLook = () => {
        const x = document.getElementById('contentContainer');
        x?.classList.add('contentClassContainer');

        const y = document.getElementById('nonMosaic');
        y!.style.background = "white";

        const z = document.getElementById('mosaic');
        z!.style.background = "lightgray";

    }

    const widerView = () => {
        const x = document.getElementById('fullPage');

        if(size) {
            x!.classList.add('wider');
            setSrc1 (srcImg[1]);
            SetSize(false);
        }
        else{
            x!.classList.remove('wider');
            setSrc1 (srcImg[0]);
            SetSize(true);
        }
    }

    const copyUrl  = () => {
        copy('http://localhost:3000/entities');
        alert("Address copied to clipboard successfully!");

    }

    return (
        <Wrapper>
            <div id="fullPage" >
            <Top id="top">
                <LeftTop>
                    <h1>Entities</h1>
                    <img className="cursorPointer" src="./media/icons/settingsIcon.png" alt="Settings icon" />
                </LeftTop>

                <RightTop>
                    <div id="mosaic" className="rightButtonsTop" onClick={mosaicLook}>
                        <img src="./media/icons/mosaic.png" alt="Mosaic icon"/>
                        <p>Mosaic</p>
                    </div>

                    <div id="nonMosaic" className="rightButtonsTop" onClick={nonMosaicLook}>
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
                        <img className="iconsSizes cursorPointer" src="./media/icons/threeDots.png" alt="Three Dots icon"/>
                    </div>
                    <div id="sortDiv" className="menuInline cursorPointer">
                        <img className="iconsSizes" src="./media/icons/arrowsUpDown.png" alt="Arrows icon"/>
                        <p>Sort</p>
                    </div>
                    <div id="filtersDiv" className="menuInline cursorPointer" ref={wrapperRef3} onClick={menuHandler3}>
                        <img className="iconsSizes" src="./media/icons/filters.png" alt="Filters icon"/>
                        <p>Filters</p>

                        {dropdownOpen3 &&
                            <FiltersExpandedMenu/>
                        }

                    </div>
                    <div id="resizeDiv" className="menuInline cursorPointer" onClick={widerView}>
                    <img className="iconsSizes" src={src1} alt="Resize icon"/>
                    </div>
                    <div id="shareDiv" className="menuInline cursorPointer" onClick={copyUrl}>
                        <img className="iconsSizes" src="./media/icons/share.png" alt="Share icon"/>
                        <p>Share</p>
                    </div>

                </LeftDown>

                <RightDown>
                    <InputFilter>
                        <input type="text" value={inputText} onChange={inputHandler} placeholder="Search..."/>
                        <img src="./media/icons/search.png" id="search" alt="Search icon"/>
                    </InputFilter>
                    <Followed ref={wrapperRef2} onClick={menuHandler2}>
                        <img className="iconsSizes" src="./media/icons/signal.png" alt="Signal icon"/>
                        <p>Followed</p>
                        <img src="./media/icons/arrow-down.png" alt="Arrown down icon"/>

                            {dropdownOpen2 &&
                            <FollowedExpandedMenu/>
                        }
                    </Followed>
                </RightDown>
            </Top>

            <Content>
                <div id="contentContainer" className="contentClassContainer">
                {usersPost.slice(0,30).map((x:any) => {
                        return(
                            ((x.title).toLowerCase().includes(inputText.toLowerCase())) &&
                                <div id="singleBox">
                                    <div id="left">
                                        <img src={usersPhoto[x.userId]?.url} alt="Single entitie img"/>
                                    </div>
                                    <div id="right">
                                        <p className="title">{x?.title}</p>
                                        <p className="bottomInfo">Caracas 1050, Distrito Capital, Venezuela</p>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </Content>
            </div>
        </Wrapper>
    );
};