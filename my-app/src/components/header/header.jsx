import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import {auth} from "../../firebase";
import {UserContext} from "../../context/user-context";
import './header.styles.scss';

const Header = () => {

    const {user} = useContext(UserContext);
    console.log('user', user);

    return (
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'>Gatto Grigio</Link>
            </div>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/kitchen'>Kitchen</Link></li>
                <li><Link to='/library'>Library</Link></li>
                {
                    !user && <li><Link to='/sign-in'>Sign In</Link></li>
                }
                {
                    user && <li onClick={()=>auth.signOut()}><Link>Sign Out</Link></li>
                }
                {
                    !user && <li><Link to='/sign-up'>Sign Up</Link></li>
                }
            </ul>
            <CartIcon/>
        </nav>
    );
}

export default Header