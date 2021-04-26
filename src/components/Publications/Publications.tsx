import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

import {Wrapper} from '../../styledHelpers/Components';
import {LatestPublications} from './LatestPublications';

const InnerWrapper = styled.div`
    max-width:980px;
    border:2px purple solid;
    display:grid;
    grid-template-columns:300px 1fr;
    align-items:center;

`;

const LeftSide = styled.div`
    width:300px;
    height:340px;
    grid-column:1;
    background-image: url("./imgs/city2.png");
    background-size: cover;
    color: #fff;

    #divBottom{
        font-size:19px;
        margin:180px 20px 0px 20px;

        #personInfo{
            margin-top:20px;
            font-size:16px;
            img{
                border-radius:90px;
                width:20px;
                margin-left:10px;
                margin-right:10px;
            }
        }
    }
`;

const RightSide = styled.div`
    grid-column:2;
    margin-top:5px;
    margin-left:20px;

`;

export const Publications: FC = () => {
    return (
        <InnerWrapper>
            <LeftSide>
                <div id="divBottom">
                    <span>
                    Lorem ipsum dolor sit amet, <br/>
                    consecteur adipisiscing elit... and <br/>
                    one more line for the demo
                    </span>

                    <div id="personInfo">
                        <span>7 jan. 2020</span>
                        <img src="./imgs/portrair1.jpg"/>
                        <span>Jan Ser</span>
                    </div>

                </div>
            </LeftSide>
            <RightSide>
                <span>Latest publications</span>

                <LatestPublications></LatestPublications>
                <LatestPublications></LatestPublications>
                <LatestPublications></LatestPublications>

                <span>See more publications</span>

            </RightSide>
        </InnerWrapper>
    );
};