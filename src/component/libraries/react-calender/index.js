import PropTypes from "prop-types";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Demo from "./text";
const ReactCalender = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date, view }) => <Demo />}
      />
    </div>
  );
};
ReactCalender.propTypes = {};

export default ReactCalender;
