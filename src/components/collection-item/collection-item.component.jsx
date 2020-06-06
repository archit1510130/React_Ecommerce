import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import {addItems} from '../../redux/cart/cartActions';

const CollectionItem = ({ item,addItem }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{item.name}</span>
      <span className='price'>{item.price}</span>
    </div>
    <CustomButton onClick={()=>addItem(item)}>ADD TO CART</CustomButton>


  </div>
);

const mapDispatchToProps=(dispatch)=>({

  addItem:item=>dispatch(addItems(item))

}

)

export default connect(null,mapDispatchToProps)(CollectionItem);
