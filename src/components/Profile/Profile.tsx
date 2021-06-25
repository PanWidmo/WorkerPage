import {FC,useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';
// import { withFormik, Form, Field } from 'formik';

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
    width:940px;
    margin:10px 40px 10px 0;
    padding-top:10px;
    padding-bottom: 60px;
    background: ${Colors.white};

    a{
        text-decoration:none;
        color: ${Colors.black};
        display: flex;
    }

    h1{
        margin:20px 0;
        font-weight: bold;
        padding:10px;
    }

    .pencilHover{
        cursor: pointer;
    }

    #titleRow{
        font-weight: bold;
        border-bottom: 1px solid ${Colors.lightgray};
        padding-bottom: 10px;
    }

    .table{
        display: grid;
        grid-template-columns: 16% 16% 16% 16% 16% 16%;
        margin-top:10px;

        #name{
            grid-column: 1;
            padding-left:10px;
        }

        #entity{
            grid-column: 2;
        }

        #location{
            grid-column: 3;
        }

        #expertise{
            grid-column: 4;
        }

        #date{
            grid-column: 5;
        }

        #firm{
            grid-column: 6;
        }
    }

    .userProfileContentEditAfter{
        user-select: all;
        border:1px dotted blue;
        font-style:italic;
        text-decoration: none;

        &:focus{
            font-style: normal;
        }
    }
`;

const TopButtons = styled.div`
    display: flex;
    float:right;

    span {
        display: flex;
        align-items: center;
        margin-right: auto;
    }

    .buttonTop{
        cursor: pointer;
        margin:0 14px;


        img {
        width: 20px;
        margin:0 4px;

    }}
`;

const UserProfileTop = styled.div`
    display:grid;
    margin:50px 0 20px 0;
    grid-template-columns: 40% 60%;

    .left{
        grid-column: 1;
        text-align:center;

        img{
            width:30%;
            border-radius: 50%;
        }

        p{
            color:${Colors.lightgrayOriginal}
        }
    }

    .right{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 25% 25% 25% 25%;
        line-height: 26px;

        #userProfile0{
            grid-column: 1;
            grid-row: 1;
        }

        #userProfile1{
            grid-column: 1;
            grid-row: 2;
        }

        #userProfile2{
            grid-column: 1;
            grid-row: 3;
        }

        #userProfile3{
            grid-column: 1;
            grid-row: 4;
        }

        #pencilId{
            grid-column: 2;
            grid-row: 1;
            text-align:right;
        }

        #userProfile4{
            grid-column: 2;
            grid-row: 3;
        }

        #userProfile5{
            grid-column: 2;
            grid-row: 4;
        }

        img{
            width:28px;
        }
    }
`;

const Expertise = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    #topWithPencil{
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
    }
    #expertiseTitle{
        grid-column: 1;
    }

    #expertisePencil{
        grid-column: 2;
        text-align:right;
        background: ${Colors.white};
    }

    img{
        width:28px;
    }

    p{
        padding:5px;
        background-color: ${Colors.lightgray};
    }

    .boxDiv{
        display: flex;
        column-gap: 10px;
        margin:10px;
    }
`

const PanelInformation = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    .infoDiv{
        margin:10px;

        h2{
            color:${Colors.lightgrayOriginal};
            margin:10px 0;
        }

        #attachment{
            margin:10px 0;
            background: ${Colors.lightgray};
            padding:10px;
            display: flex;
            align-items:center;

            img{
                margin-right: 20px;
            }
        }

        .internalSingle{
            background-color: ${Colors.lightgray};
            display: grid;
            grid-template-columns: 5% 35% 1fr 1fr;
            align-items: center;
            margin:5px 0;

            img{
                grid-column: 1;
                border-radius: 50%;
                width:30px;
            }

            .name{
                grid-column: 2;
            }

            .message{
                grid-column: 3;
                display: flex;
                align-items: center;

                img{
                    width:20px;
                    margin-right:5px;
                }
            }

            .profile{
                grid-column: 4;
                display: flex;
                align-items: center;

                img{
                    width:20px;
                    margin-right:5px;
                }
            }


        }
    }

`;

const Proposals = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    #moreProposals{
        margin-top:20px;
        margin-left:84%;
        padding-bottom: 15px;
        color:${Colors.lightgrayOriginal}
    }

`;

