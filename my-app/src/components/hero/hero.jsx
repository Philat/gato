import React from "react";
import './hero.styles.scss';

const Hero = () => {
    return (
        <section className="hero is-large is-info hero-image">
            <div className='hero-image main-picture'>
                <div className="hero-body">
                    <div className='container'>
                        <h1 className="title">
                            Добро пожаловать в Gatto Grigio
                        </h1>

                        <div className="shop-now-btn">
                            <button className='button is-black' id = 'to-bed-rooms'>
                                Выбрать комнату
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Hero