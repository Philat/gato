import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Books from "../books/books";
import SignIn from "../sign-in/sign-in";
import {UserContext} from "../../context/user-context";
import './library.styles.scss'
import Layout from "../shared/layout";


const Library = () => {

    const {user} = useContext(UserContext);

    return (
        <Layout>
            <div className='library'>
            {
                !user &&
                <div>
                    <h2 className='disclaimer'>Услуги библиотеки доступны только зарегистрированным пользователям.<br/>
                        В библиотеке вы можете читать любимые книги мистера Грея <br/> в течение всего вашего пребывания</h2>
                    <SignIn/>
                </div>

            }
            {
                user && <div>
                    <h1>Вы в библиотеки</h1>
                    <Books></Books>
                </div>
            }
            </div>
        </Layout>
    );
}

export default Library