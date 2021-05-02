import {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';


const Wrapper = styled.div`
    width:220px;
    margin:10px 40px 0 0;
    border:2px solid red;
`;




export const WorkspacesMain: FC = () => {
    return (
        <Wrapper>
            WorkspacesMain
        </Wrapper>
    );
};