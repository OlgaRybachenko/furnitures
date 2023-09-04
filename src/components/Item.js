import React, { Component } from 'react';

export class Item extends Component{
  render() {
  return (
  <div className='item'>
    <img src={'./img/' + this.props.item.img} />
    <h2>{this.props.item.title}</h2>
    <p>{this.props.item.desc}</p>
    <b>{this.props.item.price} BY</b>
    <div className='add-to-cart'>+</div>      {/*добавление в корзину*/}
  </div>
  )
}

}

export default Item;