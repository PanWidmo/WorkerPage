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

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
//#endregion

//#region styles
const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.white};
    padding-top:10px;
    margin-top:5px;
    box-shadow: 1px 2px 10px ${Colors.boxShadow};
    width:250px;
    display:grid;
    z-index: 1;
    a{
        text-decoration:none;
        color:${Colors.black};
    }
    ul{
        font-size:${fontSize[16]};
        #scroll{
            overflow-y:scroll;
            border-bottom:1px solid ${Colors.lightgray};
        }
    }
    li{
        margin-left:18px;
        margin-bottom:10px;
        margin-top:5px;
        display: grid;
        grid-template-columns:20% 1fr;
        align-items: center;
        font-size: ${fontSize[16]};
    }
    .singleRow {
        margin-top:15px;
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
    padding:6px;
    margin-left:14px;
    margin-bottom:4px;
    width:86%;
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
    grid-template-columns:20% 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    a{
        color: ${Colors.purple};
        font-weight:bold;
    }
    #portrair{
        width:20px;
        border-radius:90px;
        grid-column: 1;
        grid-row: 1;
        margin-left:18px;
    }
    #name{
        grid-column: 2;
        grid-row: 1;
        margin-bottom:30px;
        font-size: ${fontSize[12]};
        white-space: nowrap;
    }
    #see{
        grid-column: 2;
        grid-row: 1;
        margin-top:30px;
        font-size:${fontSize[12]};
        white-space: nowrap;
    }

`;

const Logout = styled.div`
    text-align:center;
    padding:10px;
    border-top:1px solid ${Colors.lightgray};
    font-size: ${fontSize[16]};
    img{
        padding-right:16px;
    }
`;
//#endregion

export const ExpandedMenu: FC = () => {

    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
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

                <ul id="scroll">
                    <li className="category">Platform</li>
                    {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/">
                    <li className="singleRow"><img src="./media/icons/house2.png" className="icons" alt="fotosy"/>Home</li>
                    </Link>
                    }
                    {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                    <li className="singleRow"><img src="./media/icons/publications.png" className="icons" alt="fotosy"/>Publications</li>
                    </Link>
                    }
                    {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                    <li className="singleRow"><img src="./media/icons/people.png" className="icons" alt="fotosy"/>People</li>
                    </Link>
                    }
                    {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/entities">
                    <li className="singleRow"><img src="./media/icons/entities2.png" className="icons" alt="fotosy"/>Entities</li>
                    </Link>
                    }
                    {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/mock">
                    <li className="singleRow"><img src="./media/icons/administration.png" className="icons" alt="fotosy"/>Administration</li>
                    </Link>
                    }

                    <Link to="/workspaces">
                    <li className="category">Workspaces</li>
                    {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/client_contract">
                    <li className="singleRow"><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Client contract</li>
                    </Link>
                    }
                    {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/supplier_contract">
                    <li className="singleRow"><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Supplier contract</li>
                    </Link>
                    }
                    {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/corporate">
                    <li className="singleRow"><img src="./media/icons/entities.png" className="icons" alt="fotosy"/>Corporate</li>
                    </Link>
                    }
                    {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/group_norms">
                    <li className="singleRow"><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Group Norms</li>
                    </Link>
                    }
                    {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to="/real_estate_contracts">
                    <li className="singleRow"><img src="./media/icons/ecosystem.png" className="icons" alt="fotosy"/>Real estate contracts</li>
                    </Link>
                    }
                    </Link>
                    </ul>

                    <li className="category">Account</li>
                    <Account>
                        <img id="portrair" src={usersPhoto[0]?.url} alt="fotosy"/>
                        <li id="name">{usersList[0]?.name}</li>
                        <li id="see" ><Link to="/profile">See profile</Link></li>

                    </Account>
                    <Link to="/mock"><li><img src="./media/icons/privacy.png" className="icons" alt="fotosy"/>Privacy</li></Link>
                    <Link to="/mock"><li><img src="./media/icons/settings.png" className="icons" alt="fotosy"/>Settings</li></Link>
            </ul>
            <Link to="/mock">
            <Logout>
                <img src="./media/icons/logout.png" alt="Logout img"/>
                <span>Logout</span>
            </Logout>
            </Link>
        </Wrapper>
    );
};