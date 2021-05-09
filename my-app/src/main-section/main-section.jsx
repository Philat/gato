import React from "react";
import {withRouter} from 'react-router-dom';
import './main-section.styles.scss'
import mainPic from "../../src/assets/bedroom.png";

const MainSection = ({history}) =>{
    return (
        <div className='main-section-container'>
            <div className='main-section-middle'>
                <div className='ms-image'>
                    <img src={mainPic} alt='main picture'/>
                </div>
                <div className='ms-m-description'>
                    <h2>Bedroom for your Rest. History for vacation</h2>
                <p>
                    In larger Victorian houses it was common to have accessible from the bedroom a boudoir for the lady of the house and a dressing room for the gentleman.
                    Attic bedrooms exist in some houses; since they are only separated from the outside air by the roof they are typically cold in winter and may be too hot in summer.
                </p>

            <button className='button is-black' id ='to-bed-room' onClick={()=>history.push('/bedroom/1')}>
                CAUSY ROOM
            </button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MainSection);