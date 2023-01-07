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
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='d-flex align-items-center' href='/'>
                <img src={PokeLogo} alt='pokeball logo' className='site-logo float-start ms-3'/>
                <h1 className='mt-2'>PokéBuild</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Builder
                        </NavLink>
                        <NavLink className='nav-link' to='/teams'>
                            Teams
                        </NavLink>
                        <NavLink className='nav-link' to='/vote'>
                            Vote
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;