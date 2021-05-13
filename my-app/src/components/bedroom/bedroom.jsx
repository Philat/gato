import React from "react";
import Layout from "../shared/layout";
import SignUp from "../../sign-up/sign-up";
import './bedroom.styles.scss'

const BedroomPage = () => {
    return (
        <Layout>
            <div className='bedroom'>
                <h1> Спальни</h1>

                <section className="hero is-large is-info  ">
                    <div className='hero-image bedroom-image'>
                        <div className="hero-body">

                        </div>
                    </div>
                </section>
            </div>


            <SignUp/>
        </Layout>
    );
}

export default BedroomPage;