import {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';


const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;
`;

const TopButtons = styled.div`
    width:100%;
    display: flex;
    justify-content: right;
    justify-items: center;


    .buttonTop{
        margin-left: 30px;
        cursor:pointer;
        align-items: center;

        img {
        width: 20px;

        .text {
            border:2px solid red;
        }
    }}
`;

const PersonImportant = styled.div`
    display:grid;
    margin-top:30px;
    grid-template-columns: 20% 40% 40%;

    .left{
        grid-column: 1;
    }

    .middle{
        grid-column: 2;
    }

    .right{
        grid-column: 3;
    }
`;


export const Profile: FC = () => {
    return (
        <Wrapper>
            <TopButtons>
                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Message</span>
                    </span>

                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Create a request</span>
                    </span>

                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Add to a cluster</span>
                    </span>

                    <span className="buttonTop">
                        X
                    </span>

            </TopButtons>
            <PersonImportant>
                <div className="left">
                    
                    See profile
                </div>

                <div className="middle">
                    Humberta 
                </div>

                <div className="right">
                    mail
                </div>

            </PersonImportant>

        </Wrapper>
    );
};