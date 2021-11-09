import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
  HeaderContainer, LogoContainer, OptionLink, OptionsContainer
} from './header.styles';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import { signOUtStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser ?
          <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink> :
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOUtStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
