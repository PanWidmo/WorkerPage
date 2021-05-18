import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';

import {Link} from "react-router-dom";
const InnerWrapper = styled.div`
    display:grid;
    grid-template-columns:26% 1fr;
    align-items:center;
    margin-top:10px;

    a{
        text-decoration:none;
        color:${Colors.black};
    }

    .imgs{
        grid-column:1;
        width:22px;
        margin-left: 14px;
        margin-top:7px;
        margin-bottom:7px;
    }

    .titles{
        grid-column:2;
        margin-top:7px;
        margin-bottom:7px;
        font-size: ${fontSize[16]};
        cursor:pointer;
    }
`;


export const LeftNav: FC = () => {
    return (
            <InnerWrapper>

                <img className="imgs" src="./media/icons/publications.png" alt="Publications icon"/>
                <span className="titles">Publications</span>

                <img className="imgs" src="./media/icons/ecosystem.png" alt="Ecosystem icon"/>
                <span className="titles">Ecosystem</span>

                <img className="imgs" src="./media/icons/entities.png" alt="Entities icon"/>
                <span className="titles"><Link to="/entities">Entities</Link></span>
            </InnerWrapper>
    );
};