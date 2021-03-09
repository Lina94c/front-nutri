import styled from 'styled-components';
import{ Link as LinkR } from 'react-router-dom';
import{ Link as LinkS } from 'react-scroll';
import logo from "../images/NutriSmart.png";

//Tamaño del Navbar
const Nav = styled.nav`
    background: rgb(211,232,186);
    height: 80px;
    ${'' /* margin-top: -80px;  */}
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24 px;
    max-width: 1100px; 
`;

//Logo interactivo, se hace click y vuelves al home. La R es de React Router Link
const NavLogo = styled(LinkR)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    font-family:'Montez', cursive;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;
//Menu hamburguesa, acá debe estar el problema / pero el menu en responsive se ve bien
const MobileIcon = styled.div`
    display: none;
@media screen and (max-width: 768px) {
    display: block; /*es none????*/
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1 rem;
    cursor: pointer;
    color: #fff;
}
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavItem = styled.li`
    height: 80px;
`;

const NavLinks = styled(LinkR)`
    color:black;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
      
 /* Highlight links in yellow*/
    &.active {
        border-bottom: 3px solid #fffe11b;
        
    }
`;

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display:none;
    }
`;

const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #c6aa8e;
    white-space: nowrap;
    padding: 10px 22px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 12px;
    outline:none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    `;

    const Navbar = ( { toggle,user,logout } ) => {    
        return (
           <>
               <Nav>
                   <NavbarContainer>
                       <NavLogo to='/'>NutriSmart</NavLogo> 
                        <MobileIcon onClick={toggle}>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Nosotros</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Planes</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Alimentos</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/signup"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Registrate</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/"
                                onClick={logout}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Salir</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                          <NavBtnLink to="/login">Ingresar</NavBtnLink>  
                        </NavBtn>
                    </NavbarContainer>
               </Nav> 
           </>
        );
    };
    
    export default Navbar;