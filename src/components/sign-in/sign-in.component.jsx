import {Component} from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required={true}
            label='Email'
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            required={true}
            label='Password'
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn={true}>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
