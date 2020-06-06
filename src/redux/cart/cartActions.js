export const toggleCart=()=>({
    type:'TOGGLE_CART_HIDDEN'
})

export const addItems=(item)=>({
    type:"ADD_ITEMS",
    payload:item
})

export default toggleCart;