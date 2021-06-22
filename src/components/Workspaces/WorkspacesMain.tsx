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

interface props{
    type: string;
}

export const WorkspacesMain: FC <props> = (props) => {
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