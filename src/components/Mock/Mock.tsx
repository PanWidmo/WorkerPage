import {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    width:220px;
    margin:10px 40px 0 0;
    font-size:${fontSize[24]};
`;




export const Mock: FC = () => {
    return (
        <Wrapper>
            Mock
        </Wrapper>
    );
};