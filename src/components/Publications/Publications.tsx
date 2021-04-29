import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Wrapper} from '../../styledHelpers/Components';
import {LatestPublications} from './LatestPublications';

const InnerWrapper = styled.div`
    max-width:980px;
    display:grid;
    grid-template-columns:300px 1fr;
    align-items:center;
    box-shadow: 1px 2px 10px ${Colors.boxShadow};
`;

const LeftSide = styled.div`
    width:300px;
    height:340px;
    grid-column:1;
    background-image: url("./imgs/city2.png");
    background-position: center;
    background-size: cover;
    color: ${Colors.white};

    #divBottom{
        font-size:19px;
        margin:210px 20px 0px 20px;

        #personInfo{
            margin-top:20px;
            font-size:${fontSize[14]};
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
    align-items:Center;

    span#title{
        font-size:${fontSize[24]};
    }

    .btn{
        background:none;
        border:none;
        font-size:${fontSize[18]};
        cursor:pointer;
    }

`;

export const Publications: FC = () => {
    return (
        <InnerWrapper>
            <LeftSide>
                <div id="divBottom">
                    <span>
                    Lorem ipsum dolor sit amet,
                    consecteur adipisiscing elit... and
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
                <span id="title">Latest publications</span>

                <LatestPublications></LatestPublications>
                <LatestPublications></LatestPublications>
                <LatestPublications></LatestPublications>

                <button type="button" className="btn">See more publications</button>

            </RightSide>
        </InnerWrapper>
    );
};