import {Component} from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

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
        <h2>I already have an account</h2>
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
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
