import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
`;

const Box = styled.div`
    border:2px solid red;
    margin:20px 20px 20px 0;
`;

const CustomImage = styled.img`
    width:190px;
    height:100%;
`;

const Icon = styled.div`

    img{
    width:80px;
    height:60px;
    padding:6px;
    background:#fff;
    margin-top:-20px;
    }

`;

const Title = styled.p`

`;
export const Window: FC = () => {
    return (
        <InnerWrapper>
                <Box>
                    <CustomImage src="./imgs/write2.jpg"/>
                    <Icon><img src="./imgs/write.jpg"/></Icon>
                    <Title>Client contract</Title>
                </Box>
        </InnerWrapper>
    );
};