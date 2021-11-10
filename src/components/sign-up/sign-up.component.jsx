import { useState } from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password don\'t match');
      return;
    }
    signUpStart({ displayName, email, password });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          label='Display Name'
          required={true}
          name='displayName'
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          type='email'
          label='Email'
          required={true}
          name='email'
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type='password'
          label='Password'
          required={true}
          name='password'
          value={password}
          onChange={handleChange}
        />
        <FormInput
          type='password'
          label='Confirm Password'
          required={true}
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
