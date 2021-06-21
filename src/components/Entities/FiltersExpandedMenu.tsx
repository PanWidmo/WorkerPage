import { FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';



//#region styles
const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.white};
    margin-top:170px;
    min-width:500px;
    padding:8px;
    border:1px solid ${Colors.black};
    z-index: 1;

    #topP{
        margin-bottom:10px;
        color:${Colors.lightgrayOriginal}
    }

    #bottom{
        margin:10px 0 0 0;
        color: ${Colors.purple};
    }
`;

const Content = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
    margin-top:5px;

    img{
        width:20px;
    }

    .arrow{
        width:10px;
    }

    .inputText{
        background-color: ${Colors.lightgrayOriginal};
        border:none;
    }

`;


//#endregion

export const FiltersExpandedMenu: FC = () => {


    return (
        <Wrapper>
            <p id="topP"> Rows are filtered by the following conditions starting from the top.</p>
            <Content>
                <img src="./media/icons/cross.png" alt="Cross icon"/>
                <p>Where</p>
                <p>Company</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <p>Contains</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <input className="inputText" type="text" placeholder="Type..."/>
            </Content>

            <Content>
                <img src="./media/icons/cross.png" alt="Cross icon"/>
                <p>Where</p>
                <p>Status</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <p>Is</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <input className="inputText" type="text" placeholder="Type..."/>
                <p>In</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <input className="inputText" type="text" placeholder="Entity..."/>
            </Content>

            <Content>
                <img src="./media/icons/cross.png" alt="Cross icon"/>
                <p>And</p>
                <p>Status</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <p>Ends before</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <input className="inputText" type="text" placeholder="Date..."/>
                <p>In</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>
                <input className="inputText" type="text" placeholder="Entity..."/>
            </Content>
            <Content id="bottom">
                <img className="arrow" src="./media/icons/plus.png" alt="Plus img"/>
                <p>Add filter</p>
                <p>choose property</p>
                <img className="arrow" src="./media/icons/arrow-down.png" alt="Cross icon"/>

            </Content>

        </Wrapper>
    );
};