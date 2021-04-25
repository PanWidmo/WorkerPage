import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';
import {Window} from './Window';
const InnerWrapper = styled.div`
    border:2px solid red;
    margin-top:20px;
`;

export const Workspaces: FC = () => {
    return (
        <InnerWrapper>
            Workspaces
            <br/>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>

        </InnerWrapper>
    );
};