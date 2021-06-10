import styled from 'styled-components'
import {FaMagento} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Container} from '../../globalcss'

export const Nav = styled.nav`
 background:#101522;
 height:60px;
 display:flex;
 justify-content:center;
 align-items:center;
 font-size:1.2rem;
 position:sticky;
 top:0;
 z-index:999;
 color:#ECF0F1;
`


export const NavContainer = styled(Container)`
  
   display: flex;
   justify-content: space-between;
   height: 60px;
   ${Container}
   @media screen and (min-width:800px){
       padding-left: 50px;
    }
`


export const NavLogo = styled(Link)`
    color:#ECF0F1;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    text-transform: uppercase;
    font-size: 2rem;
    align-items: center;
`

export const NavIcon = styled(FaMagento)`
   margin-left: 0rem;
`

//navmenu

export const MovieIcon = styled.div`
  display: none;

  @media screen and (max-width:900px){
       display: block;
       position: absolute;
       top:0;
       right: 0;
       transform: translate(-100%,60%);
       font-size: 1.5rem;
       cursor: pointer;
    }
  
`



export const Navmenu =styled.ul`
 display: flex;
 margin-left: 20px;
 width: 60%;
 position: absolute;
 right: 0;
 top:0;
  @media screen and (max-width:800px){
   display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 280px;
  background: #2e4053;
  position: absolute;
  padding-top: 100px;
  margin-left: 0;
  left: ${props => (props.click ? 0:'-280px')};
 }
`
export const NavItem = styled.li`
position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 25px;
  padding-top: 18px;
  padding-bottom: 18px;

  &:not(:last-child):hover{
     background-color: #fff;
  }
  &:hover >a{
    color: #000;
  }


  @media screen and (min-width:800px){
    font-size: 20px;
    
 }
`

export const NavLink =styled(Link)`
  text-decoration: none;
  color: #fff;
`

export const Btn = styled.button`
position: absolute;
top: 50%;
left: 50;
transform: translate(-50%,-50%);
 width: 60%;
 height: 44px;
 background-color: #0e78e8;
 text-align:center;
font-weight:700;
border-radius: 5px;
border:none;
color: #fff;
font-size: 18px;
margin-top: 10px;
cursor: pointer;

@media screen and (min-width:800px){
   margin-top: 0px
    
 }
`

