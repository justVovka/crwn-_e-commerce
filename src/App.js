import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import CurrentUserContext from './contexts/current-user/context-user.context';

class App extends Component {
  unsubscribeFromAuth = null;

  state = {
    currentUser: null
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({currentUser: {
            id: snapshot.id,
              ...snapshot.data()
            }});
        });
      } else {
        setCurrentUser({ currentUser: userAuth });
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        {/* Provider - "поставщик" */}
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/sign-in'
            render={() => this.state.currentUser ?
              (<Redirect to='/' />) :
              (<SignInAndSignUpPage />)
            }
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
