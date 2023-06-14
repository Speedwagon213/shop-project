import React, { Component } from 'react'
import { BsCartPlus } from "react-icons/bs";

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt='item' onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
         <BsCartPlus className='plusFill' onClick={() => this.props.AddItem(this.props.item)}/>
      </div>
    )
  }
}

export default Item