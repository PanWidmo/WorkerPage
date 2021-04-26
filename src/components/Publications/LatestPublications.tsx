import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-top:25px;
    margin-bottom:15px;

`;

const LeftSide = styled.div`

    img{
        width:90px;
    }
`;

const RightSide = styled.div`
    margin-left:10px;
    margin-right:30px;
    span{
        font-size:12px;
    }

    img{
        width:20px;
    }
`;

export const LatestPublications: FC = () => {
    return (
            <InnerWrapper>
                <LeftSide>
                    <img src="./imgs/write1.jpg" />
                </LeftSide>
                <RightSide>
                <h1>
                    Lorem ipsum dolor sit amet, consecteur adipisiscing elit... and one more line for the demo
                </h1>
                <span>7 jan. 2020</span>
                <img src="./imgs/portrair1.jpg"/>
                <span>Jan Ser</span>
                </RightSide>

            </InnerWrapper>
    );
};