import {createContext, useEffect, useState} from 'react';

import {addItemToCart, filterItemFromCart, getCartCountItems, removeItem} from './cart.utils';

// По аналогии с redux
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItemFromCart: () => {},
  clearItemsFromCart: () => {},
  cartItemsCount: 0,
});

const CartProvider = ({ children }) => {

  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItemFromCart = item => setCartItems(removeItem(cartItems, item));
  const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));

  useEffect(
    () => setCartItemsCount(getCartCountItems(cartItems)),
    [cartItems]
  );

  return (
    <CartContext.Provider value={{
      hidden,
      cartItems,
      cartItemsCount,
      toggleHidden,
      addItem,
      removeItemFromCart,
      clearItemFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
