import {FC} from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {ExpandedMenu} from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
`;

const RightIcons = styled.div`

`;

const InputWrapper = styled.img`

`;

const CustomImg = styled.img`

`;

const CustomInput = styled.input`

`;

export const TopBar: FC = () => {
    return (
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/logo.png"/>
                <div>
                    <ExpandedMenu/>
                </div>
                <InnerWrapper>
                    <CustomInput type="text"/>
                    <input type="text"/>
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