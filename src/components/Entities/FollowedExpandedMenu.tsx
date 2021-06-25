import { FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';



//#region styles
const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.black};
    margin-top:130px;
    width:85px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 10px;
`;



//#endregion

export const FollowedExpandedMenu: FC = () => {


    return (
        <Wrapper>
            <input type="button" id="all" value="Followed" />
            <input type="button" id="all" value="All" />
            <input type="button" id="mine" value ="Mine" />
        </Wrapper>
    );
};