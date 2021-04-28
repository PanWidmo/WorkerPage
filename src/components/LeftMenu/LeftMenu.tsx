import {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';
import {LeftNav} from './LeftNav';
import {Accounts} from '../../data/Accounts';

const Wrapper3 = styled.div`
    max-width:220px;
    margin:10px 40px 0 0;
`;

const InnerWrapper = styled.div`
    border-radius: 10px;
    width: 220px;
    text-align: center;
    background: ${Colors.white};

`;

const PersonInfo=styled.div`
    display:grid;
    grid-template-columns: 1fr;
    align-items:center;

    #foto{
    padding-top:14px;
    padding-bottom:14px;
    width:100px;
    border-radius: 50%;
    margin:0 auto;
    }

    #name{
    margin-top:10px;
    margin-bottom:10px;
    color:${Colors.blue};
    font-weight:bold;
    }

    #job{
    color:${Colors.notificationBackground};
    padding-bottom:20px;
    border-bottom:1px solid ${Colors.lightgray};
    }
`;

const PersonDetails=styled.div`
    margin-top:10px;
    padding-bottom:10px;
    display:grid;
    grid-template-columns:20% 60% 20%;
    align-items:center;
    .leftImgs{
        grid-column:1;
        margin-left:14px;
        margin-top:5px;
        margin-bottom:5px;
    }
    .middle{
        grid-column:2;
        text-align:left;
        margin-top:5px;
        margin-bottom:5px;
    }
    .rightImgs{
        grid-column:3;
        border:1px solid ${Colors.black};
        padding:4px;
        border-radius:6px;
        margin-top:5px;
        margin-bottom:5px;
        cursor:pointer;
    }

`;



export const LeftMenu: FC = (props) => {
    return (
        <Wrapper3>
            <InnerWrapper>
                <PersonInfo>
                    <img id="foto" src={Accounts[0].image}/>
                    <span id="name">{Accounts[0].name}</span>
                    <span id="job">Job title - Company</span>
                </PersonInfo>
                <PersonDetails>
                    <img className="leftImgs" src="./icons/network.png"/>
                    <span className="middle">Your network</span>
                    <img className="rightImgs" src="./icons/user-plus.png"/>

                    <img className="leftImgs" src="./media/icons/publications.png"/>
                    <span className="middle">Your Publications</span>
                    <img className="rightImgs" src="./media/icons/plus.png" />
                </PersonDetails>
            </InnerWrapper>
            <LeftNav>

            </LeftNav>
        </Wrapper3>
    );
};