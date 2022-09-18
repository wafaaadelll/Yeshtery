import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "./Types";

const CartReducer = (state, action) => {
  console.log(state,"sta");
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      let exist = [...state.cartItems].find((item)=>item._id === action.payload._id)
      // console.log(exist,"e");
      if(exist){
        // console.log("exist");
        return{
          ...state,
          cartItems:state.cartItems.map(item=>item._id ===action.payload._id ? {
            ...item,
            qty:item.qty+1,
          }:item),
          totalPrice : state.totalPrice + action.payload.price,
        }
      }
      // console.log("not exist");
      return{
        ...state,
        cartItems:[...state.cartItems,action.payload],
        totalPrice : state.totalPrice + action.payload.price
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload
        ),
        totalPrice : state.totalPrice - action.payload.price,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
