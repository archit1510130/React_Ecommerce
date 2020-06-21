import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.scss'

import {connect} from 'react-redux';
import CartItem from  '../cart-item/cart-item.component';

const CartDropdown = ({cartItmes}) => {
    return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItmes.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>)
};
  
  const mapStateToProps = (state) => ({
    cartItmes:state.cart.cartItmes
  });
  
  export default connect(mapStateToProps)(CartDropdown);