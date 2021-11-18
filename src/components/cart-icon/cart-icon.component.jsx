import { useContext } from 'react';

import { CartIconContainer, ItemCountWrapper, ShoppingIconSvg } from './cart-icon.styles';
import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon = () => {
  const { toggleHidden, cartItems } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIconSvg onClick={toggleHidden} />
      <ItemCountWrapper>{cartItems.length}</ItemCountWrapper>
    </CartIconContainer>
  );
};

export default CartIcon;
