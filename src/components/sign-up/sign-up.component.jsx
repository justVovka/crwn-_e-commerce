import { Component } from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {

  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password don\'t match');
      return;
    }
    signUpStart({ displayName, email, password });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='Display Name'
            required={true}
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
          />
          <FormInput
            type='email'
            label='Email'
            required={true}
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            label='Password'
            required={true}
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            label='Confirm Password'
            required={true}
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