const InternalReviews = styled.div`
    border-top: 1px solid ${Colors.lightgray};

`;

const AmountOfFees = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    .tableFees{
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        margin-top:10px;

        #year{
            padding-left:10px;
            grid-column: 1;
        }

        #costCenter{
            grid-column: 2;
        }

        #totalAmount{
            grid-column: 3;
        }

        #lawFirm{
            grid-column: 4;
        }
    }

`;
//#endregion
export const Profile: FC = () => {

    const closeNav = () => {

        if(statusBtnClose){
            document.getElementById('topBtn')?.remove();

            setCloseImg1(srcClosingBtn[1]);
            setStatusBtnClose(false);
        }
        else{
            setCloseImg1(srcClosingBtn[0]);
            setStatusBtnClose(true);
        }

    }

    const editValuesUser = () => {

        let x = 6;

        if(statusFieldsEditing){

            for(let i = 0; i < x;i++){
                const t = document.getElementById('userProfile'+i);
                t!.contentEditable = 'true';
                t!.classList.add('userProfileContentEditAfter');
            }

            setEditPencilTopProfile (srcImg[1]);
            setStatusFieldsEditing(false);
        }

        else{

            for(let i = 0; i < x;i++){
            const t = document.getElementById('userProfile'+i);
            t!.contentEditable = 'false';
            t!.classList.remove('userProfileContentEditAfter');
            }

            setEditPencilTopProfile (srcImg[0]);
            setStatusFieldsEditing(true);
        }
    }

    const editValuesProfile = () => {

        let x = 73;

        if(statusFieldsEditing){

            for(let i = 0; i < x;i++){
                const t = document.getElementById('restProfile'+i);
                t!.contentEditable = 'true';
                t!.classList.add('userProfileContentEditAfter');
            }

            setEditPencilRestProfile (srcImg[1]);
            setStatusFieldsEditing(false);
        }

        else{

            for(let i = 0; i < x;i++){
            const t = document.getElementById('restProfile'+i);
            t!.contentEditable = 'false';
            t!.classList.remove('userProfileContentEditAfter');
            }
        }

    }



    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    //#region states

    const srcImg = [
        "./media/icons/pencil.png",
        "./media/icons/save.png"
    ]

    const srcClosingBtn = [
        "X",
        "V"
    ]

    const [editPencilTopProfile, setEditPencilTopProfile] = useState(srcImg[0]);
    const [editPencilRestProfile, setEditPencilRestProfile] = useState(srcImg[0]);
    const [closeImg1, setCloseImg1] = useState(srcClosingBtn[0]);

    const [statusFieldsEditing, setStatusFieldsEditing] = useState(true);
    const [statusBtnClose, setStatusBtnClose] = useState(true);

    //#endregion

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Wrapper>
            <TopButtons id="top">
                <span id="topBtn">
                    <div className="buttonTop" id="message">
                        <Link to="/mock">
                            <img src="./media/icons/people.png" alt="Message img"/>
                            <span className="text">Message</span>
                        </Link>
                    </div>

                    <div className="buttonTop" id="request">
                        <Link to="/mock">
                            <img src="./media/icons/ecosystem.png" alt="Message img"/>
                            <span className="text">Create a request</span>
                        </Link>
                    </div>

                    <div className="buttonTop" id="cluster">
                        <Link to="/mock">
                            <img src="./media/icons/network.png" alt="Message img"/>
                            <span className="text">Add to a cluster</span>
                        </Link>
                    </div>
                    </span>

                    <div className="buttonTop">
                        <p onClick={closeNav}>{closeImg1}</p>
                    </div>

            </TopButtons>
            <UserProfileTop>
                <div className="left">
                    <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                    <p>See profile</p>
                </div>

                <div className="right">
                    <p id="userProfile0" className="userProfileContentEdit">{usersList[0]?.name}</p>
                    <p id="userProfile1" className="userProfileContentEdit">{usersList[0]?.company.name}</p>
                    <p id="userProfile2" className="userProfileContentEdit">{usersList[0]?.address.city}</p>
                    <p id="userProfile3" className="userProfileContentEdit">{usersList[0]?.username}</p>
                    <p id="pencilId"><img id="editProfile" className="pencilHover" onClick={editValuesUser} src={editPencilTopProfile} alt="Pen icon"/></p>
                    <p id="userProfile4" className="userProfileContentEdit">{usersList[0]?.email}</p>
                    <p id="userProfile5" className="userProfileContentEdit">{usersList[0]?.phone}</p>
                </div>

            </UserProfileTop>
            <Expertise>
                <div id="topWithPencil" className="pencilHover">
                    <h1 id="expertiseTitle">Expertise</h1>
                    <p id="expertisePencil"><img id="editExpertise" className="pencilHover" onClick={editValuesProfile} src={editPencilRestProfile} alt="Pen icon"/></p>
                    </div>

                <div className="boxDiv" id="expertise">
                    <p id="restProfile0">Mergers and acquisition</p>
                    <p id="restProfile1">Mergers and acquisition</p>
                </div>

                <h1>Specialties</h1>
                <div className="boxDiv" id="specialties">
                    <p id="restProfile2">Cross border operation</p>
                    <p id="restProfile3">Transaction over 500M$/$</p>
                </div>

                <h1>Admission to practice law</h1>
                <div className="boxDiv" id="admission">
                    <p id="restProfile4">Paris bar association</p>
                    <p id="restProfile5">Tunisian bar association</p>
                </div>

                <h1>Counties</h1>
                <div className="boxDiv" id="counties">
                    <p id="restProfile6">Tunisia</p>
                </div>
            </Expertise>
            <PanelInformation>
                <h1>Panel information</h1>

                <div className="infoDiv">
                    <h2>Hourly fee</h2>
                    <p id="restProfile7">610$/hour (Negociated)</p>
                </div>

                <div className="infoDiv">
                    <h2>Terms &amp; conditions</h2>
                    <p id="restProfile8">Monthly 10k$ retainer - see with {usersList[1]?.name}</p>

                    <div id="attachment">
                        <img src="./media/icons/ecosystem.png" alt="Attachment img"/>
                        <p id="restProfile9">attachment.jpg</p>
                    </div>
                </div>

                <h1>Services &amp; projects</h1>

                <div className="infoDiv">
                    <p id="restProfile10">Corporate M&amp;A and international acquistions</p>
                </div>

                <h1>Internal correspondants</h1>

                <div className="infoDiv">
                    <div className="internalSingle">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div id="restProfile11" className="name"> Firstname Lastname</div>
                        <div className="message">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            <p id="restProfile12">Message</p>
                            </div>
                        <div id="edit12" className="profile">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            <p id="restProfile13">Profile</p>
                            </div>
                    </div>
                    <div className="internalSingle">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div id="restProfile14" className="name"> Firstname Lastname</div>
                        <div className="message">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            <p id="restProfile15">Message</p>
                            </div>
                        <div className="profile">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            <p id="restProfile16">Profile</p>
                            </div>
                    </div>
                </div>
            </PanelInformation>
            <Proposals>
                <h1>Proposals</h1>

                <div className="table" id="titleRow">
                    <div id="name">
                        <p>Name</p>
                    </div>

                    <div id="entity">
                        <p>Entity</p>
                    </div>

                    <div id="location">
                        <p>Location</p>
                    </div>

                    <div id="expertise">
                        <p>Expertise</p>
                    </div>

                    <div id="date">
                        <p>Date</p>
                    </div>

                    <div id="firm">
                        <p>Firm</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p id="restProfile17">Operation Ti...</p>
                    </div>

                    <div id="entity">
                        <p id="restProfile18">Renault Co ...</p>
                    </div>

                    <div id="location">
                        <p id="restProfile19">France</p>
                    </div>

                    <div id="expertise">
                        <p id="restProfile20">#Tax</p>
                    </div>

                    <div id="date">
                        <p id="restProfile21">20/01/2018</p>
                    </div>

                    <div id="firm">
                        <p id="restProfile22">Racine</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p id="restProfile23">Op. Prometh...</p>
                    </div>

                    <div id="entity">
                        <p id="restProfile24">Renault HQ</p>
                    </div>

                    <div id="location">
                        <p id="restProfile25">USA</p>
                    </div>

                    <div id="expertise">
                        <p id="restProfile26">#M&amp;A</p>
                    </div>

                    <div id="date">
                        <p id="restProfile27">18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p id="restProfile28">Clifford chance</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p id="restProfile29">Op. Latandre</p>
                    </div>

                    <div id="entity">
                        <p id="restProfile30">Renault Br ...</p>
                    </div>

                    <div id="location">
                        <p id="restProfile31">Italia</p>
                    </div>

                    <div id="expertise">
                        <p id="restProfile32">#Social</p>
                    </div>

                    <div id="date">
                        <p id="restProfile33">18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p id="restProfile34">SVZ</p>
                    </div>
                </div>

                <p><Link to="/mock" id="moreProposals">See more proposals</Link></p>

            </Proposals>

            <InternalReviews>
            <h1>Internal reviews</h1>


            <div className="table" id="titleRow">
                    <div id="name">
                        <p>Name</p>
                    </div>

                    <div id="entity">
                        <p>Entity</p>
                    </div>

                    <div id="location">
                        <p>Location</p>
                    </div>

                    <div id="expertise">
                        <p>Expertise</p>
                    </div>

                    <div id="date">
                        <p>Date</p>
                    </div>

                    <div id="firm">
                        <p>Firm</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p id="restProfile35">Operation Ti...</p>
                    </div>

                    <div id="entity">
                        <p id="restProfile36">Renault Co ...</p>
                    </div>

                    <div id="location">
                        <p id="restProfile37">France</p>
                    </div>

                    <div id="expertise">
                        <p id="restProfile38">#Tax</p>
                    </div>

                    <div id="date">
                        <p id="restProfile39">20/01/2018</p>
                    </div>

                    <div id="firm">
                        <p id="restProfile40">Racine</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p id="restProfile41">Op. Prometh...</p>
                    </div>

                    <div id="entity">
                        <p id="restProfile42">Renault HQ</p>
                    </div>

                    <div id="location">
                        <p id="restProfile43">USA</p>
                    </div>

                    <div id="expertise">
                        <p id="restProfile44">#M&amp;A</p>
                    </div>

                    <div id="date">
                        <p id="restProfile45">18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p id="restProfile46">Clifford chance</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p id="restProfile47">Op. Latandre</p>
                    </div>

                    <div id="entity">
                        <p id="restProfile48">Renault Br ...</p>
                    </div>

                    <div id="location">
                        <p id="restProfile49">Italia</p>
                    </div>

                    <div id="expertise">
                        <p id="restProfile50">#Social</p>
                    </div>

                    <div id="date">
                        <p id="restProfile51">18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p id="restProfile52">SVZ</p>
                    </div>
                </div>

                <h1 id="moreReviews"> <Link to="/mock">See more Reviews</Link></h1>


            </InternalReviews>
            <AmountOfFees>
                <h1>Amount of fees</h1>

                <div className="tableFees" id="titleRow">
                    <div id="year">
                        <p >Year</p>
                    </div>

                    <div id="costCenter">
                        <p>Cost center</p>
                    </div>

                    <div id="totalAmount">
                        <p>Total amount</p>
                    </div>

                    <div id="lawFirm">
                        <p>Law firm</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p id="restProfile53">2019</p>
                    </div>

                    <div id="costCenter">
                        <p id="restProfile54">CS 153</p>
                    </div>

                    <div id="totalAmount">
                        <p id="restProfile55">3 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p id="restProfile56">Clifford chance</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p id="restProfile57">2018</p>
                    </div>

                    <div id="costCenter">
                        <p id="restProfile58">CS 153</p>
                    </div>

                    <div id="totalAmount">
                        <p id="restProfile59">9 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p id="restProfile60">Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p id="restProfile61">2017</p>
                    </div>

                    <div id="costCenter">
                        <p id="restProfile62">CS 47</p>
                    </div>

                    <div id="totalAmount">
                        <p id="restProfile63">10 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p id="restProfile64">Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p id="restProfile65"></p>
                    </div>

                    <div id="costCenter">
                        <p id="restProfile66">CS 153</p>
                    </div>

                    <div id="totalAmount">
                        <p id="restProfile67">18 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p id="restProfile68">Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p id="restProfile69"></p>
                    </div>

                    <div id="costCenter">
                        <p id="restProfile70">CS 32</p>
                    </div>

                    <div id="totalAmount">
                        <p id="restProfile71">15 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p id="restProfile72">Linklaters</p>
                    </div>
                </div>


            </AmountOfFees>
        </Wrapper>
    );
};