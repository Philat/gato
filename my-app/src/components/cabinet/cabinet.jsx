import React from "react";
import Layout from "../shared/layout";
import SignUp from "../../sign-up/sign-up";
import './cabinet.styles.scss'

const CabinetPage = () => {
    return (
        <>
            <Layout>
                <div className='cabinet'>
                <h1> Кабинет Мистера Грея </h1>

                <section className="hero is-large is-info hero-image ">
                    <div className='hero-image cabinet-image'>
                        <div className="hero-body">

                        </div>
                    </div>
                </section>
                </div>


                <SignUp/>
            </Layout>
        </>
    );
}

export default CabinetPage;