import { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';
import { CartContext } from '../../providers/cart/cart.provider';

const CartDropdown = ({ history, dispatch }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ?
            cartItems.map(item => <CartItem key={item.id} item={item} />) :
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleHidden());
      }}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
