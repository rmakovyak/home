import React, { Component } from 'react';
import validate from 'validate.js';

import ProgressBar from './ProgressBar';
import styles from './RegistrationForm.css';

class RegistrationForm extends Component {
  salaries = [
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
    salary: false,
    errors: {}
  };

  constraints = [
    {
      name: {
        presence: { allowEmpty: false }
      }
    },
    {
      email: {
        presence: true,
        email: true
      }
    },
    {
      phone: {
        presence: { allowEmpty: false }
      }
    },
    {
      salary: {
        presence: { allowEmpty: false }
      }
    }
  ];

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  nextStep(e) {
    e.preventDefault();
    let errors = validate(this.state, this.constraints[this.state.step]);

    if (!errors) {
      this.setState({
        step: this.state.step + 1,
        errors: {}
      });
    } else {
      this.setState({
        errors: errors
      });
    }
  }

  prevStep(e) {
    e.preventDefault();
    this.setState({
      step: this.state.step - 1
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
            <p className="RegistrationForm__error">
              {this.state.errors['name']}
            </p>
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
            <p className="RegistrationForm__error">
              {this.state.errors['email']}
            </p>
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
            <p className="RegistrationForm__error">
              {this.state.errors['phone']}
            </p>
          </div>
        )}
        {this.state.step === 3 && (
          <div className="RegistrationForm__group">
            <label>Salary</label>
            <div className="RegistrationForm__radio-container">
              {this.salaries.map((el, index) => (
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
            <p className="RegistrationForm__error">
              {this.state.errors['salary']}
            </p>
          </div>
        )}
        {this.state.step === 4 && (
          <div>
            <p>You have successfully registered!</p>
            <div className="RegistrationForm__group">
              <label>Full name</label>
              <span className="user-name">{this.state.name}</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Email</label>
              <span className="user-email">{this.state.email}</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Phone</label>
              <span className="user-phone">{this.state.phone}</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Salary</label>
              <span className="user-salary">
                {this.salaries[this.state.salary]}
              </span>
            </div>
          </div>
        )}
        <div className="RegistrationForm__control">
          {this.state.step > 0 &&
            this.state.step < 4 && (
              <button type="button" onClick={e => this.prevStep(e)}>
                Back
              </button>
            )}
          {this.state.step < 4 && (
            <button type="submit" onClick={e => this.nextStep(e)}>
              Next
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
