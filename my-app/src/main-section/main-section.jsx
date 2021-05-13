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
                    <h2>Спальня для отдыха. История для отпуска</h2>
                <p>
                    В наших спальнях - обычное дело иметь доступ из спальни в будуар и гардеробную.
                    В некоторых комнатах есть мансардные спальни с системой кондиционирования; поскольку они отделены от наружного воздуха, в них обычно тепло зимой и прохладно летом.
                </p>

            <button className='button is-black' id ='to-bed-room' onClick={()=>history.push('/bedroom/1')}>
                СДЕЛАТЬ БРОНИРОВАНИЕ
            </button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MainSection);