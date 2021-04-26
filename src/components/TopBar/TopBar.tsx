import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import useDropdown from 'react-dropdown-hook';

import {Wrapper} from '../../styledHelpers/Components';
import {ExpandedMenu} from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    background: ${Colors.white};
    box-shadow: 1px 2px 10px lightgray;
    justify-content: center;
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
    align-items:center;
    width:250px;
    justify-content:space-between;
    padding:8px;
`;

const LeftSide = styled.div`
    margin:8px;
    span{
        font-size:22px;
        margin-right:80px;
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
    border:1px solid lightgray;
    border-radius:11px;
`;

const CustomInput = styled.input`
    border:none;
    text-align:center;
    width:100%;
    padding:4px;
    margin: 0 20px 0 0;
    font-size:22px;
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
                    <CustomImg className="rightIcons" src="./media/icons/house.png"/>
                    <CustomImg src="./media/icons/comments.png"/>
                    <CustomImg src="./media/icons/bell.png"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};