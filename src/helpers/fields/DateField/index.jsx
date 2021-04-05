import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import "moment-timezone";

const DateField = ({ source, record = {} }) => {
  return (
    <span>
      <Moment format="DD/MM/YYYY">{record[source]}</Moment>
    </span>
  );
};

DateField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};
DateField.defaultProps = {
  addLabel: true
};
export default DateField;
