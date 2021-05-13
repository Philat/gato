import React from "react";
import Layout from "../shared/layout";
import SignUp from "../../sign-up/sign-up";
import './garden.styles.scss'

const GardenPage = () => {
    return (
        <>
            <Layout>
                <div className='garden'>
                    <h1> Сад для мероприятий </h1>

                    <section className="hero is-large is-info hero-image ">
                        <div className='hero-image garden-image'>
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

export default GardenPage;