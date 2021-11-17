import { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
  HeaderContainer, LogoContainer, OptionLink, OptionsContainer
} from './header.styles';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import CurrentUserContext from '../../contexts/current-user/context-user.context';

const Header = ({ hidden }) => {

  const currentUser = useContext(CurrentUserContext);

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
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null :
          <CartDropdownContainer />
      }
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
