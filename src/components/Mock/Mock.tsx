import {FC} from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;
    font-size:${fontSize[24]};
    display: grid;
    align-items: center;

`;

const CustomImg = styled.div`
    margin:0 auto;

    img{
        width:600px;
    }
`;




export const Mock: FC = () => {
    return (
        <Wrapper>
            <CustomImg>
                <img src="./media/imgs/error.jpeg" alt="Error img"/>

            </CustomImg>
        </Wrapper>
    );
};