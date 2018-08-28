import React, { Component } from 'react';

import ProgressBar from './ProgressBar';
import styles from './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  nextStep() {
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
            <input type="text" />
          </div>
        )}
        {this.state.step === 1 && (
          <div className="RegistrationForm__group">
            <label>Email</label>
            <input type="text" />
          </div>
        )}
        {this.state.step === 2 && (
          <div className="RegistrationForm__group">
            <label>Phone number</label>
            <input type="text" />
          </div>
        )}
        {this.state.step === 3 && (
          <div className="RegistrationForm__group">
            <label>Salary</label>
            <div className="RegistrationForm__radio-container">
              <label className="RegistrationForm__radio">
                <input type="radio" name="salary" value="1" />
                0 - 1000
              </label>
              <label className="RegistrationForm__radio">
                <input type="radio" name="salary" value="2" />
                1000 - 2000
              </label>
              <label className="RegistrationForm__radio">
                <input type="radio" name="salary" value="3" />
                2000 - 3000
              </label>
              <label className="RegistrationForm__radio">
                <input type="radio" name="salary" value="4" />
                3000 - 4000
              </label>
              <label className="RegistrationForm__radio">
                <input type="radio" name="salary" value="5" />
                more than 4000
              </label>
            </div>
          </div>
        )}
        {this.state.step === 4 && (
          <div>
            <div className="RegistrationForm__group">
              <label>Full name</label>
              <span>Roman Makovyak</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Email</label>
              <span>romanmakovyak@gmail.com</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Phone</label>
              <span>romanmakovyak@gmail.com</span>
            </div>
            <div className="RegistrationForm__group">
              <label>Salary</label>
              <span>60000</span>
            </div>
          </div>
        )}
        {this.state.step < 4 && (
          <div className="RegistrationForm__group RegistrationForm__group--align-right">
            <button type="button" onClick={() => this.nextStep()}>
              Next
            </button>
          </div>
        )}
      </form>
    );
  }
}

export default RegistrationForm;
