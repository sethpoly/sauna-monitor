import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to='/' activeStyle>
			RhodesSauna
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
