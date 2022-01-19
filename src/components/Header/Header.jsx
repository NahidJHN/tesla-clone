/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const menuController = () => {
        setMenuOpen(!menuOpen)
    }



    return (
        <Container>
            <a href="#"> <img src="/images/logo.svg" alt="logo" /> </a>
            <Menu>
                <a href="#">model s</a>
                <a href="#">model 3</a>
                <a href="#">model x</a>
                <a href="#">model y</a>

            </Menu>
            <RightMenu>
                <a href="#">shop</a>
                <a href="#">tesla account</a>
                <CustomMenu onClick={menuController} />
            </RightMenu>
            <BurgerNav show={menuOpen}>
                <CustomClose onClick={menuController} />
                <li><a href="#">Existing Inevntory</a></li>
                <li><a href="#">Used inevntory</a></li>
                <li><a href="#">Trade In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadstar</a></li>
                <li><a href="#">Existing inevntory</a></li>
                <li><a href="#">Existing inevntory</a></li>
                <li><a href="#">Existing inevntory</a></li>


            </BurgerNav>


        </Container>
    );
};


const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex; 
    padding:0 20px;
    align-items:center;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
    z-index:1;
 `

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{ text-transform:uppercase;
        font-weight:600;
        padding:0 10px;
        flex-wrap:nowarp

    };


    @media(max-width:700px){
        display:none
    }

`

const RightMenu = styled.div`
display:flex;
align-items:center;
    a{
        text-transform:uppercase;
        font-weight:600;
        margin-right:10px;
        flex-wrap:nowarp
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;

`

const BurgerNav = styled.ul`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:10;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? "translateX(0%)" : "translateX(100%)"};
    transition:transform 0.3s ease-in;
    li{
        padding:15px 10px;
        border-bottom:1px solid rgba(0,0,0,.2);
        margin-top:2px;
        &:hover{
            background-color:rgba(0,0,0,.1);
        border-radius:0px 10px 10px 0px;

        };
        transition:0.5s;
    }

    a{
        font-weight:600
    }
    `

const CustomClose = styled(CloseIcon)`

border-radius:50%;
margin-left:auto;
cursor:pointer;

&:hover{
    background-color:rgba(0,0,0,0.1)
}

`
export default Header