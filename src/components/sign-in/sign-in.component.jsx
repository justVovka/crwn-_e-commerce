import { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = event => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);

  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { googleSignInStart } = this.props;

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
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn={true}>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
