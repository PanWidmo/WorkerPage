import { FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';



//#region styles
const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.lightgray};
    margin-top:130px;
    width:120px;
    border:2px solid red;
`;



//#endregion

export const FollowedExpandedMenu: FC = () => {


    return (
        <Wrapper>
            <ul>
                    <li className="category">Platform</li>
                    <li className="category">Workspaces</li>
                    <li className="category">Account</li>
                    <li><img src="./media/icons/privacy.png" className="icons" alt="fotosy"/>Privacy</li>
                    <li><img src="./media/icons/settings.png" className="icons" alt="fotosy"/>Settings</li>
            </ul>
        </Wrapper>
    );
};