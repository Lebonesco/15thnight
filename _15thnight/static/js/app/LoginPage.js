import React, { Component } from 'react';
import {render} from 'react-dom';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  render () {

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Login Form</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage;