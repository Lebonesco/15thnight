import React, { Component } from 'react';
import {render} from 'react-dom';
import JQuery from 'jquery';

var TextInput = React.createClass({
  getInitialState: function(){
    return {
      isEmpty: true,
      value: "",
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false
    };
  },

  handleChange: function(event) {
 
    this.validation(event.target.value);
    this.setState({value: event.target.value});

    if(this.props.onChange) {
      this.props.onChange(event);
    }
  },

  validation: function(value, valid) {
    
    if(typeof valid === 'undefined') {
      valid = true;
    }
    console.log(valid)
    var message = "";
    var errorVisible = false;

    if(!valid) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if (this.props.required && JQuery.isEmptyObject(value)) {
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    }
    else if (value.length < this.props.minCharacters) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }

    this.setState({
      value: value,
      isEmpty: JQuery.isEmptyObject(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });


  },

  handleBlur: function(event) {
    var valid = this.props.validate(event.target.value); //check validation function for boolean

    this.validation(event.target.value, valid);
    this.props.setErrorMessage(this.state.errorMessage); //set error message
    this.props.visible(this.state.errorVisible); //set error message visibility

  },

  render: function(){
    return (
    <div className={this.props.uniqueName}>
      <input
        placeholder={this.props.text}
        className="form__field-input"
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={this.state.value} />
    </div>
    )
  }
});

export default TextInput;