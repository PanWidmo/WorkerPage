import React,{FC} from 'react';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}   from "react-router-dom";

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Publications} from '../Publications/Publications';
import {Workspaces} from '../Workspaces/Workspaces';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';

import {Entities} from '../Entities/Entities';
import {Profile} from '../Profile/Profile';
import {WorkspacesMain} from '../Workspaces/WorkspacesMain';
import {Mock} from '../Mock/Mock';

const Wrapper = styled.section`
    background: #F5F7F9;
`;

const Content = styled.div`
    max-width:1200px;
    display:flex;
    margin: 10px auto;
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
                            <Switch>
                                <Route path="/entities">
                                    <Entities/>
                                </Route>
                                <Route path="/profile">
                                    <Profile/>
                                </Route>
                                <Route path="/workspaces">
                                    <WorkspacesMain/>
                                </Route>
                                <Route path="/mock">
                                    <Mock/>
                                </Route>
                                <Route path="/">
                                    <Publications/>
                                    <Workspaces/>
                                    <ResumeYourWork/>
                                </Route>
                            </Switch>
                        </RightSide>
                </Content>
            </Wrapper>
        </Router>
    );
};

export default MainPage;