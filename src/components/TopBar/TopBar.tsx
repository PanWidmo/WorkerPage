import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';

import {Wrapper} from '../../styledHelpers/Components';
import {ExpandedMenu} from './ExpandedMenu';
import {Link} from "react-router-dom";

const Wrapper2 = styled(Wrapper)`
    background: ${Colors.white};
    /* box-shadow: 1px 2px 10px ${Colors.boxShadow}; */
    justify-content: center;
    margin-bottom:20px;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    display:grid;
    grid-template-columns:80px 1fr 1fr 1fr;
    align-items: center;
    min-height:8vh;
`;

const LogoImg = styled.img`
    margin:4px;
    width: 46px;
`;

const Menuwrapper = styled.div`
    cursor:pointer;
    align-items:center;
    width:250px;
    justify-content:space-between;
    margin:8px;
`;

const LeftSide = styled.div`
    span{
        font-size: ${fontSize[16]};
        margin-right:80px;
        padding-left:20px;
    }
    #arrowDown{
       margin-bottom:2px;
    }
`;

const InputWrapper=styled.div`
    display:flex;
    align-items:center;
    padding:2px;
    width:600px;
    border:1px solid ${Colors.lightgray};
    border-radius:11px;
`;

const CustomInput = styled.input`
    border:none;
    text-align:center;
    width:100%;
    padding:4px;
    margin: 0 20px 0 0;
    font-size: ${fontSize[16]};

    &:outline{
        outline:none;
    }
    &:focus{
        outline:none;
    }
`;

const RightIcons = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    column-gap: 30px;
    a{
        text-decoration:none;
    }

    .bg{
        background: ${Colors.notificationBackground};
        border-radius: 50%;
        padding:10px;
    }

    .rightIcons{
        position:relative;

    }

    .rightCorner{
        position:absolute;
        color:#fff;
        background-color: blue;
        border-radius: 30%;
        padding:4px;
        padding-left:8px;
        padding-right:8px;
        font-size: 9px;
        margin-top:-40px;
        margin-left:15px;
    }

`;

const CustomImg = styled.img`
    cursor:pointer;

    #house{
        padding:20px;

    }
`;


export const TopBar: FC = ()  => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    return (
        <Wrapper2>
            <InnerWrapper>
                <LogoImg src="./media/imgs/logo.png" alt=""/>
                <Menuwrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <CustomImg src="./media/icons/house2.png"/>
                        <span>Home</span>
                        <CustomImg id="arrowDown" src="./media/icons/arrow-down.png" alt=""/>
                    </LeftSide>

                    {dropdownOpen &&
                        <ExpandedMenu/>
                    }
                    </Menuwrapper>

                <InputWrapper>
                    <CustomInput type="text" placeholder="Search"/>
                    <CustomImg src="./media/icons/search.png" id="search" alt=""/>
                </InputWrapper>

                <RightIcons>
                    <Link to="/"> <CustomImg className="rightIcons" src="./media/icons/house.png"/> <div className="msg"></div> </Link>
                    <Link to="/mock">
                        <div className="bg">
                        <CustomImg className="rightIcons" src="./media/icons/comments.png"/>
                        <div className="rightCorner">3</div>
                        </div>
                    </Link>
                    <Link to="/mock">
                        <div className="bg">
                        <CustomImg className="rightIcons" src="./media/icons/bell.png"/>
                        <div className="rightCorner">3</div>
                        </div>
                    </Link>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};