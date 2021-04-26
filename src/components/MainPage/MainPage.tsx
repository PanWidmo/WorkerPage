import React,{FC} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Publications} from '../Publications/Publications';
import {Workspaces} from '../Workspaces/Workspaces';

const Router = styled.div``;

const Wrapper = styled.section``;

const Content = styled.div`
    max-width:1200px;
    background: #F5F7F9;
    display:flex;
    margin:0 auto;
`;

const RightSide = styled.div`
    margin-top:10px;
`;
const MainPage: FC = () => {
    return (
        <Router>
            <Wrapper>
                <TopBar/>
                <Content>
                    <LeftMenu/>
                        <RightSide>
                            <Publications/>
                            <Workspaces/>
                        </RightSide>
                </Content>
            </Wrapper>
        </Router>
    );
};

export default MainPage;