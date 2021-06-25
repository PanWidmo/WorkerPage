import {FC} from 'react';
import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork';

interface props{
    type: string;
}

const data = [
    {
        id: 1,
        photo: 'https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive:steep,dpr_2,w_1024,h_450/f3onhwuont2spjn8xkkm',
        name: 'Client contract',
        content: "Client contract looorem loorem",
    },
    {
        id: 2,
        photo: 'https://www.anvic.co.uk/wp-content/uploads/2017/02/Conference-Room-Etiquettes-750x458.jpg',
        name: 'Supplier contract',
        content: "Supplier contract loorem loorem",
    },
    {
        id: 3,
        photo: 'https://images.squarespace-cdn.com/content/v1/54b25717e4b04905168fc72f/1440844638197-S7JKW96OLSPVJJ7U3GAB/ke17ZwdGBToddI8pDm48kCOvtajsz7kV0bc_h_la9b97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdCBw5tE12EyfPHFBQ-ircTtkfwaJZCdu04tPxr7xjr2gjqHEQp9SyAh6JNHwp5JUA/ccs-uc-200-wmt.jpg?format=2500w',
        name: 'Corporate',
        content: "Corporate loorem loorem",
    },
    {
        id: 4,
        photo: 'https://u.profitroom.pl/2018-hotelepark-pl/thumb/1420x910/uploads/Poznan/201810221055490.HP_Poznan_11.jpg',
        name: 'Group norms',
        content: "Group norms loorem loorem",
    }
]

export const WorkspacesMain: FC <props> = (props) => {

const Wrapper = styled.div`
    width:940px;
    margin:10px 40px 0 0;
`;

const Top = styled.div`
    background:${Colors.white};
    border-radius: 10px;


    .bgPhoto{
        height:200px;
        background-image: url(${data[parseInt(props.type)].photo});
        background-position: center;
        background-size: cover;
    }

    .bottomTopInfo{
        display: grid;
        grid-template-columns: 12% 1fr;
    }

    .leftImg{
        display: flex;
        align-items: center;
        margin:0 auto;

        img{
            width:35px;
        }
    }

    .rightContent{
        position: relative;

        h1{
            margin-top:15px;
            font-size: ${fontSize[16]};
            font-weight: bold;
        }

        p{
            color:${Colors.lightgrayOriginal};
            margin-top:20px;
        }

        .settingsIcon{
            cursor: pointer;
            width:20px;
            position: absolute;
            right:0;
            margin:5px 5px 0 0;
        }
    }

`;

const Middle = styled.div`
    margin-top: 20px;
    background:${Colors.lightgrayOriginal};
    padding:20px;

    #title{
        margin-bottom: 10px;
        color:${Colors.lightgray};
        font-weight: bold;
    }

    .boxesContainer{
        display: flex;
        column-gap: 10px;

}

`;

const Box = styled.div`
    width:310px;
    border:1px solid purple;
    background:${Colors.white};
    padding:10px;

    .imgInBoxes{
        width:30px;
    }

    h1{
        margin-top:20px;
        font-size: ${fontSize[20]};
    }

    p{
        margin:10px 0;
        font-size: ${fontSize[14]};
    }

`;


    return (
        <Wrapper>
            <Top>
                <div className="bgPhoto">
                </div>
                <div className="bottomTopInfo">
                    <div className="leftImg">
                        <img src="./media/icons/entities.png" alt="Right icon img"/>
                    </div>
                    <div className="rightContent">
                        <img src="./media/icons/settingsIcon.png" className="settingsIcon" alt="Settings Icon"/>
                        <h1>{data[parseInt(props.type)].name}</h1>
                        <p>{data[parseInt(props.type)].content}</p>
                    </div>
                </div>
            </Top>
            <Middle>
                <p id="title">Start working on corporate matters</p>
                <div className="boxesContainer">
                    <Box>
                        <img className="imgInBoxes" src="./media/icons/entities.png" alt="Entities icon"/>
                        <h1>Explore your entities</h1>
                        <p>Take a few minutes to look at the most important elements and specifcities of your entities.</p>
                    </Box>
                    <Box>
                        <img className="imgInBoxes" src="./media/imgs/structure.png" alt="Entities icon"/>
                        <h1>Structure the ownership</h1>
                        <p>Get a clear view of the owership by looking at the relations.</p>
                    </Box>
                    <Box>
                        <img className="imgInBoxes" src="./media/imgs/calendar.png" alt="Entities icon"/>
                        <h1>Define the calendar</h1>
                        <p>Prepare future events by creating detailer plans around the life.</p>
                    </Box>
                </div>
            </Middle>
            <ResumeYourWork>

            </ResumeYourWork>

        </Wrapper>
    );
};