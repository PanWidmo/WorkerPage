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

        #name{
            grid-column: 1;
            grid-row: 1;
        }

        #companyName{
            grid-column: 1;
            grid-row: 2;
        }

        #address{
            grid-column: 1;
            grid-row: 3;
        }

        #username{
            grid-column: 1;
            grid-row: 4;
        }

        #pencilId{
            grid-column: 2;
            grid-row: 1;
            text-align:right;
        }

        #email{
            grid-column: 2;
            grid-row: 3;
        }

        #phone{
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
        margin-right:20px;
        padding-bottom: 20px;
        text-align: right;
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

        if(status1){
            document.getElementById('topBtn')?.remove();

            setCloseImg1(srcClosingBtn[1]);
            SetStatus1(false);
        }
        else{

            setCloseImg1(srcClosingBtn[0]);
            SetStatus1(true);

        }

    }

    const editValuesUser = () => {

        if(status){
            const t1 = document.getElementById('nameProfile');
            t1!.contentEditable = 'true';
            t1!.classList.add('userProfileContentEditAfter');
            const t2 = document.getElementById('companyName')
            t2!.contentEditable = 'true';
            t2!.classList.add('userProfileContentEditAfter');
            const t3 = document.getElementById('address')
            t3!.contentEditable = 'true';
            t3!.classList.add('userProfileContentEditAfter');
            const t4 = document.getElementById('username')
            t4!.contentEditable = 'true';
            t4!.classList.add('userProfileContentEditAfter');
            const t5 = document.getElementById('email')
            t5!.contentEditable = 'true';
            t5!.classList.add('userProfileContentEditAfter');
            const t6 = document.getElementById('phone')
            t6!.contentEditable = 'true';
            t6!.classList.add('userProfileContentEditAfter');

            setSrc1 (srcImg[1]);
            SetStatus(false);
            }

            else{
                const t1 = document.getElementById('nameProfile')
                t1!.contentEditable = 'false';
                t1!.classList.remove('userProfileContentEditAfter');
                const t2 = document.getElementById('companyName')
                t2!.contentEditable = 'false';
                t2!.classList.remove('userProfileContentEditAfter');
                const t3 = document.getElementById('address')
                t3!.contentEditable = 'false';
                t3!.classList.remove('userProfileContentEditAfter');
                const t4 = document.getElementById('username')
                t4!.contentEditable = 'false';
                t4!.classList.remove('userProfileContentEditAfter');
                const t5 = document.getElementById('email')
                t5!.contentEditable = 'false';
                t5!.classList.remove('userProfileContentEditAfter');
                const t6 = document.getElementById('phone')
                t6!.contentEditable = 'false';
                t6!.classList.remove('userProfileContentEditAfter');

                setSrc1 (srcImg[0]);
                SetStatus(true);

                console.log("na false");
            }
    }

    const editValuesProfile = () => {

        if(status){
            const t1 = document.getElementById('edit1')
            t1!.contentEditable = 'true';
            t1!.classList.add('userProfileContentEditAfter');
            const t2 = document.getElementById('edit2')
            t2!.contentEditable = 'true';
            t2!.classList.add('userProfileContentEditAfter');
            const t3 = document.getElementById('edit3')
            t3!.contentEditable = 'true';
            t3!.classList.add('userProfileContentEditAfter');
            const t4 = document.getElementById('edit4')
            t4!.contentEditable = 'true';
            t4!.classList.add('userProfileContentEditAfter');
            const t5 = document.getElementById('edit5')
            t5!.contentEditable = 'true';
            t5!.classList.add('userProfileContentEditAfter');
            const t6 = document.getElementById('edit6')
            t6!.contentEditable = 'true';
            t6!.classList.add('userProfileContentEditAfter');

            setSrc2 (srcImg[1]);
            SetStatus(false);
            }

            else{
                const t1 = document.getElementById('edit1')
                t1!.contentEditable = 'false';
                t1!.classList.remove('userProfileContentEditAfter');
                const t2 = document.getElementById('edit2')
                t2!.contentEditable = 'false';
                t2!.classList.remove('userProfileContentEditAfter');
                const t3 = document.getElementById('edit3')
                t3!.contentEditable = 'false';
                t3!.classList.remove('userProfileContentEditAfter');
                const t4 = document.getElementById('edit4')
                t4!.contentEditable = 'false';
                t4!.classList.remove('userProfileContentEditAfter');
                const t5 = document.getElementById('edit5')
                t5!.contentEditable = 'false';
                t5!.classList.remove('userProfileContentEditAfter');
                const t6 = document.getElementById('edit6')
                t6!.contentEditable = 'false';
                t6!.classList.remove('userProfileContentEditAfter');

                setSrc2 (srcImg[0]);
                SetStatus(true);

                console.log("na false");
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

    const [src1, setSrc1] = useState(srcImg[0]);
    const [src2, setSrc2] = useState(srcImg[0]);
    const [closeImg1, setCloseImg1] = useState(srcClosingBtn[0]);
    const [status, SetStatus] = useState(true);
    const [status1, SetStatus1] = useState(true);

    //#endregion

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Wrapper>
            <TopButtons>
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
                    <p id="nameProfile" className="userProfileContentEdit">{usersList[0]?.name}</p>
                    <p id="companyName" className="userProfileContentEdit">{usersList[0]?.company.name}</p>
                    <p id="address" className="userProfileContentEdit">{usersList[0]?.address.city}</p>
                    <p id="username" className="userProfileContentEdit">{usersList[0]?.username}</p>
                    <p id="pencilId"><img id="editProfile" className="pencilHover" onClick={editValuesUser} src={src1} alt="Pen icon"/></p>
                    <p id="email" className="userProfileContentEdit">{usersList[0]?.email}</p>
                    <p id="phone" className="userProfileContentEdit">{usersList[0]?.phone}</p>
                </div>

            </UserProfileTop>
            <Expertise>
                <div id="topWithPencil" className="pencilHover">
                    <h1 id="expertiseTitle">Expertise</h1>
                    <p id="expertisePencil"><img id="editExpertise" className="pencilHover" onClick={editValuesProfile} src={src2} alt="Pen icon"/></p>
                    </div>

                <div className="boxDiv" id="expertise">
                    <p id="edit1">Mergers and acquisition</p>
                    <p id="edit2">Mergers and acquisition</p>
                </div>

                <h1>Specialties</h1>
                <div className="boxDiv" id="specialties">
                    <p id="edit3">Cross border operation</p>
                    <p id="edit4">Transaction over 500M$/$</p>
                </div>

                <h1>Admission to practice law</h1>
                <div className="boxDiv" id="admission">
                    <p id="edit5">Paris bar association</p>
                    <p id="edit6">Tunisian bar association</p>
                </div>

                <h1>Counties</h1>
                <div className="boxDiv" id="counties">
                    <p id="edit7">Tunisia</p>
                </div>
            </Expertise>
            <PanelInformation>
                <h1>Panel information</h1>

                <div className="infoDiv">
                    <h2>Hourly fee</h2>
                    <p id="edit8">610$/hour (Negociated)</p>
                </div>

                <div className="infoDiv">
                    <h2>Terms &amp; conditions</h2>
                    <p id="edit9">Monthly 10k$ retainer - see with {usersList[1]?.name}</p>

                    <div id="attachment">
                        <img src="./media/icons/ecosystem.png" alt="Attachment img"/>
                        attachment.jpg
                    </div>
                </div>

                <h1>Services &amp; projects</h1>

                <div className="infoDiv">
                    <p id="edit10">Corporate M&amp;A and international acquistions</p>
                </div>

                <h1>Internal correspondants</h1>

                <div className="infoDiv">
                    <div className="internalSingle">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div id="edit11" className="name"> Firstname Lastname</div>
                        <div className="message">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Message
                            </div>
                        <div id="edit12" className="profile">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Profile
                            </div>
                    </div>
                    <div className="internalSingle">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div id="edit13" className="name"> Firstname Lastname</div>
                        <div className="message">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Message
                            </div>
                        <div className="profile">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Profile
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
                        <p>Operation Ti...</p>
                    </div>

                    <div id="entity">
                        <p>Renault Co ...</p>
                    </div>

                    <div id="location">
                        <p>France</p>
                    </div>

                    <div id="expertise">
                        <p>#Tax</p>
                    </div>

                    <div id="date">
                        <p>20/01/2018</p>
                    </div>

                    <div id="firm">
                        <p>Racine</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Prometh...</p>
                    </div>

                    <div id="entity">
                        <p>Renault HQ</p>
                    </div>

                    <div id="location">
                        <p>USA</p>
                    </div>

                    <div id="expertise">
                        <p>#M&amp;A</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>Clifford chance</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Latandre</p>
                    </div>

                    <div id="entity">
                        <p>Renault Br ...</p>
                    </div>

                    <div id="location">
                        <p>Italia</p>
                    </div>

                    <div id="expertise">
                        <p>#Social</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>SVZ</p>
                    </div>
                </div>

                <p id="moreProposals">See more proposals</p>

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
                        <p>Operation Ti...</p>
                    </div>

                    <div id="entity">
                        <p>Renault Co ...</p>
                    </div>

                    <div id="location">
                        <p>France</p>
                    </div>

                    <div id="expertise">
                        <p>#Tax</p>
                    </div>

                    <div id="date">
                        <p>20/01/2018</p>
                    </div>

                    <div id="firm">
                        <p>Racine</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Prometh...</p>
                    </div>

                    <div id="entity">
                        <p>Renault HQ</p>
                    </div>

                    <div id="location">
                        <p>USA</p>
                    </div>

                    <div id="expertise">
                        <p>#M&amp;A</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>Clifford chance</p>
                    </div>
                </div>

                <div className="table">
                    <div id="name">
                        <p>Op. Latandre</p>
                    </div>

                    <div id="entity">
                        <p>Renault Br ...</p>
                    </div>

                    <div id="location">
                        <p>Italia</p>
                    </div>

                    <div id="expertise">
                        <p>#Social</p>
                    </div>

                    <div id="date">
                        <p>18/02/2019</p>
                    </div>

                    <div id="firm">
                        <p>SVZ</p>
                    </div>
                </div>

                <h1 id="moreReviews">See more Reviews</h1>


            </InternalReviews>
            <AmountOfFees>
                <h1>Amount of fees</h1>

                <div className="tableFees" id="titleRow">
                    <div id="year">
                        <p>Year</p>
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
                        <p>2019</p>
                    </div>

                    <div id="costCenter">
                        <p>CS 153</p>
                    </div>

                    <div id="totalAmount">
                        <p>3 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p>Clifford chance</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p>2018</p>
                    </div>

                    <div id="costCenter">
                        <p>CS 153</p>
                    </div>

                    <div id="totalAmount">
                        <p>9 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p>Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p>2017</p>
                    </div>

                    <div id="costCenter">
                        <p>CS 47</p>
                    </div>

                    <div id="totalAmount">
                        <p>10 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p>Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p></p>
                    </div>

                    <div id="costCenter">
                        <p>CS 153</p>
                    </div>

                    <div id="totalAmount">
                        <p>18 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p>Linklaters</p>
                    </div>
                </div>

                <div className="tableFees">
                    <div id="year">
                        <p></p>
                    </div>

                    <div id="costCenter">
                        <p>CS 32</p>
                    </div>

                    <div id="totalAmount">
                        <p>15 500$</p>
                    </div>

                    <div id="lawFirm">
                        <p>Linklaters</p>
                    </div>
                </div>


            </AmountOfFees>
        </Wrapper>
    );
};