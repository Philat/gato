import React from "react";
import {withRouter} from 'react-router-dom';

const Total = ({itemCount, total, history, clearCart}) =>{
    return (
      <div className='total-container'>
          <div className='total'>
              <p>Количество: {itemCount}</p>
              <p>{`Итого: ${total}`}</p>
          </div>
          <div className='checkout'>
              <button className='button is-black'
                      onClick={()=>history.push('/checkout')}>
                  ОФОРМИТЬ</button>
              <button className='button is-white'
              onClick={()=>clearCart()}>ОЧИСТИТЬ</button>
          </div>
      </div>
    );
}
export default withRouter(Total);