import { useContext } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartIconContainer, ItemCountWrapper, ShoppingIconSvg } from './cart-icon.styles';
import CartContext from '../../contexts/cart/cart.context';

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIconSvg onClick={toggleHidden} />
      <ItemCountWrapper>{itemCount}</ItemCountWrapper>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
