import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import {auth} from "../../firebase";
import {UserContext} from "../../context/user-context";
import './header.styles.scss';

const Header = () => {
    const {user} = useContext(UserContext);

    try{
        window.dataLayer.push({'event':'loginUser', 'user_id': user['id']})
        }catch(e){
    }


    return (
        <nav className='nav-menu container' >
            <div className='logo'>
                <a href='/'>Gatto Grigio</a>
            </div>

            <ul id='header'>
                <li><a href='/'>Гостиная</a></li>
                <li><a href='/kitchen'>Кухня</a></li>
                <li><a href='/library'>Библиотека</a></li>
                <li><a href='/garden'>Сад</a></li>
                <li><a href='/bedroom'>Спальни</a></li>
                <li><a href='/cabinet'>Кабинет</a></li>

                {!user && <li><a href='/sign-in'>Вход</a></li>}
                {user && <li onClick={()=>auth.signOut()}><a>Выход</a></li>}
                {!user && <li><a href='/sign-up'>Регистрация</a></li>}

            </ul>
            <CartIcon/>
        </nav>
    );
}

export default Header