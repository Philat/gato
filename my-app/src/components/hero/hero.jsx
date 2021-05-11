import React from "react";
import './hero.styles.scss';

const Hero = () => {
    return (
        <section className="hero is-large is-info hero-image">
            <div className='hero-image'>
                <div className="hero-body">
                    <div className='container'>
                        <h1 className="title">
                            Welcome to Gatto Grigio Maison
                        </h1>

                        <div className="shop-now-btn">
                            <button className='button is-black' id = 'to-bed-rooms'>
                                Rest in Bed Rooms
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Hero