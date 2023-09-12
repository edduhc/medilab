import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import {BiAbacus} from "react-icons/bi"
import {AiOutlineBank, AiOutlineLogout, AiOutlinePlusCircle, AiOutlineUser} from "react-icons/ai"
import {AiTwotoneCopy} from "react-icons/ai"
//Hooks


//style
const Section = styled.section`
    background-color: aqua;
    display: flex;
    position: fixed;
    overflow: auto;
    flex-direction: column;
    width: 25%;
    left: 0;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 10px;
    .top{
        display: flex;
        flex-direction: column;
        width: 100%;
        .brand{
            width: 100%;
            display: flex;
            justify-content: center;
            color: white;
            font-weight: bold;
            align-items: center;
            span{
                font-size: 1.5rem;
                color: white;
                font-weight: bold;
            }//end span
            svg{
                color: aliceblue;
                font-size: 1.5rem;
                margin-right: 2px;
            }
        }//end brand

        .links{
            display: flex;
            flex-direction: column;
            ul{
                list-style-type: none;
                padding: 1rem;
                li{
                    padding: 1rem;
                    border-radius: 0.5%;
                    text-align: left;
                    &:hover{
                        background-color: black;
                        a{
                            color: white;
                            text-decoration: none;
                        }
                    }//end hoover
                    a{
                        color: #3498db;
                        text-decoration: none;
                        svg{
                            fill: #f76c8a;
                            font-size: 1.5rem;
                            margin-right: 10px;
                        }
                    }

                }//end li

            }//end ul

        }//end links

    }//end top

    .bottom{
        width: 90%;
        display: flex;
        flex-direction: column;
        background-color: #f76c8a;
        align-items: center;
        border-radius: 10px;
        svg{
            fill: #fafcfd;
            font-size: 3rem;
        }
        span{
            color: white;
        }

    }//end bottom

    .logout{
        /* display: flex; */
        background-color: grey;
        padding: 5px; width: 6rem; display: inline;
        margin-top: 10px; margin-bottom: 10px;
        a{
            text-decoration: none;
        }
    }
`
//Style end here
const SideBar = () => {
    const [currentLink, setCurrentLink] = useState(1)
    return ( 
        <Section>
            <div className="top">
                <div className="brand">
                    <AiOutlineBank />
                    <span>MEDILAB</span>
                </div>

                <div className="links">
                    <ul>
                        <li>
                            <a href=""><AiOutlinePlusCircle/>Dashboard</a>
                        </li>
                        <li>
                            <a href=""><AiOutlineUser/>My Profile</a>
                        </li>
                        <li>
                            <a href=""><AiTwotoneCopy/>Add Tests</a>
                        </li>
                        <li>
                            <a href=""><BiAbacus/>Lab Tests</a>
                        </li>
                        <li>
                            <a href=""><AiOutlinePlusCircle/>My Bookings</a>
                        </li>
                        <li>
                            <a href=""><BiAbacus/>Add Nurses</a>
                        </li>
                        <li>
                            <a href=""><AiOutlineUser/>Nurses</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End Top div */}
            <div className="bottom">
                <AiOutlinePlusCircle />
                <span>Unlock for more features. <button>Go Pro</button></span> <br />
                <br />
                <span><strong>Upgrade Now</strong></span>
            </div>

            <div className="logout">
                <a href=""> <AiOutlineLogout/></a>
            </div>
        </Section>
     );
}
 
export default SideBar;