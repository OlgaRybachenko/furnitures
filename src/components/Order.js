import React, { Component } from "react";
import { FaRegTrashCan } from 'react-icons/fa6'

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} 
        />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} BY</b>
        <FaRegTrashCan className='delete' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}
export default Order;