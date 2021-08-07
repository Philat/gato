import React from "react";
import Layout from "./shared/layout";
import Hero from "./hero/hero";
import MainSection from "../main-section/main-section";
import './home-page.styles.scss'
import FeaturedCollection from "./featured-collection/featured-collection";



const HomePage = () => {
    return (
        <>
        <Layout>
                <Hero/>
                <MainSection/>
                <FeaturedCollection/>
            </Layout>
        </>
    );
}

export default HomePage;