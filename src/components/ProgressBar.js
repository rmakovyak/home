import React from "react";
import PropTypes from "prop-types";

import styles from "./ProgressBar.css";

function ProgressBar({ level }) {
  return (
    <div className="ProgressBar">
      <div className={`ProgressBar__fill ProgressBar__fill--${level}`} />
    </div>
  );
}

ProgressBar.propTypes = {
  level: PropTypes.oneOf([0, 25, 50, 75, 100])
};

ProgressBar.defaultProps = {
  level: 0
};

export default ProgressBar;
