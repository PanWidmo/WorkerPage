import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {boxShadow} from '../../styledHelpers/Components';
// import {Wrapper} from '../../styledHelpers/Components';
import { Link } from 'react-router-dom';

const InnerWrapper = styled.div`
    display:flex;

    .links{
        text-decoration:none;
        color:${Colors.black};
    }
`;

const Box = styled.div`
    margin:20px 20px 20px 0;
    background-color: ${Colors.white};
    ${boxShadow()};
`;

const CustomImage = styled.img`
    width:238px;
`;

const Icon = styled.div`

    img{
    width:60px;
    height:60px;
    padding:6px;
    background:${Colors.white};
    margin-top:-30px;
    margin-left:7px;
    ${boxShadow()};
    }
    p{
        font-size:${fontSize[18]};
        margin-left:90px;
        margin-top:-40px;
    }
`;

const AndUsers = styled.div`
    margin-left:12px;
    margin-top:40px;
    color:${Colors.lightgrayOriginal};
    font-size: ${fontSize[14]};
    font-weight: bold;

    img{
        width:20px;
        margin-right:5px;
    }
    span{
        margin-left:10px;
        margin-right:20px;
    }
    p{
        margin-top:15px;
        margin-bottom:10px;
        padding-bottom: 10px;
    }

`;
export const SingleWorkspaceWindow: FC = () => {
    return (
        <InnerWrapper>
                <Link to="/client_contract" className="links">
                <Box>
                    <CustomImage src="./media/imgs/write2.jpg"/>
                        <Icon>
                            <img src="./media/imgs/write.png" alt="Writing img"/>
                            <p>Client contract</p>
                        </Icon>
                        <AndUsers>
                            <img src="./media/imgs/write.png" alt="Writing img cloud"/>
                            Contract
                            <span>&#9679;</span>
                            <img src="./media/icons/people.png" alt="People icon"/>
                            150 users
                            <p>Last update 2 day ago</p>
                        </AndUsers>
                </Box>
                </Link>

                <Link to="/supplier_contract" className="links">
                <Box>
                    <CustomImage src="./media/imgs/write2.jpg"/>
                        <Icon>
                            <img src="./media/imgs/write.png" alt="Writing img"/>
                            <p>Supplier contract</p>
                        </Icon>
                        <AndUsers>
                            <img src="./media/imgs/write.png" alt="Writing img cloud"/>
                            Contract
                            <span>&#9679;</span>
                            <img src="./media/icons/people.png" alt="People icon"/>
                            25 users
                            <p>Last update 2 day ago</p>
                        </AndUsers>
                </Box>
                </Link>

                <Link to="/corporate" className="links">
                <Box>
                    <CustomImage src="./media/imgs/write2.jpg"/>
                        <Icon>
                            <img src="./media/icons/entities2.png" alt="Writing img"/>
                            <p>Corporate </p>
                        </Icon>
                        <AndUsers>
                            <img src="./media/icons/entities2.png" alt="Writing img cloud"/>
                            Corporate
                            <span>&#9679;</span>
                            <img src="./media/icons/people.png" alt="People icon"/>
                            25 users
                            <p>Last update 2 day ago</p>
                        </AndUsers>
                </Box>
                </Link>

                <Link to="/group_norms" className="links">
                <Box>
                    <CustomImage src="./media/imgs/write2.jpg"/>
                        <Icon>
                            <img src="./media/icons/book.png" alt="Writing img"/>
                            <p>Group norms</p>
                        </Icon>
                        <AndUsers>
                            <img src="./media/icons/book.png" alt="Writing img cloud"/>
                            Norms
                            <span>&#9679;</span>
                            <img src="./media/icons/people.png" alt="People icon"/>
                            25 users
                            <p>Last update 2 day ago</p>
                        </AndUsers>
                </Box>
                </Link>

        </InnerWrapper>
    );
};