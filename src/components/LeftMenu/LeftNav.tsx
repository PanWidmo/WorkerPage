import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';
import {Link} from "react-router-dom";
const InnerWrapper = styled.div`
    display:grid;
    grid-template-columns:26% 70%;
    align-items:center;
    margin-top:10px;

    a{
        text-decoration:none;
        color:${Colors.black};
    }

    .imgs{
        grid-column:1;
        margin-left: 9px;
        margin-top:7px;
        margin-bottom:7px;
    }

    .titles{
        grid-column:2;
        margin-top:7px;
        margin-bottom:7px;
    }
`;


export const LeftNav: FC = () => {
    return (
            <InnerWrapper>
                <img className="imgs" src="./media/icons/publications.png"/>
                <span className="titles">Publications</span>

                <img className="imgs" src="./media/icons/ecosystem.png"/>
                <span className="titles">Ecosystem</span>

                <img className="imgs" src="./media/icons/entities.png"/>
                <span className="titles"><Link to="/entities">Entities</Link></span>
            </InnerWrapper>
    );
};