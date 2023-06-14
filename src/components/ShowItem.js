import React, { Component } from 'react'
import { BsCartPlus } from "react-icons/bs";

export class ShowItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
        <img src={'./img/' + this.props.item.img} alt='item' onClick={() => this.props.onShowItem(this.props.item)}/>
      <h2>{this.props.item.title}</h2>
      <p>{this.props.item.desc}</p>
      <b>{this.props.item.price}$</b>
       <BsCartPlus className='plusFill' onClick={() => this.props.AddItem(this.props.item)}/>
       </div>
       </div>
    )
  }
}

export default ShowItem