import React from 'react';
import styles from './navbar.module.css';

const Navbar = ({onClick}) => {
return (
	<div className={styles['nav']}>
		<h1 onClick={onClick}>RhodesSauna</h1>
	</div>
);
};

export default Navbar;
