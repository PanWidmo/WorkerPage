import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Wrapper} from '../../styledHelpers/Components';
import {boxShadow} from '../../styledHelpers/Components';
import {SingleWorkspaceWindow} from './SingleWorkspaceWindow';

const InnerWrapper = styled.div`
    max-width:940px;
    ${boxShadow()};
`;

const Name = styled.p`
    margin-top:20px;
    margin-left:10px;
    font-size:${fontSize[20]};

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
                <SingleWorkspaceWindow></SingleWorkspaceWindow>
                <SingleWorkspaceWindow></SingleWorkspaceWindow>
                <SingleWorkspaceWindow></SingleWorkspaceWindow>
                <SingleWorkspaceWindow></SingleWorkspaceWindow>
                <SingleWorkspaceWindow></SingleWorkspaceWindow>

            </Slider>

        </InnerWrapper>
    );
};