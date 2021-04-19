import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {ExpandedMenu} from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    background-color: #fff;
    box-shadow: 1px 2px 10px lightgray;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
    display:grid;
    grid-template-columns:80px 1fr 3fr 1fr;
    align-items: center;
    min-height:10vh;
    padding-bottom:10px;
`;

const LogoImg = styled.img`
    margin:14px;
    width: 46px;
`;

const Menuwrapper = styled.div`
    cursor:pointer;
    align-items:center;
    width:250px;
    justify-content:space-between;
    padding:8px;
`;

const LeftSide = styled.div`
    margin:8px;
    span{
        font-size:20px;
        margin-right:80px;
    }
    #arrowDown{
       margin-bottom:2px;
    }
`;

const InputWrapper=styled.div`
    display:flex;
    align-items:center;
    padding:8px;
    width:600px;
    border:1px solid lightgray;
    border-radius:11px;
`;

const CustomInput = styled.input`
    border:none;
    text-align:center;
    width:100%;
    padding:4px;
    margin: 0 20px 0 0;
    font-size:20px;
    &:outline{
        outline:none;
    }
    &:focus{
        outline:none;
    }
`;

const RightIcons = styled.div`
    margin-left: auto;
    margin-right:14px;
`;

const CustomImg = styled.img`
    margin: 0 16px 0 16px;
`;


export const TopBar: FC = ()  => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    return (
        <Wrapper2>
            <InnerWrapper>
                <LogoImg src="./media/logo.png" alt=""/>
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
                    <CustomImg src="./media/icons/search.png" alt=""/>
                </InputWrapper>

                <RightIcons>
                    <CustomImg src="./media/icons/house.png"/>
                    <CustomImg src="./media/icons/comments.png"/>
                    <CustomImg src="./media/icons/bell.png"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};