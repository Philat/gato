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
        <nav className='nav-menu container' >
            <div className='logo'>
                <Link to='/'>Gatto Grigio</Link>
            </div>

            <ul id='header'>
                <li><Link to='/'>Гостиная</Link></li>
                <li><Link to='/kitchen'>Кухня</Link></li>
                <li><Link to='/library'>Библиотека</Link></li>
                <li><Link to='/garden'>Сад</Link></li>
                <li><Link to='/bedroom'>Спальни</Link></li>
                <li><Link to='/cabinet'>Кабинет</Link></li>

                {!user && <li><Link to='/sign-in'>Вход</Link></li>}
                {user && <li onClick={()=>auth.signOut()}><Link>Выход</Link></li>}
                {!user && <li><Link to='/sign-up'>Регистрация</Link></li>}

            </ul>
            <CartIcon/>
        </nav>
    );
}

export default Header