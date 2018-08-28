import React, { Component } from 'react';

import ProgressBar from './ProgressBar';
import styles from './RegistrationForm.css';

class RegistrationForm extends Component {
  static salaries = [
    '0 - 1000',
    '1000 - 2000',
    '2000 - 3000',
    '3000 - 4000',
    'more than 4000'
  ];

  state = {
    step: 0,
    name: '',
    email: '',
    phone: '',
    salary: ''
  };

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  nextStep(e) {
    e.preventDefault();
    this.setState({
      step: this.state.step + 1
    });
  }

  render() {
    return (
      <form className="RegistrationForm">
        <ProgressBar level={this.state.step} />
        {this.state.step === 0 && (
          <div className="RegistrationForm__group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
        )}
        {this.state.step === 1 && (
          <div className="RegistrationForm__group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
        )}
        {this.state.step === 2 && (
          <div className="RegistrationForm__group">
            <label>Phone number</label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
        )}
        {this.state.step === 3 && (
          <div className="RegistrationForm__group">
            <label>Salary</label>
            <div className="RegistrationForm__radio-container">
              {RegistrationForm.salaries.map((el, index) => (
                <label className="RegistrationForm__radio" key={index}>
                  <input
                    type="radio"
                    name="salary"
                    value={index}
                    onChange={e => this.handleInputChange(e)}
                  />
                  {el}
                </label>
              ))}
            </div>
          </div>
        )}
        {this.state.step === 4 && (
          <div>
            <p>You have successfully registered!</p>
            <div className="RegistrationForm__group">
              <label>Full name</label>
              <span>{this.state.name}</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Email</label>
              <span>{this.state.email}</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Phone</label>
              <span>{this.state.phone}</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Salary</label>
              <span>{RegistrationForm.salaries[this.state.salary]}</span>
            </div>
          </div>
        )}
        {this.state.step < 4 && (
          <div className="RegistrationForm__group RegistrationForm__group--align-right">
            <button type="submit" onClick={e => this.nextStep(e)}>
              Next
            </button>
          </div>
        )}
      </form>
    );
  }
}

export default RegistrationForm;
