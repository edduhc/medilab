import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import {BiAbacus} from "react-icons/bi"
import {AiOutlineBank, AiOutlineLogout, AiOutlinePlusCircle, AiOutlineUser, AiFillBell} from "react-icons/ai"
import {AiTwotoneCopy} from "react-icons/ai"
import { AiFillCalendar } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
const TopBar = () => {
    return ( 
        <Nav>

            <div className="search">
                <form action="">
                    <input className='input' type="text" placeholder='Search' />
                </form>
            </div>

            <div className="content">
                <div className="date">
                    <AiFillCalendar />
                    <span>Sept, 11, 2023</span>
                </div>
                <div className="icon">
                    <AiOutlineAppstore />
                    <span>/</span>
                    <AiFillBell />
                    <div className="image">
                        <AiOutlineUser />
                    </div>
                </div>
            </div>
        </Nav>
     );
}
 
export default TopBar;
const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    height: 50px;
    align-items: center;
    background-color: #212e2e;
    width: 75%;
    justify-content: space-between;
    .search{
       .input{
        border-radius: 25px;
        padding: 10px;
        border-color: transparent;
       } 
    }
    .content{
        display: flex;
        color: orange;
        justify-content: flex-end;
        margin-top: 5px;
        .date{
            background-color: grey;
            color: white;
            display: flex;
            align-items: center;
            span{
                color: #100553;
            }
            svg{
                margin-right: 8px;
                color: brown;
                font-size: 24px;
            }
        }
        .icon{
            display: flex;
            align-items: center;
            padding-left: 1rem;
            svg{
                color: brown;
                font-size: 24px;
            }
        }
    }
    .search{
        color: green;
    }
`