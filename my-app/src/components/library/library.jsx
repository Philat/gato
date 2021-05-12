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
                    <h2 className='disclaimer'>The following services will be available only for registered users.<br/>
                        At the library, you can reserve materials you wish to read on your next visit.</h2>
                    <SignIn/>
                </div>

            }
            {
                user && <div>
                    <h1>You are in library</h1>
                    <Books></Books>
                </div>
            }
            </div>
        </Layout>
    );
}

export default Library