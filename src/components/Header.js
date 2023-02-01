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
import PokeLogo from '../app/assets/pokeball.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar
            dark
            sticky='top'
            expand='md'
            className='primary-blue'
        >
            <NavbarBrand className='navbar-brand' href='/'>
                <img
                    src={PokeLogo}
                    alt='Pokeball Logo'
                    className='site-logo'
                />
                <h1 className='mt-2'>PokéBuild</h1>
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