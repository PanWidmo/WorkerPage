import { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from "react-router-dom";

//#region import data from api
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getUsers, getPhotos } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
//#endregion

//#region styles
const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.white};
    padding-top:10px;
    padding-left:24px;
    padding-right:14px;
    box-shadow: 1px 2px 10px ${Colors.lightgrayOriginal};
    width:218px;
    display:grid;
    a{
        text-decoration:none;
        color:${Colors.black};
    }
    ul{
        font-size:${fontSize[16]};
    }
    li{
        margin-top:15px;
        margin-bottom:10px;
        display: grid;
        grid-template-columns:20% 1fr;
        align-items: center;
    }
    .icons{
        width:20px;
        margin-right:20px;
        grid-column:1;
    }
    .category{
        font-size:${fontSize[14]};
        color:${Colors.lightgrayOriginal};
        font-weight:bold;
        }
`;

const CustomInput = styled.input`
    border:1px solid ${Colors.lightgray};
    padding:4px;
    width:90%;
    text-align:left;
    &:outline{
        outline:none;
    }
    &:focus{
        outline:none;
    }
`;

const Account = styled.div`
    display:grid;
    grid-template-columns:60px 1fr;
    grid-template-rows: 1fr;
    border-top:1px solid ${Colors.lightgray};
    border-bottom:1px solid ${Colors.lightgray};
    align-items: center;
    #portrair{
        width:28px;
        border-radius:90px;
        grid-column: 1;
        grid-row: 1;
    }
    #name{
        grid-column: 2;
        grid-row: 1;
        margin-bottom:30px;
    }
    #see{
        grid-column: 2;
        grid-row: 1;
        margin-top:30px;
        font-size:${fontSize[12]};
        color:${Colors.purple};
    }

`;

const Logout = styled.div`
    text-align:center;
    padding:10px;
    border-top:1px solid ${Colors.lightgray};
    img{
        padding-right:16px;
    }
`;
//#endregion

export const ExpandedMenu: FC = () => {

    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users;
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    //#region search function

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text= e.target.value;
        setInputText(text);
    }
    //#endregion

    return (
        <Wrapper>
            <ul>
                <CustomInput type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>

                <li className="category">Platform</li>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/">
                <li><img src="./media/icons/house2.png" className="icons" alt="fotosy"/>Home</li>
                </Link>
                }
                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/publications.png" className="icons" alt="fotosy"/>Publications</li>
                }
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/people.png" className="icons" alt="fotosy"/>People</li>
                }
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/entities">
                <li><img src="./media/icons/entities2.png" className="icons" alt="fotosy"/>Entities</li>
                </Link>
                }
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/administration.png" className="icons" alt="fotosy"/>Administration</li>
                }

                <Link to="/workspaces">
                <li className="category">Workspaces</li>
                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Client contract</li>
                }
                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Supplier contract</li>
                }
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/entities.png" className="icons" alt="fotosy"/>Corporate</li>
                }
                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Group Norms</li>
                }
                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Real estate contracts</li>
                }
                </Link>

                <li className="category">Account</li>
                <Account>
                    <img id="portrair" src="./imgs/portrair1.jpg" alt="fotosy"/>
                    <li id="name"></li>
                    <li id="see"><Link to="/profile">See profile</Link></li>

                </Account>
                <li><img src="./media/icons/privacy.png" className="icons" alt="fotosy"/>Privacy</li>
                <li><img src="./media/icons/settings.png" className="icons" alt="fotosy"/>Settings</li>

            </ul>

            <Logout>
                <img src="./media/icons/logout.png" alt="fotosy"/>
                <span>Logout</span>
            </Logout>
        </Wrapper>
    );
};