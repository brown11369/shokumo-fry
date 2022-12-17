import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
// import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";


import Menu from "../components/Menu";
import Footer from "../components/Footer";

export const CartContext = createContext();


const initialState = {
  item: [],
  totalAmount: 0,
  totalItem: 0,
};


const Cart = () => {

  // const [cartlist, setCartlist] = useState(null)



  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);


  // to delete the indv. elements from an Item Cart
  const addItem = (data) => {
    return dispatch({
      type: "ADD_ITEM",
      payload: data,
    });
  };


  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <>
    <Menu />
    <CartContext.Provider
      value={{ ...state,addItem, removeItem, clearCart, increment, decrement }}>
      <ContextCart />
    </CartContext.Provider>
    <Footer />
    </>
    

  );
};

export default Cart;
