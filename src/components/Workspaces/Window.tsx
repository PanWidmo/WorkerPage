import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    display:inline;
`;

const Box = styled.div`
    display:inline;
    display:grid;
    width:200px;
    margin:20px;
    img{
        width:200px;
    }
    display:inline;
`;


export const Window: FC = () => {
    return (
        <InnerWrapper>
                <Box>
                    <img src="./imgs/write2.jpg"/>
                </Box>
        </InnerWrapper>
    );
};