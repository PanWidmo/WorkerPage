import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';
import {Window} from './Window';

const InnerWrapper = styled.div`
    border:2px solid red;
    margin-top:20px;
    max-width:960px;
`;

const Name = styled.p`
    margin-top:10px;
    margin-left:10px;

`;

const Slider = styled.div`
    overflow-x:scroll;
    display: flex;
`;

export const Workspaces: FC = () => {
    return (
        <InnerWrapper>
            <Name>Workspaces</Name>
            <Slider>
                <Window></Window>
                <Window></Window>
                <Window></Window>
                <Window></Window>
                <Window></Window>
            </Slider>

        </InnerWrapper>
    );
};