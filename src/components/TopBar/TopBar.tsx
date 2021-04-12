import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {ExpandedMenu} from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
    background-color:red;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
`;

const RightIcons = styled.div`
    text-align: right;
`;



const CustomImg = styled.img`

`;

const CustomInput = styled.input`

`;

const Menuwrapper = styled.div`
    position:relative;
    cursor:pointer;
    align-items:center;
    width:250px;
    justify-content:space-between;
`;

const LeftSide = styled.div`

`;

export const TopBar: FC = ()  => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    return (
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/logo.png" alt=""/>
                <Menuwrapper ref={wrapperRef}>
                    <LeftSide>
                        <img src="./media/icons/house.png"/>
                        <span>Home</span>
                        <img src="./media/icons/arrow-down.png" alt="" onClick={menuHandler}/>
                    </LeftSide>

                    {dropdownOpen &&
                        <ExpandedMenu/>
                    }
                    </Menuwrapper>


                <div>

                </div>

                <InnerWrapper>
                    <CustomInput type="text"/>
                    <CustomImg src="./media/icons/search.png" alt="" title=""/>
                </InnerWrapper>
                <RightIcons>
                    <CustomImg src="./media/icons/house.png"/>
                    <CustomImg src="./media/icons/comments.png"/>
                    <CustomImg src="./media/icons/bell.png"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};