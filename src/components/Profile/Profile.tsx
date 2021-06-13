import {FC,useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors';

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
    margin:10px 40px 0 0;
    background: ${Colors.white};

    .table{
        display: grid;
        grid-template-columns: 16% 16% 16% 16% 16% 16%;
        margin-top:10px;

        #name{
            grid-column: 1;
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
`;

const TopButtons = styled.div`
    width:100%;
    display: flex;
    justify-content: right;

    .buttonTop{
        margin-left: 30px;
        cursor:pointer;
        align-items: center;

        img {
        width: 20px;

        .text {
            border:2px solid red;
        }
    }}
`;

const UserProfileTop = styled.div`
    display:grid;
    align-items: end;
    margin:30px 0;
    grid-template-columns: 20% 40% 40%;

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

    .middle{
        grid-column: 2;
        line-height: 20px;
    }

    .right{
        text-align: right;
        grid-column: 3;
        line-height: 20px;

        p{
            text-align: left;
        }
        

    }
`;

const Expertise = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    h1{
        margin:10px 0;
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
    
    h1{
        margin:20px 0;
        font-weight: bold;
    }

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
                
                img{
                    width:20px;
                }
            }

            .profile{
                grid-column: 4;

                img{
                    width:20px;
                }
            }


        }
    }

`;

const Proposals = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    h1{
        margin:20px 0;
        font-weight: bold;
    }

    #titleRow{
        font-weight: bold;
        border-bottom: 1px solid ${Colors.lightgray};
        padding-bottom: 10px;
    }

    

    #moreProposals{
        margin-top:20px;
        padding-bottom: 20px;
        text-align: right;
        color:${Colors.lightgrayOriginal}
    }

`;

const InternalReviews = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    h1{
        margin:20px 0;
        font-weight: bold;
    }

`;

const AmountOfFees = styled.div`
    border-top: 1px solid ${Colors.lightgray};

    h1{
        margin:20px 0;
        font-weight: bold;
    }

`;
//#endregion
export const Profile: FC = () => {

    const { usersList, usersPhoto } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Wrapper>
            <TopButtons>
                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Message</span>
                    </span>

                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Create a request</span>
                    </span>

                    <span className="buttonTop">
                        <img src="./media/icons/ecosystem.png" alt="Message img"/>
                        <span className="text">Add to a cluster</span>
                    </span>

                    <span className="buttonTop">
                        X
                    </span>

            </TopButtons>
            <UserProfileTop>
                <div className="left">
                    <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                    <p>See profile</p>
                </div>

                <div className="middle">
                    <p>{usersList[0]?.name}</p> 
                    <p>{usersList[0]?.company.name}</p>
                    <p>{usersList[0]?.address.city}</p>
                </div>

                <div className="right">
                    <img className="imgs" src="./media/icons/ecosystem.png" alt="Pen icon"/>
                    <p>{usersList[0]?.email}</p>
                    <p>{usersList[0]?.phone}</p>
                </div>

            </UserProfileTop>
            <Expertise>
                <h1>Expertise</h1>

                <div className="boxDiv" id="expertise">
                    <p>Mergers and acquisition</p>
                    <p>Mergers and acquisition</p>
                </div>

                <h1>Specialties</h1>
                <div className="boxDiv" id="specialties">
                    <p>Cross border operation</p>
                    <p>Transaction over 500M$/$</p>
                </div>

                <h1>Admission to practice law</h1>
                <div className="boxDiv" id="admission">
                    <p>Paris bar association</p>
                    <p>Tunisian bar association</p>
                </div>

                <h1>Counties</h1>
                <div className="boxDiv" id="counties">
                    <p>Tunisia</p>
                </div>
            </Expertise>
            <PanelInformation>
                <h1>Panel information</h1>
                
                <div className="infoDiv">
                    <h2>Hourly fee</h2>
                    <p>610$/hour (Negociated)</p>
                </div>

                <div className="infoDiv">
                    <h2>Terms &amp; conditions</h2>
                    <p>Monthly 10k$ retainer - see with {usersList[1]?.name}</p>

                    <div id="attachment"> 
                        <img src="./media/icons/ecosystem.png" alt="Attachment img"/>
                        attachment.jpg
                    </div>
                </div>
                
                <h1>Services &amp; projects</h1>

                <div className="infoDiv">
                    <p>Corporate M&amp;A and international acquistions</p>
                </div>
                
                <h1>Internal correspondants</h1>

                <div className="infoDiv">
                    <div className="internalSingle">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div className="name"> Firstname Lastname</div>
                        <div className="message">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Message
                            </div>
                        <div className="profile">
                            <img src="./media/icons/ecosystem.png" alt="Message icon"/>
                            Profile
                            </div>
                    </div>
                    <div className="internalSingle">
                        <img id="foto" src={usersPhoto[0]?.url} alt="User portrair"/>
                        <div className="name"> Firstname Lastname</div>
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
            </AmountOfFees>
        </Wrapper>
    );
};