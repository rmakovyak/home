import React, { Component } from "react";

import ProgressBar from "./ProgressBar";
import styles from "./RegistrationForm.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 0
    };
  }

  render() {
    return (
      <div className="RegistrationForm">
        <ProgressBar level={this.state.level} />
        <button onClick={() => this.setState({ level: this.state.level + 25 })}>
          Progress
        </button>
      </div>
    );
  }
}

export default RegistrationForm;
