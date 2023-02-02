import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../app/assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar
            dark
            sticky='top'
            expand='md'
            className='pt-0 pb-0'
        >
            <NavbarBrand className='navbar-brand' href='/'>
                <img
                    src={Logo}
                    alt='Pokeball Logo'
                    className='site-logo'
                />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink 
                            className='nav-link' 
                            to='/'
                        >
                            Pokédex
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            className='nav-link' 
                            to='/teams'
                        >
                            My Teams
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;