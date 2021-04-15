import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';


const InnerWrapper = styled.div`
    border:2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    text-align: center;

`;

const Box1=styled.div`

    img{
        margin-top:20px;
        width:100px;
        border-radius:90px;
    }
`;

const Name=styled.div`
    margin-top:10px;
    margin-bottom:10px;
    color:blue;
    font-weight:bold;
`;

const JobInfo=styled.div`
    color:grey;
    padding-bottom:30px;
    border-bottom:1px solid lightgray;
`;

const Box2=styled.div`
`;

const Box3=styled.div`
`;

export const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>

                <Box1>
                    <img src="./icons/portrair1.jpg" />
                    <Name>Humberta Swift</Name>
                    <JobInfo>Job title - Company</JobInfo>
                </Box1>
                <Box2>
                    <img src="./icons/network.png"/>
                    <span>Your network</span>
                    <img src="./icons/user-plus.png"/>
                </Box2>
                <Box3>
                    <img src="./media/icons/publications.png"/>
                    <span>Your Publications</span>
                    <img src="./media/icons/plus.png" />
                </Box3>
            </InnerWrapper>
        </Wrapper>
    );
};