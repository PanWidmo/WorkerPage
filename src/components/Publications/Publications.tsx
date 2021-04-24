import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';

const Wrapper5 = styled.div`
    max-width:980px;
`;

const InnerWrapper = styled.div`
    min-height:200px;
    border:orange solid 1px;
    min-width:40px;

`;

export const Publications: FC = () => {
    return (
        <Wrapper5>
            <InnerWrapper>
            <img id="foto" src="./imgs/city.jpeg" />
            </InnerWrapper>

        </Wrapper5>
    );
};