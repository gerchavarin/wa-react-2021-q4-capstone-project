import React from 'react'
import logoFile from '../../assets/logo.png'
import ShoppingCart from '../Icons/ShoppingCart'
import Logo from '../Logo'
import Search from '../Search'

import "./Header.scss";

const Header = () => {
    return (
        <header>
            <div className="header">
                <Logo src={logoFile} height='56' alt="Logo" />
                <Search />
                <ShoppingCart />
            </div>
        </header>
    );
}

export default Header