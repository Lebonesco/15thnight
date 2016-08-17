import React, { Component } from 'react';
import {render} from 'react-dom';
import TextInput from './TextInput';

function ErrorMessage (props) {
  return ( 
      <div className='form__error-wrapper js-form__err-animation'>
        <p className='form__error'>
          {props.error}
        </p>
      </div>

  )
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      useremail: "",
      error: false,
      errormessage: "test"
    };
  }

  _changeUsername(event) {
      this.setState({username: event});
  }

  _errorMessage(error){
    this.setState({errormessage: error});
  }

  _errorVisible(boolean){
    this.setState({error: boolean});
  }

  _changePassword(event) {
    this.setState({useremail: event});
  }

  _onSubmit(event) {
    console.log("_onSubmit")
    console.log(event)
    event.preventDefault()
    $.ajax({
      url: 'http://localhost:5000/login',
      dataType: 'json',
      type: 'POST',
      data: "beans",
      success: function(data) {
        console.log('posted to server!')
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  validateEmail(value) {
    if(value.length == 0) {
      return true;
    }
    //email validation
    return false;
  }

  commonValidate(value) {
    if(value.length == 0) {
      return true
    }
    return false
  }  

  render() {

    return (
      <div>
        <form className="form" onSubmit={this._onSubmit}>
          {this.state.error ? <ErrorMessage error={this.state.errormessage} /> : null}
          <div className="form__field-wrapper">
            <TextInput
              className=""
              uniqueName="email"
              text="Email Address"
              type="text"
              visible={this._errorVisible.bind(this)}
              setErrorMessage={this._errorMessage.bind(this)}
              required={true}
              minCharacters={3}
              validate={this.validateEmail.bind(this)}
              id="username"
              value="placeholder"
              placeholder='placeholder'
              errorMessage="Name is invalid"
              emptyMessage="Name is required"
              onChange={this._changeUsername}/>

            <label className="form__field-label" htmlFor="username">Username</label>
            <div className="form__field-wrapper">
              <TextInput
                text="Your Name"
                required={true}
                minCharacters={3}
                visible={this._errorVisible.bind(this)}
                setErrorMessage={this._errorMessage.bind(this)}
                validate={this.commonValidate.bind(this)}
                id="password"
                type="password"
                errorMessage="Password is invalid"
                emptyMessage="Password is required"
                onChange={this._changePassword}/>

              <label className="form__field-label" htmlFor="password">Password</label>

            </div>
            <div className="form__submit-btn-wrapper">
              <button className="form__submit-btn" type="submit" value="Post">
                {'Login'}
              </button>
            </div>

          </div>
            
        </form>
      </div>
    );
  }
}

export default LoginForm;