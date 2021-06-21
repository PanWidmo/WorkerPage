import { FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';



//#region styles
const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.white};
    margin-top:100px;
    width:940px;
    border:2px solid red;
    z-index: 1;
`;

const Content = styled.div`
    display: flex;

    img{
        width:20px;
    }


`;


//#endregion

export const FiltersExpandedMenu: FC = () => {


    return (
        <Wrapper>
            <p> Rows are filtered by the following conditions starting from the top.</p>
            <Content>
            <img src="./media/icons/cross.png" alt="Cross icon"/>
            </Content>

        </Wrapper>
    );
};