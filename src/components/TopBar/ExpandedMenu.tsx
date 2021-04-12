import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top:24px;
    left: 0;
    background:white;
    padding:16px;
    border: 1px solid;
    width:250px;
    ul{
        border: 1px solid red;
    }
`;

export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>First</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>Last</li>
            </ul>
        </Wrapper>
    );
};