import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    border: 2px solid red;
    min-height:20px;
    max-width:200px;

`;

export const Publications: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
            Publications
            </InnerWrapper>

        </Wrapper>
    );
};