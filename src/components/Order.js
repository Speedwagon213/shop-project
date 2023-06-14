import React, { Component } from 'react'
import { FaTrash} from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className='order'>
        <img src={'./img/' + this.props.order.img} alt='item'/>
        <h3>{this.props.order.title}</h3>
        <b>{this.props.order.price}$</b>
        <FaTrash className='delete-icon' onClick={() => this.props.DeleteItem(this.props.order.id)}/>
        </div>
    )
  }
}

export default Order