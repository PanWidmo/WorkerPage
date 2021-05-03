import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
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
        font-size:${fontSize[14]};
    }
`;

const BottomSide = styled.div`
    display:grid;
    grid-template-columns:80px 40px 80px;
    align-items:center;
    .left {

    }
    .middle {
    width:30px;
    border-radius:50%;
    }
    .right{

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
                    <BottomSide>
                        <span className="left">7 jan. 2020</span>
                        <img className="middle" src="./imgs/portrair1.jpg"/>
                        <span className="right">Jan Ser</span>
                    </BottomSide>
                </RightSide>

            </InnerWrapper>
    );
};