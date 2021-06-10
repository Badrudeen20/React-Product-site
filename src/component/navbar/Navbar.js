import React, { useState } from 'react'

import {Nav, 
    NavIcon, 
    NavLogo,
    NavContainer,
     MovieIcon, 
     Navmenu, 
     NavItem,
     NavLink, 
     Btn} from './Navbar.element'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [click,setclick] = useState(false)
    const handleClick = ()=>setclick(!click)
    return (
        <>
            <Nav>
               <NavContainer>
                   <NavLogo to="/">
                     <NavIcon />
                     Logo
                   </NavLogo>
                   <MovieIcon onClick={handleClick}>
                   {click ? <FaTimes /> : <FaBars />}
                   </MovieIcon>
                   <Navmenu  click={click} onClick={handleClick}>
                     <NavItem>
                         <NavLink to="/">
                             Home
                         </NavLink>
                     </NavItem>


                     <NavItem>
                         <NavLink to="/">
                             Product
                         </NavLink>
                     </NavItem>



                     <NavItem>
                         <NavLink to="/">
                             Service
                         </NavLink>
                     </NavItem>

                     <NavItem>
                         <NavLink to="/">
                             <Btn>Sign Up</Btn>
                         </NavLink>
                     </NavItem>
                   </Navmenu>
               </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
/*
 <NavContainer>
                  <NavLogo to={'/'}>
                      <NavIcon />
                      Ultar
                  </NavLogo>

                   <MovieIcon onClick={handleClick}>
                       {click ? <FaTimes /> : <FaBars />}
                   </MovieIcon>
                     <Navmenu click={click}>
                     <NavItem>
                         <NavLink to={'/'}>Home</NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink to={'/About'}>About</NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink to={'/Contact'}>Contact</NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink to={'/Product'}>Product</NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink to={'/sign'}>
                             <Btn>Sign Up</Btn>
                         </NavLink>
                     </NavItem>
                 </Navmenu>
                 
                   
                </NavContainer>

*/