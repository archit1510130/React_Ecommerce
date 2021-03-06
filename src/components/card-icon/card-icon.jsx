import React from 'react';
import { connect } from 'react-redux';
import cartActions, { toggleCart } from '../../redux/cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './card-icon.scss';

const CartIcon = ({toggleCart}) => (
  <div className='cart-icon' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps=dispatch=>(
    {
    toggleCart:()=>dispatch(toggleCart())
    })
export default connect(null,mapDispatchToProps)(CartIcon)