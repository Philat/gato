import React from "react";
import {Link} from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import './header.styles.scss';

const Header = () => {
    return (
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'>Gato Grigio</Link>
            </div>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/kitchen'>Kitchen</Link></li>
                <li><Link to='/library'>Library</Link></li>
            </ul>
            <CartIcon/>
        </nav>
    );
}

export default Header