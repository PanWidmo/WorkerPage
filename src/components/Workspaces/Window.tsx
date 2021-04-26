import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`

`;

const Box = styled.div`
    border:2px solid red;
    display:grid;
    margin:20px 20px 20px 0;
`;

const CustomImage = styled.img`
    width:200px;
`;

const Icon = styled.img`
    width:100px;
`;

const Title = styled.p`

`;
export const Window: FC = () => {
    return (
        <InnerWrapper>
                <Box>
                    <CustomImage src="./imgs/write2.jpg"/>
                    <Icon src="./imgs/write1.jpg"/>
                    <Title>Client contract</Title>
                </Box>
        </InnerWrapper>
    );
};