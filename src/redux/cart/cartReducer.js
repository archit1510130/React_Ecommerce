import addItemToCart  from './cart.utils';
const INITIAL_STATE={
    hidden:true,
    cartItmes:[]

}



const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden:!state.hidden
            }
        case "ADD_ITEMS":
            return {
                ...state,
                cartItmes:addItemToCart(state.cartItmes,action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;