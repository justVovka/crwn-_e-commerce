import { useContext, useState } from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import {
  HeaderContainer, LogoContainer, OptionLink, OptionsContainer
} from './header.styles';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import CurrentUserContext from '../../contexts/current-user/context-user.context';
import CartContext from '../../contexts/cart/cart.context';


const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {
          currentUser ?
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
            <OptionLink to='/sign-in'>SIGN IN</OptionLink>
        }
        {/* Помещаем в контекст то, что я определил внутри компонента */}
        <CartContext.Provider value={{
          hidden,
          toggleHidden
        }}>
          <CartIcon />
        </CartContext.Provider>
      </OptionsContainer>
      {
        hidden ? null :
          <CartDropdownContainer />
      }
    </HeaderContainer>
  );
};

export default Header;
