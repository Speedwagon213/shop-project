import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let Summa = 0;
  props.orders.forEach((el) => {
    Summa += Number.parseFloat(el.price)
  });
  return(
    <div>
      {props.orders.map((el) =>
      (<Order order = {el} key= {el.id} DeleteItem={props.DeleteItem}/>)
      )}
      <p className='Summa'>Сумма: {new Intl.NumberFormat().format(Summa)}$</p>
      </div>
  )
}
const showNothing = () => {
       return(
        <div className='emptyOrders'>
          <h3>Корзина пока что пуста</h3>
        </div>
       )
}

export default function Header(props) {
  let [OpenCart, setOpenCart] = useState(false);
  return (
    <header>
    <div className='head'>
      
        <span className='logo'> House Staff</span>
        
        <ul className='nav'>
                 <li><FaShoppingCart  onClick={() => setOpenCart(OpenCart = !OpenCart)} 
                 className={`shoppingCart ${OpenCart && 'active'}`}/></li>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                
        </ul>
        
        
        {OpenCart && (
          <div className='shoppingCart-open'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
        
    </div>
    <div className='presentation'>
      <div> Лучшие мебли </div>
      <div> для вашего дома </div>
       <div className='presentation_price'> Низкие цены </div>
       </div>
    </header>
  )
}
