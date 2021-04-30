import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    background: ${Colors.white};
    margin-top:30px;
    padding-left:20px;
    padding-right:20px;
    h1{
        font-size:${fontSize[20]};
        color:${Colors.blue};
        margin-bottom:10px;

    }

    p{
        font-size:${fontSize[18]};
    }
`;

const Bottom = styled.div`
    margin:10px 0px;
    img{
        width:20px;
    }
`;


export const SingleResumeYourWorkWindow: FC = () => {
    return (
        <InnerWrapper>
            <h1>World company SAS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrit orci. Donec vehicula justo ut nulla aliquet, ac tincidunt metus tristique.</p>
            <Bottom>
                <img src="./media/logo.png"/>
                Subsid. corp.

            </Bottom>
        </InnerWrapper>
    );
};