import {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork';


const Wrapper = styled.div`
    width:220px;
    margin:10px 40px 0 0;
`;

const Top = styled.div`

`;


export const WorkspacesMain: FC = () => {
    return (
        <Wrapper>
            <Top>
                <div className="bgPhoto">

                </div>
                <div className="bottomTopInfo">
                    Sjema Eniu
                </div>
            </Top>

        </Wrapper>
    );
};